import {
  beforeEach, describe, expect, it, vi,
} from 'vitest'

vi.mock('../../Logger/getDefaultLogger.ts', () => ({
  getDefaultLogger: () => ({
    error: vi.fn(),
    log: vi.fn(),
  }),
}))

import type {
  NextFunction, Request, Response,
} from 'express'

import type { ExpressError } from '../../Model/index.ts'
import { errorToJsonHandler } from '../errorToJsonHandler.ts'

describe('errorToJsonHandler', () => {
  let mockReq: Request
  let mockRes: Response
  let mockNext: NextFunction

  beforeEach(() => {
    mockReq = {} as Request
    mockRes = {
      json: vi.fn(),
      send: vi.fn(),
      status: vi.fn().mockReturnThis(),
    } as unknown as Response
    mockNext = vi.fn()
  })

  it('should send error response with status code when error has statusCode', () => {
    const error: ExpressError = Object.assign(new Error('test error'), { statusCode: 400 })
    errorToJsonHandler(error, mockReq, mockRes, mockNext)
    expect(mockRes.status).toHaveBeenCalledWith(400)
    expect(mockRes.send).toHaveBeenCalledWith({ error: 'test error' })
    expect(mockNext).toHaveBeenCalledWith(error)
  })

  it('should default to 500 status code when error has no statusCode', () => {
    const error: ExpressError = new Error('server error')
    errorToJsonHandler(error, mockReq, mockRes, mockNext)
    expect(mockRes.status).toHaveBeenCalledWith(500)
    expect(mockRes.send).toHaveBeenCalledWith({ error: 'server error' })
    expect(mockNext).toHaveBeenCalledWith(error)
  })

  it('should call next with the error even for non-error values', () => {
    const notAnError = 'string error' as unknown as ExpressError
    errorToJsonHandler(notAnError, mockReq, mockRes, mockNext)
    expect(mockRes.status).not.toHaveBeenCalled()
    expect(mockNext).toHaveBeenCalledWith(notAnError)
  })

  it('should default to 500 when statusCode is not a number', () => {
    const error: ExpressError = Object.assign(new Error('bad code'), { statusCode: 'not a number' as unknown as number })
    errorToJsonHandler(error, mockReq, mockRes, mockNext)
    expect(mockRes.status).toHaveBeenCalledWith(500)
  })

  it('should always call next, even when error is handled', () => {
    const error: ExpressError = Object.assign(new Error('test'), { statusCode: 404 })
    errorToJsonHandler(error, mockReq, mockRes, mockNext)
    expect(mockNext).toHaveBeenCalledTimes(1)
    expect(mockNext).toHaveBeenCalledWith(error)
  })

  it('should not call send or status for non-Error objects like null', () => {
    errorToJsonHandler(null as unknown as ExpressError, mockReq, mockRes, mockNext)
    expect(mockRes.status).not.toHaveBeenCalled()
    expect(mockRes.send).not.toHaveBeenCalled()
    expect(mockNext).toHaveBeenCalledWith(null)
  })

  it('should not call send or status for undefined error', () => {
    errorToJsonHandler(undefined as unknown as ExpressError, mockReq, mockRes, mockNext)
    expect(mockRes.status).not.toHaveBeenCalled()
    expect(mockRes.send).not.toHaveBeenCalled()
    expect(mockNext).toHaveBeenCalledWith(undefined)
  })

  it('should not call send or status for a plain object (not Error instance)', () => {
    const plainObj = { message: 'not an error', statusCode: 400 } as unknown as ExpressError
    errorToJsonHandler(plainObj, mockReq, mockRes, mockNext)
    // isError checks for Error instances, so plain objects should not trigger send
    expect(mockNext).toHaveBeenCalledWith(plainObj)
  })

  it('should preserve the original error statusCode if it is a valid number', () => {
    const error: ExpressError = Object.assign(new Error('not found'), { statusCode: 404 })
    errorToJsonHandler(error, mockReq, mockRes, mockNext)
    expect(error.statusCode).toBe(404)
    expect(mockRes.status).toHaveBeenCalledWith(404)
  })
})
