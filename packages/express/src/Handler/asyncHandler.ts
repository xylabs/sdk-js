import type {
  NextFunction, ParamsDictionary, Query, Request, RequestHandler, Response,
} from 'express-serve-static-core'

/**
 * Wraps an async Express request handler to forward rejected promises to the error handler.
 * @param fn The async request handler to wrap.
 * @returns A request handler that catches async errors and passes them to next().
 */
export function asyncHandler<P = NoReqParams, ResBody = NoResBody, ReqBody = NoReqBody, ReqQuery = NoReqQuery, Locals extends NoLocals = NoLocals>(
  fn: RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>,
) {
  return (req: Request<P, ResBody, ReqBody, ReqQuery, Locals>, res: Response<ResBody, Locals>, next: NextFunction) => {
    return Promise.resolve(fn(req, res, next)).catch(next)
  }
}

/** Empty object type used as a default for request/response body generics. */
export interface Empty {}

/** Default type for request route parameters. */
export type NoReqParams = ParamsDictionary
/** Default type for response body when none is specified. */
export type NoResBody = Empty
/** Default type for request body when none is specified. */
export type NoReqBody = Empty
/** Default type for request query parameters. */
export type NoReqQuery = Query
/** Default type for response locals. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type NoLocals = Record<string, any>
