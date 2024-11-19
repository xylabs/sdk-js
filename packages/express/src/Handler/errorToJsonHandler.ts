import type {
  NextFunction, Request, Response,
} from 'express'

import type { ExpressError } from '../Model/index.ts'

export const errorToJsonHandler = (error: ExpressError, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    console.error(error.message)
    if (!error.statusCode) error.statusCode = 500
    res.status(error.statusCode).send({ error: error.message })
  }
  next(error)
}
