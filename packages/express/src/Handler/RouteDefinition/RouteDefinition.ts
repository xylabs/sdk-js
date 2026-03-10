import type { RequestHandler } from 'express-serve-static-core'

/** Supported HTTP methods for route definitions. */
export type HttpMethod
  = | 'get'
    | 'post'
    | 'put'
    | 'patch'
    | 'delete'
    | 'options'
    | 'head'

/** Defines an Express route with its HTTP method, path, and handler(s). */
export interface RouteDefinition<
  H extends RequestHandler = RequestHandler,
> {
  handlers: H[] | H
  method: HttpMethod
  path: string | RegExp
}
