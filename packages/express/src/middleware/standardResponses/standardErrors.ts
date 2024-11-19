import type {
  NextFunction, Request, Response,
} from 'express'

import type { ExpressError } from '../../Model/index.ts'
import type { ApiError } from './jsonApi/index.ts'

export const standardErrors = (err: ExpressError, req: Request, res: Response, next: NextFunction) => {
  if (!err) {
    next(err)
    return
  }
  console.error(err.message)
  if (!err.statusCode) err.statusCode = 500

  const error: ApiError = {
    detail: err.message,
    status: `${err.statusCode}`,
    title: err.name,
  }

  res.status(err.statusCode).json(error)

  next(err)
}
