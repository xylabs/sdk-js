import { isError, isNumber } from '@xylabs/typeof'
import type {
  NextFunction, Request, Response,
} from 'express-serve-static-core'

import { getDefaultLogger } from '../Logger/index.ts'
import type { ExpressError } from '../Model/index.ts'

/**
 * Express error handler that logs the error and sends a JSON response with the error message and status code.
 * @param error The Express error to handle.
 * @param req The incoming request.
 * @param res The outgoing response.
 * @param next The next middleware function.
 */
export const errorToJsonHandler = (error: ExpressError, req: Request, res: Response, next: NextFunction) => {
  if (isError(error)) {
    getDefaultLogger().error(error.message)
    if (!isNumber(error.statusCode)) error.statusCode = 500
    res.status(error.statusCode).send({ error: error.message })
  }
  next(error)
}
