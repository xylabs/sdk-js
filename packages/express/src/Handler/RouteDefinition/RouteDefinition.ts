import type { RequestHandler } from 'express'

export type HttpMethod
  = | 'get'
    | 'post'
    | 'put'
    | 'patch'
    | 'delete'
    | 'options'
    | 'head'

export interface RouteDefinition<
  H extends RequestHandler = RequestHandler,
> {
  handlers: H[] | H
  method: HttpMethod
  path: string | RegExp
}
