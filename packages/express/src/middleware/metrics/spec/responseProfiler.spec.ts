import type {
  NextFunction, Request, Response,
} from 'express'
import {
  describe, expect, it, vi,
} from 'vitest'

import { responseProfiler } from '../responseProfiler.ts'

describe('responseProfiler', () => {
  it('should initialize res.locals.meta with profile startTime', () => {
    const mockReq = {} as Request
    const mockRes = { locals: {} } as Response
    const mockNext = vi.fn() as NextFunction

    responseProfiler(mockReq, mockRes, mockNext)

    expect(mockRes.locals.meta).toBeDefined()
    expect(mockRes.locals.meta.profile).toBeDefined()
    expect(mockRes.locals.meta.profile.startTime).toBeGreaterThan(0)
    expect(typeof mockRes.locals.meta.profile.startTime).toBe('number')
    expect(mockNext).toHaveBeenCalledOnce()
  })

  it('should preserve existing meta properties', () => {
    const mockReq = {} as Request
    const mockRes = { locals: { meta: { existing: 'value' } } } as unknown as Response
    const mockNext = vi.fn() as NextFunction

    responseProfiler(mockReq, mockRes, mockNext)

    expect(mockRes.locals.meta.existing).toBe('value')
    expect(mockRes.locals.meta.profile).toBeDefined()
    expect(mockNext).toHaveBeenCalledOnce()
  })

  it('should create meta when res.locals exists but meta does not', () => {
    const mockReq = {} as Request
    const mockRes = { locals: {} } as Response
    const mockNext = vi.fn() as NextFunction

    responseProfiler(mockReq, mockRes, mockNext)

    expect(mockRes.locals.meta).toBeDefined()
    expect(mockRes.locals.meta.profile.startTime).toBeGreaterThan(0)
  })

  it('should set startTime close to current time', () => {
    const mockReq = {} as Request
    const mockRes = { locals: {} } as Response
    const mockNext = vi.fn() as NextFunction
    const before = Date.now()

    responseProfiler(mockReq, mockRes, mockNext)

    const after = Date.now()
    expect(mockRes.locals.meta.profile.startTime).toBeGreaterThanOrEqual(before)
    expect(mockRes.locals.meta.profile.startTime).toBeLessThanOrEqual(after)
  })
})
