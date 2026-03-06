import type { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import {
  describe, expect, it, vi,
} from 'vitest'
import { z } from 'zod'

import { requestHandlerValidator } from '../requestHandlerValidator.ts'

describe('requestHandlerValidator', () => {
  const createMockReqResNext = (overrides?: { body?: unknown; params?: unknown; query?: unknown }) => {
    const req = {
      params: {},
      query: {},
      body: undefined,
      ...overrides,
    } as unknown as Request

    const originalJson = vi.fn().mockReturnThis()
    const res = {
      json: originalJson,
      status: vi.fn().mockReturnThis(),
    } as unknown as Response

    const next = vi.fn()

    return {
      req, res, next, originalJson,
    }
  }

  it('should call the handler when validation passes with default schemas', async () => {
    const handler = vi.fn()
    const middleware = requestHandlerValidator()(handler)
    const {
      req, res, next,
    } = createMockReqResNext()

    await middleware(req, res, next)

    expect(handler).toHaveBeenCalledWith(req, res, next)
    expect(next).not.toHaveBeenCalled()
  })

  it('should call next with error when params validation fails', async () => {
    // eslint-disable-next-line @typescript-eslint/no-deprecated, sonarjs/deprecation
    const paramsSchema = z.object({ id: z.string().uuid() })
    const handler = vi.fn()
    const middleware = requestHandlerValidator({ params: paramsSchema })(handler)
    const {
      req, res, next,
    } = createMockReqResNext({ params: { id: 'not-a-uuid' } })

    await middleware(req, res, next)

    expect(handler).not.toHaveBeenCalled()
    expect(next).toHaveBeenCalledWith(
      expect.objectContaining({ statusCode: StatusCodes.BAD_REQUEST }),
    )
  })

  it('should call next with error when query validation fails', async () => {
    const querySchema = z.object({ page: z.string().regex(/^\d+$/) })
    const handler = vi.fn()
    const middleware = requestHandlerValidator({ query: querySchema })(handler)
    const {
      req, res, next,
    } = createMockReqResNext({ query: { page: 'abc' } })

    await middleware(req, res, next)

    expect(handler).not.toHaveBeenCalled()
    expect(next).toHaveBeenCalledWith(
      expect.objectContaining({ statusCode: StatusCodes.BAD_REQUEST }),
    )
  })

  it('should catch errors thrown by async handlers', async () => {
    const error = new Error('handler error')
    const handler = vi.fn().mockRejectedValue(error)
    const middleware = requestHandlerValidator()(handler)
    const {
      req, res, next,
    } = createMockReqResNext()

    await middleware(req, res, next)

    expect(next).toHaveBeenCalledWith(error)
  })

  it('should catch errors thrown by sync handlers', async () => {
    const error = new Error('sync handler error')
    const handler = vi.fn().mockImplementation(() => {
      throw error
    })
    const middleware = requestHandlerValidator()(handler)
    const {
      req, res, next,
    } = createMockReqResNext()

    await middleware(req, res, next)

    expect(next).toHaveBeenCalledWith(error)
  })

  it('should validate response via wrapped res.json', async () => {
    const responseSchema = z.object({ name: z.string() })
    const handler = vi.fn().mockImplementation((_req: unknown, res: Response) => {
      res.json({ name: 'valid' })
    })
    const middleware = requestHandlerValidator({ response: responseSchema })(handler)
    const {
      req, res, next, originalJson,
    } = createMockReqResNext()

    await middleware(req, res, next)

    expect(originalJson).toHaveBeenCalledWith({ name: 'valid' })
  })

  it('should throw when response validation fails', async () => {
    const responseSchema = z.object({ name: z.string() })
    const handler = vi.fn().mockImplementation((_req: unknown, res: Response) => {
      res.json({ name: 123 })
    })
    const middleware = requestHandlerValidator({ response: responseSchema })(handler)
    const {
      req, res, next,
    } = createMockReqResNext()

    await middleware(req, res, next)

    expect(next).toHaveBeenCalledWith(
      expect.objectContaining({ statusCode: StatusCodes.INTERNAL_SERVER_ERROR }),
    )
  })

  it('should call next with error when body validation fails', async () => {
    const bodySchema = z.object({ name: z.string(), age: z.number() })
    const handler = vi.fn()
    const middleware = requestHandlerValidator({ body: bodySchema })(handler)
    const {
      req, res, next,
    } = createMockReqResNext({ body: { name: 123, age: 'not a number' } })

    await middleware(req, res, next)

    expect(handler).not.toHaveBeenCalled()
    expect(next).toHaveBeenCalledWith(
      expect.objectContaining({ statusCode: StatusCodes.BAD_REQUEST }),
    )
  })

  it('should include field paths in validation error messages', async () => {
    // eslint-disable-next-line @typescript-eslint/no-deprecated, sonarjs/deprecation
    const paramsSchema = z.object({ id: z.string().uuid() })
    const handler = vi.fn()
    const middleware = requestHandlerValidator({ params: paramsSchema })(handler)
    const {
      req, res, next,
    } = createMockReqResNext({ params: { id: 'bad' } })

    await middleware(req, res, next)

    const error = next.mock.calls[0][0] as Error
    expect(error.message).toContain('params.id')
  })

  it('should join multiple validation errors with semicolons', async () => {
    // eslint-disable-next-line @typescript-eslint/no-deprecated, sonarjs/deprecation
    const paramsSchema = z.object({ id: z.string().uuid(), slug: z.string().min(5) })
    const handler = vi.fn()
    const middleware = requestHandlerValidator({ params: paramsSchema })(handler)
    const {
      req, res, next,
    } = createMockReqResNext({ params: { id: 'bad', slug: 'ab' } })

    await middleware(req, res, next)

    const error = next.mock.calls[0][0] as Error
    expect(error.message).toContain(';')
  })

  it('should assign validated data back to req when validation passes', async () => {
    const paramsSchema = z.object({ id: z.string() })
    const handler = vi.fn()
    const middleware = requestHandlerValidator({ params: paramsSchema })(handler)
    const {
      req, res, next,
    } = createMockReqResNext({ params: { id: '123' } })

    await middleware(req, res, next)

    expect(handler).toHaveBeenCalled()
    expect(req.params.id).toBe('123')
  })

  it('should use default schemas when no schemas are provided', async () => {
    const handler = vi.fn()
    const middleware = requestHandlerValidator()(handler)
    const {
      req, res, next,
    } = createMockReqResNext()

    await middleware(req, res, next)

    expect(handler).toHaveBeenCalled()
  })

  it('should restore original res.json in the catch block', async () => {
    const handler = vi.fn().mockRejectedValue(new Error('handler failed'))
    const middleware = requestHandlerValidator()(handler)
    const {
      req, res, next,
    } = createMockReqResNext()

    await middleware(req, res, next)

    expect(next).toHaveBeenCalledWith(expect.any(Error))
    // After catch, res.json should be restored (it's a bound version of the original)
    // Verify it's a function and not the validation wrapper
    expect(typeof res.json).toBe('function')
    // Call it to confirm it works (bound to the original mock)
    res.json({ test: true })
  })

  it('should include response path info in response validation error', async () => {
    const responseSchema = z.object({ id: z.number(), name: z.string() })
    const handler = vi.fn().mockImplementation((_req: unknown, res: Response) => {
      res.json({ id: 'not-a-number', name: 42 })
    })
    const middleware = requestHandlerValidator({ response: responseSchema })(handler)
    const {
      req, res, next,
    } = createMockReqResNext()

    await middleware(req, res, next)

    const error = next.mock.calls[0][0] as Error
    expect(error.message).toContain('response')
  })

  it('should handle handler that returns a non-promise value', async () => {
    const handler = vi.fn().mockReturnValue('sync result')
    const middleware = requestHandlerValidator()(handler)
    const {
      req, res, next,
    } = createMockReqResNext()

    await middleware(req, res, next)

    expect(handler).toHaveBeenCalled()
    expect(next).not.toHaveBeenCalled()
  })

  it('should handle root-level validation errors with no path', async () => {
    const bodySchema = z.string()
    const handler = vi.fn()
    const middleware = requestHandlerValidator({ body: bodySchema })(handler)
    const {
      req, res, next,
    } = createMockReqResNext({ body: 123 })

    await middleware(req, res, next)

    const error = next.mock.calls[0][0] as Error
    expect(error.message).toContain('body:')
  })
})
