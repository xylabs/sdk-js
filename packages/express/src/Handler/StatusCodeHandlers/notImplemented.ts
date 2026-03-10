import type { RequestHandler } from 'express-serve-static-core'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'

export const notImplemented: RequestHandler = (_req, _res, next) => {
  next({ message: ReasonPhrases.NOT_IMPLEMENTED, statusCode: StatusCodes.NOT_IMPLEMENTED })
}
