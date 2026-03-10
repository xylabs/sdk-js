/**
 * Loosely following the JSON API 1.0 formats and conventions
 * https://jsonapi.org/format/
 */

import type { ApiError } from './error.ts'
import type { ApiLinks } from './links.ts'
import type { Relationship } from './relationship.ts'
import type { ApiResourceIdentifierObject } from './resourceIdentifier.ts'

/** A JSON:API resource object with optional attributes, links, meta, and relationships. */
export interface ApiResourceObject extends ApiResourceIdentifierObject {
  /**
   * An attributes object representing some of the resource's data.
   */
  attributes?: Record<string, unknown>
  /**
   * A links object containing links related to the resource.
   */
  links?: ApiLinks
  /**
   * A meta object containing non-standard meta-information about a resource that can not be represented as an attribute or relationship.
   */
  meta?: Record<string, unknown>
  /**
   * A relationships object describing relationships between the resource and other JSON:API resources.
   */
  relationships?: Record<string, Relationship>
}

/** JSON:API version and metadata descriptor. */
export interface JsonApi {
  meta?: Record<string, unknown>
  version?: '1.0' | '1.1'
}

/** Base interface for all JSON:API responses, including optional links and metadata. */
export interface ApiResponseBase {
  jsonapi?: JsonApi
  links?: ApiLinks
  meta?: Record<string, unknown>
}

/** A successful JSON:API response containing primary data and optional included resources. */
export interface ApiDataResponse<T extends ApiResourceIdentifierObject> extends ApiResponseBase {
  data: T
  included?: ApiResourceObject[]
}
/** A JSON:API error response containing one or more error objects. */
export interface ApiErrorResponse extends ApiResponseBase {
  errors: ApiError[]
}

/** A JSON:API response, either a data response or an error response. */
export type ApiResponse<T extends ApiResourceIdentifierObject> = ApiDataResponse<T> | ApiErrorResponse
