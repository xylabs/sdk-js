import type { Request, Response } from 'express'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'
import {
  describe, expect, it, vi,
} from 'vitest'

import { notImplemented } from '../notImplemented.ts'

describe('notImplemented', () => {
  it('should call next with NOT_IMPLEMENTED status and message', () => {
    const req = {} as Request
    const res = {} as Response
    const next = vi.fn()

    notImplemented(req, res, next)

    expect(next).toHaveBeenCalledWith({
      message: ReasonPhrases.NOT_IMPLEMENTED,
      statusCode: StatusCodes.NOT_IMPLEMENTED,
    })
  })
})
