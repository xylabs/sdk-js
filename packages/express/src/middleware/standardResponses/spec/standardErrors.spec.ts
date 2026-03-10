import {
  beforeEach, describe, expect, it, vi,
} from 'vitest'

vi.mock('../../../Logger/getDefaultLogger.ts', () => ({
  getDefaultLogger: () => ({
    error: vi.fn(),
    log: vi.fn(),
  }),
}))

import type {
  NextFunction, Request, Response,
} from 'express-serve-static-core'

import type { ExpressError } from '../../../Model/index.ts'
import { standardErrors } from '../standardErrors.ts'

describe('standardErrors', () => {
  let mockReq: Request
  let mockRes: Response
  let mockNext: NextFunction

  beforeEach(() => {
    mockReq = {} as Request
    mockRes = {
      json: vi.fn(),
      status: vi.fn().mockReturnThis(),
    } as unknown as Response
    mockNext = vi.fn()
  })

  it('should respond with error JSON and status code from error', () => {
    const error: ExpressError = Object.assign(new Error('bad request'), { statusCode: 400 })
    standardErrors(error, mockReq, mockRes, mockNext)

    expect(mockRes.status).toHaveBeenCalledWith(400)
    expect(mockRes.json).toHaveBeenCalledWith({
      detail: 'bad request',
      status: '400',
      title: 'Error',
    })
    expect(mockNext).toHaveBeenCalledWith(error)
  })

  it('should default to 500 when no statusCode is set', () => {
    const error: ExpressError = new Error('server error')
    standardErrors(error, mockReq, mockRes, mockNext)

    expect(mockRes.status).toHaveBeenCalledWith(500)
    expect(mockRes.json).toHaveBeenCalledWith(
      expect.objectContaining({ status: '500' }),
    )
    expect(mockNext).toHaveBeenCalledWith(error)
  })

  it('should call next with err and skip processing for non-Error values', () => {
    const notAnError = 'string error' as unknown as ExpressError
    standardErrors(notAnError, mockReq, mockRes, mockNext)

    expect(mockRes.status).not.toHaveBeenCalled()
    expect(mockRes.json).not.toHaveBeenCalled()
    expect(mockNext).toHaveBeenCalledWith(notAnError)
  })

  it('should call next with undefined when error is undefined', () => {
    standardErrors(undefined, mockReq, mockRes, mockNext)

    expect(mockRes.status).not.toHaveBeenCalled()
    expect(mockNext).toHaveBeenCalledWith(undefined)
  })

  it('should include the error name as the title in the JSON response', () => {
    const error: ExpressError = Object.assign(new TypeError('type mismatch'), { statusCode: 422 })
    standardErrors(error, mockReq, mockRes, mockNext)

    expect(mockRes.json).toHaveBeenCalledWith(
      expect.objectContaining({
        title: 'TypeError',
        detail: 'type mismatch',
      }),
    )
  })

  it('should set statusCode to 500 when it is explicitly undefined', () => {
    const error: ExpressError = new Error('no code')
    error.statusCode = undefined
    standardErrors(error, mockReq, mockRes, mockNext)

    expect(mockRes.status).toHaveBeenCalledWith(500)
    expect(mockRes.json).toHaveBeenCalledWith(
      expect.objectContaining({ status: '500' }),
    )
  })

  it('should convert statusCode to string in the response', () => {
    const error: ExpressError = Object.assign(new Error('forbidden'), { statusCode: 403 })
    standardErrors(error, mockReq, mockRes, mockNext)

    expect(mockRes.json).toHaveBeenCalledWith(
      expect.objectContaining({ status: '403' }),
    )
  })

  it('should use the error message as the detail field', () => {
    const error: ExpressError = Object.assign(new Error('detailed message here'), { statusCode: 500 })
    standardErrors(error, mockReq, mockRes, mockNext)

    expect(mockRes.json).toHaveBeenCalledWith(
      expect.objectContaining({ detail: 'detailed message here' }),
    )
  })

  it('should not call res.status or res.json for a number value', () => {
    standardErrors(42 as unknown as ExpressError, mockReq, mockRes, mockNext)

    expect(mockRes.status).not.toHaveBeenCalled()
    expect(mockRes.json).not.toHaveBeenCalled()
    expect(mockNext).toHaveBeenCalledWith(42)
  })
})
