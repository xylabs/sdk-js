import type {
  Request, RequestHandler, Response,
} from 'express'
import mung from 'express-mung'

import { getResponseMetadata } from './getResponseMetadata.js'

interface TransformResponseLocals {
  rawResponse?: boolean
}

/**
 * Flags the response to forgo the standard response envelope
 * and return the raw response body to the client
 * @param res The response to disable the standard response format on
 */
export const setRawResponseFormat = (res: Response): void => {
  res.locals.rawResponse = true
}

/**
 * Clears any flags on the response, allowing the response to
 * use the default standard response envelope
 * @param res The response to set to the standard response format
 */
export const clearRawResponseFormat = (res: Response): void => {
  res.locals.rawResponse = false
}

/**
 * Checks if there are any flags on the response that would cause it
 * to forgo the standard response envelope and return the raw response
 * body to the client
 * @param res
 * @returns True if there are any flags on the response, false otherwise
 */
export const isRawResponseFormatSet = (res: Response): boolean => {
  return res.locals.rawResponse ? true : false
}

/**
 * Transforms each response to conform to the standard response format (compatible with JSON API)
 * @param body The original request body
 * @param _req The request
 * @param res The response
 * @returns The transformed response body
 */
const transformResponse = (body: unknown, _req: Request, res: Response<unknown, TransformResponseLocals>) => {
  return isRawResponseFormatSet(res)
    ? body
    : (res.statusCode >= 200 && res.statusCode < 300)
        ? { data: body, meta: getResponseMetadata(res) }
        : { error: body, meta: getResponseMetadata(res) }
}

/**
 * Connect middleware to enable the transform of all responses to match
 * the standard response format (compatible with JSON API)
 */

export const standardResponses: RequestHandler = mung.json(transformResponse, { mungError: true })
