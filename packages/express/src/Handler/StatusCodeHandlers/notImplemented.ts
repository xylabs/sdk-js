import type { RequestHandler } from 'express-serve-static-core'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'

/** Express request handler that responds with a 501 Not Implemented error. */
export const notImplemented: RequestHandler = (_req, _res, next) => {
  next({ message: ReasonPhrases.NOT_IMPLEMENTED, statusCode: StatusCodes.NOT_IMPLEMENTED })
}
