import {
  beforeEach, describe, expect, it, vi,
} from 'vitest'

import { Counters } from '../../../Performance/index.ts'
import { useRequestCounters } from '../counters.ts'

describe('useRequestCounters', () => {
  let mockApp: any
  let registeredMiddleware: any
  let registeredStatsHandler: any

  beforeEach(() => {
    Counters.counters = {}
    registeredMiddleware = null
    registeredStatsHandler = null

    mockApp = {
      use: vi.fn((handler: any) => {
        registeredMiddleware = handler
      }),
      get: vi.fn((path: string, handler: any) => {
        registeredStatsHandler = handler
      }),
    }

    useRequestCounters(mockApp)
  })

  it('should register a use middleware and a /stats get handler', () => {
    expect(mockApp.use).toHaveBeenCalledOnce()
    expect(mockApp.get).toHaveBeenCalledWith('/stats', expect.any(Function))
  })

  describe('request counting middleware', () => {
    it('should increment the path counter and _calls counter', () => {
      const mockReq = { path: '/test' } as any
      const mockRes = {} as any
      const mockNext = vi.fn()

      registeredMiddleware(mockReq, mockRes, mockNext)

      expect(Counters.counters['/test']).toBe(1)
      expect(Counters.counters['_calls']).toBe(1)
      expect(mockNext).toHaveBeenCalledOnce()
    })

    it('should accumulate counts for multiple requests', () => {
      const mockNext = vi.fn()

      registeredMiddleware({ path: '/test' } as any, {} as any, mockNext)
      registeredMiddleware({ path: '/test' } as any, {} as any, mockNext)
      registeredMiddleware({ path: '/other' } as any, {} as any, mockNext)

      expect(Counters.counters['/test']).toBe(2)
      expect(Counters.counters['/other']).toBe(1)
      expect(Counters.counters['_calls']).toBe(3)
    })
  })

  describe('/stats endpoint', () => {
    it('should respond with alive status and counters', () => {
      const mockReq = {} as any
      const mockRes = { json: vi.fn() } as any
      const mockNext = vi.fn()

      registeredStatsHandler(mockReq, mockRes, mockNext)

      expect(mockRes.json).toHaveBeenCalledWith(
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

      const mockReq = {} as any
      const mockRes = { json: vi.fn() } as any
      const mockNext = vi.fn()

      registeredStatsHandler(mockReq, mockRes, mockNext)

      const response = mockRes.json.mock.calls[0][0]
      expect(response.avgTime).toBe('100.00ms')
    })

    it('should handle zero calls gracefully', () => {
      const mockReq = {} as any
      const mockRes = { json: vi.fn() } as any
      const mockNext = vi.fn()

      registeredStatsHandler(mockReq, mockRes, mockNext)

      const response = mockRes.json.mock.calls[0][0]
      expect(response.avgTime).toBe('0.00ms')
    })

    it('should include the alive field as true', () => {
      const mockReq = {} as any
      const mockRes = { json: vi.fn() } as any
      const mockNext = vi.fn()

      registeredStatsHandler(mockReq, mockRes, mockNext)

      const response = mockRes.json.mock.calls[0][0]
      expect(response.alive).toBe(true)
    })

    it('should reflect counter state accumulated from middleware calls', () => {
      const mockNext = vi.fn()
      registeredMiddleware({ path: '/api/test' } as any, {} as any, mockNext)
      registeredMiddleware({ path: '/api/test' } as any, {} as any, mockNext)

      const mockRes = { json: vi.fn() } as any
      registeredStatsHandler({} as any, mockRes, mockNext)

      const response = mockRes.json.mock.calls[0][0]
      expect(response.counters['/api/test']).toBe(2)
      expect(response.counters['_calls']).toBe(2)
    })
  })

  describe('request counting middleware with different paths', () => {
    it('should track each unique path separately', () => {
      const mockNext = vi.fn()

      registeredMiddleware({ path: '/a' } as any, {} as any, mockNext)
      registeredMiddleware({ path: '/b' } as any, {} as any, mockNext)
      registeredMiddleware({ path: '/a' } as any, {} as any, mockNext)

      expect(Counters.counters['/a']).toBe(2)
      expect(Counters.counters['/b']).toBe(1)
      expect(Counters.counters['_calls']).toBe(3)
    })
  })
})
