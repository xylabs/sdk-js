import type { Request, Response } from 'express-serve-static-core'
import {
  describe, expect, it, vi,
} from 'vitest'

import { asyncHandler } from '../asyncHandler.ts'

describe('asyncHandler', () => {
  const mockReq = {} as Request
  const mockRes = {} as Response

  it('should call the handler and return a promise', async () => {
    const handler // eslint-disable-next-line unicorn/no-useless-undefined
      = vi.fn().mockResolvedValue(undefined)
    const next = vi.fn()
    const wrapped = asyncHandler(handler)
    await wrapped(mockReq, mockRes, next)
    expect(handler).toHaveBeenCalledWith(mockReq, mockRes, next)
  })

  it('should call next with error when handler rejects', async () => {
    const error = new Error('test error')
    const handler = vi.fn().mockRejectedValue(error)
    const next = vi.fn()
    const wrapped = asyncHandler(handler)
    await wrapped(mockReq, mockRes, next)
    expect(next).toHaveBeenCalledWith(error)
  })

  it('should not call next when handler succeeds', async () => {
    const handler // eslint-disable-next-line unicorn/no-useless-undefined
      = vi.fn().mockResolvedValue(undefined)
    const next = vi.fn()
    const wrapped = asyncHandler(handler)
    await wrapped(mockReq, mockRes, next)
    expect(next).not.toHaveBeenCalled()
  })

  it('should handle a synchronous handler that returns a non-promise value', async () => {
    const handler = vi.fn().mockReturnValue('sync-result')
    const next = vi.fn()
    const wrapped = asyncHandler(handler)
    await wrapped(mockReq, mockRes, next)
    expect(handler).toHaveBeenCalledWith(mockReq, mockRes, next)
    expect(next).not.toHaveBeenCalled()
  })

  it('should return a function', () => {
    const handler = vi.fn()
    const wrapped = asyncHandler(handler)
    expect(typeof wrapped).toBe('function')
  })

  it('should pass through req, res, and next to the handler', async () => {
    const customReq = { path: '/test', params: { id: '1' } } as unknown as Request
    const customRes = { status: vi.fn() } as unknown as Response
    const next = vi.fn()
    const handler // eslint-disable-next-line unicorn/no-useless-undefined
      = vi.fn().mockResolvedValue(undefined)
    const wrapped = asyncHandler(handler)
    await wrapped(customReq, customRes, next)
    expect(handler).toHaveBeenCalledWith(customReq, customRes, next)
  })
})
