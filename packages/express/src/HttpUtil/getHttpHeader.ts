import type { Request } from 'express-serve-static-core'

/**
 * Since there can be multiple of certain HTTP headers or
 * to prevent ugliness if someone did send us multiple
 * instances of a header we only expect one of, this
 * method grabs the 1st/only one of the desired header
 * @param header The header to find
 * @param req The received HTTP request (with headers)
 * @returns The first or only occurrence of the specified HTTP header
 */
export const getHttpHeader = (header: string, req: Request): string | undefined => {
  const headerValue = req.headers[header]
  const value
    // If the header exists
    = headerValue
      // If there's multiple of the same header
      ? Array.isArray(headerValue)
        // Grab the first one
        ? (headerValue as string[]).shift()
        // Otherwise grab the only one
        : (headerValue as string)
      // Otherwise undefined
      : undefined
  return value
}
