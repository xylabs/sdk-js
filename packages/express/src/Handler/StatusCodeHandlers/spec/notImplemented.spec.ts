import {
  describe, expect, it, vi,
} from 'vitest'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'

import { notImplemented } from '../notImplemented.ts'

describe('notImplemented', () => {
  it('should call next with NOT_IMPLEMENTED status and message', () => {
    const req = {} as any
    const res = {} as any
    const next = vi.fn()

    notImplemented(req, res, next)

    expect(next).toHaveBeenCalledWith({
      message: ReasonPhrases.NOT_IMPLEMENTED,
      statusCode: StatusCodes.NOT_IMPLEMENTED,
    })
  })
})
