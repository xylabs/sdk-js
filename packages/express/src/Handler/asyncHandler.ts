import type {
  NextFunction, Request, RequestHandler, Response,
} from 'express'
import type { ParamsDictionary, Query } from 'express-serve-static-core'

export function asyncHandler<P = NoReqParams, ResBody = NoResBody, ReqBody = NoReqBody, ReqQuery = NoReqQuery, Locals extends NoLocals = NoLocals>(
  fn: RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>,
) {
  return (req: Request<P, ResBody, ReqBody, ReqQuery, Locals>, res: Response<ResBody, Locals>, next: NextFunction) => {
    return Promise.resolve(fn(req, res, next)).catch(next)
  }
}

export interface Empty {}

export type NoReqParams = ParamsDictionary
export type NoResBody = Empty
export type NoReqBody = Empty
export type NoReqQuery = Query
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type NoLocals = Record<string, any>
