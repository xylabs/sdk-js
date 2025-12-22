/* eslint-disable @typescript-eslint/no-explicit-any */
import { isDefined, isPromise } from '@xylabs/typeof'
import type {
  NextFunction, Request, RequestHandler, Response,
} from 'express'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'
import type { ZodType } from 'zod'
import { z } from 'zod'

import type { ExpressError } from '../Model/index.ts'

/**
 * Empty Zod schema for requests with no parameters.
 */
export const EmptyParamsZod = z.object({}).catchall(z.string())

/**
 * Empty Zod schema for requests with no query parameters.
 */
export const EmptyQueryParamsZod = z.object({}).catchall(z.union([z.string(), z.array(z.string())]))

/**
 * Default validation schemas for request handler validator.
 */
export const ValidateRequestDefaults = {
  params: EmptyParamsZod,
  query: EmptyQueryParamsZod,
  body: z.json().optional(),
  response: z.json().optional(),
}

type ValidatableRequestKey = 'params' | 'query' | 'body'

/**
 * Factory for Express middleware that validates request and response objects using Zod schemas.
 * @param schemas The Zod schemas to use for validation.
 * @returns A middleware function for validating requests and responses.
 */
export function requestHandlerValidator<
  TParams extends typeof EmptyQueryParamsZod | ZodType<Record<string, string>> = typeof EmptyQueryParamsZod,
  TQuery extends typeof EmptyQueryParamsZod | ZodType<Record<string, string | string[]>> = typeof EmptyQueryParamsZod,
  TBody extends ZodType<unknown> = ZodType<unknown>,
  TResponse extends ZodType<unknown> = ZodType<unknown>,
>(schemas?: Partial<{
  body: TBody
  params: TParams
  query: TQuery
  response: TResponse
}>) {
  type Params = z.infer<TParams>
  type Query = z.infer<TQuery>
  type Body = z.infer<TBody>
  type Res = z.infer<TResponse>
  const validators = { ...ValidateRequestDefaults, ...schemas }

  return (handler: (req: Request<Params, Res, Body, Query>, res: Response<Res>, next: NextFunction) => unknown): RequestHandler => {
    return async (req: Request, res: Response, next: NextFunction) => {
      const originalJson = res.json.bind(res)
      try {
      // Validate incoming request
        const errors: string[] = []
        const keys: ValidatableRequestKey[] = ['params', 'query', 'body']
        for (const key of keys) {
          const validator = validators[key]
          const result = validator.safeParse(req[key])
          if (result.success) {
            if (isDefined(result.data)) Object.assign(req[key], result.data)
          } else {
            errors.push(
              ...result.error.issues.map(
                issue => (issue.path.length === 0)
                  ? `${key}: ${issue.message}`
                  : `${key}.${issue.path.join('.')}: ${issue.message}`,
              ),
            )
          }
        }

        // If there were validation errors, short-circuit and return Bad Request
        if (errors.length > 0) {
          const message = errors.join('; ')
          const err: ExpressError = new Error(message)
          err.name = ReasonPhrases.BAD_REQUEST
          err.statusCode = StatusCodes.BAD_REQUEST
          next(err)
          return false
        }

        // Wrap res.json to validate outgoing response
        res.json = (data: any) => {
          const result = validators.response.safeParse(data)
          if (result.success) {
            return originalJson(result.data)
          } else {
            const message = result.error.issues.map(
              issue => (issue.path.length === 0)
                ? `response: ${issue.message}`
                : `response.${issue.path.join('.')}: ${issue.message}`,
            ).join('; ')
            const err: ExpressError = new Error(message)
            err.name = ReasonPhrases.INTERNAL_SERVER_ERROR
            err.statusCode = StatusCodes.INTERNAL_SERVER_ERROR

            // Restore original json function in case the error handler wants to use it
            res.json = originalJson
            throw err
          }
        }

        // Automatically handle async errors
        const result = handler(req as any, res as any, next)
        if (result && isPromise(result)) {
          await result
        }
      } catch (err) {
        res.json = originalJson
        next(err)
      }
    }
  }
}
