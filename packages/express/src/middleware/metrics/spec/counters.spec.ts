import type {
  Application, NextFunction, Request, Response,
} from 'express-serve-static-core'
import {
  beforeEach, describe, expect, it, vi,
} from 'vitest'

import { Counters } from '../../../Performance/index.ts'
import { useRequestCounters } from '../counters.ts'

type MiddlewareHandler = (req: Request, res: Response, next: NextFunction) => void

describe('useRequestCounters', () => {
  let mockApp: Application
  let registeredMiddleware: MiddlewareHandler
  let registeredStatsHandler: MiddlewareHandler

  beforeEach(() => {
    Counters.counters = {}
    registeredMiddleware = undefined as unknown as MiddlewareHandler
    registeredStatsHandler = undefined as unknown as MiddlewareHandler

    mockApp = {
      use: vi.fn((handler: MiddlewareHandler) => {
        registeredMiddleware = handler
      }),
      get: vi.fn((_path: string, handler: MiddlewareHandler) => {
        registeredStatsHandler = handler
      }),
    } as unknown as Application

    useRequestCounters(mockApp)
  })

  it('should register a use middleware and a /stats get handler', () => {
    expect(mockApp.use).toHaveBeenCalledOnce()
    expect(mockApp.get).toHaveBeenCalledWith('/stats', expect.any(Function))
  })

  describe('request counting middleware', () => {
    it('should increment the path counter and _calls counter', () => {
      const mockReq = { path: '/test' } as unknown as Request
      const mockRes = {} as Response
      const mockNext = vi.fn()

      registeredMiddleware(mockReq, mockRes, mockNext)

      expect(Counters.counters['/test']).toBe(1)
      expect(Counters.counters['_calls']).toBe(1)
      expect(mockNext).toHaveBeenCalledOnce()
    })

    it('should accumulate counts for multiple requests', () => {
      const mockNext = vi.fn()

      registeredMiddleware({ path: '/test' } as unknown as Request, {} as Response, mockNext)
      registeredMiddleware({ path: '/test' } as unknown as Request, {} as Response, mockNext)
      registeredMiddleware({ path: '/other' } as unknown as Request, {} as Response, mockNext)

      expect(Counters.counters['/test']).toBe(2)
      expect(Counters.counters['/other']).toBe(1)
      expect(Counters.counters['_calls']).toBe(3)
    })
  })

  describe('/stats endpoint', () => {
    it('should respond with alive status and counters', () => {
      const mockReq = {} as Request
      const jsonFn = vi.fn()
      const mockRes = { json: jsonFn } as unknown as Response
      const mockNext = vi.fn()

      registeredStatsHandler(mockReq, mockRes, mockNext)

      expect(jsonFn).toHaveBeenCalledWith(
        expect.objectContaining({
          alive: true,
          counters: Counters.counters,
        }),
      )
      expect(mockNext).toHaveBeenCalledOnce()
    })

    it('should calculate avgTime based on _totalTime and _calls', () => {
      Counters.counters._totalTime = 1000
      Counters.counters._calls = 10

      const mockReq = {} as Request
      const jsonFn = vi.fn()
      const mockRes = { json: jsonFn } as unknown as Response
      const mockNext = vi.fn()

      registeredStatsHandler(mockReq, mockRes, mockNext)

      const response = jsonFn.mock.calls[0][0] as Record<string, unknown>
      expect(response.avgTime).toBe('100.00ms')
    })

    it('should handle zero calls gracefully', () => {
      const mockReq = {} as Request
      const jsonFn = vi.fn()
      const mockRes = { json: jsonFn } as unknown as Response
      const mockNext = vi.fn()

      registeredStatsHandler(mockReq, mockRes, mockNext)

      const response = jsonFn.mock.calls[0][0] as Record<string, unknown>
      expect(response.avgTime).toBe('0.00ms')
    })

    it('should include the alive field as true', () => {
      const mockReq = {} as Request
      const jsonFn = vi.fn()
      const mockRes = { json: jsonFn } as unknown as Response
      const mockNext = vi.fn()

      registeredStatsHandler(mockReq, mockRes, mockNext)

      const response = jsonFn.mock.calls[0][0] as Record<string, unknown>
      expect(response.alive).toBe(true)
    })

    it('should reflect counter state accumulated from middleware calls', () => {
      const mockNext = vi.fn()
      registeredMiddleware({ path: '/api/test' } as unknown as Request, {} as Response, mockNext)
      registeredMiddleware({ path: '/api/test' } as unknown as Request, {} as Response, mockNext)

      const jsonFn = vi.fn()
      const mockRes = { json: jsonFn } as unknown as Response
      registeredStatsHandler({} as Request, mockRes, mockNext)

      const response = jsonFn.mock.calls[0][0] as Record<string, unknown>
      expect((response.counters as Record<string, number>)['/api/test']).toBe(2)
      expect((response.counters as Record<string, number>)['_calls']).toBe(2)
    })
  })

  describe('request counting middleware with different paths', () => {
    it('should track each unique path separately', () => {
      const mockNext = vi.fn()

      registeredMiddleware({ path: '/a' } as unknown as Request, {} as Response, mockNext)
      registeredMiddleware({ path: '/b' } as unknown as Request, {} as Response, mockNext)
      registeredMiddleware({ path: '/a' } as unknown as Request, {} as Response, mockNext)

      expect(Counters.counters['/a']).toBe(2)
      expect(Counters.counters['/b']).toBe(1)
      expect(Counters.counters['_calls']).toBe(3)
    })
  })
})
