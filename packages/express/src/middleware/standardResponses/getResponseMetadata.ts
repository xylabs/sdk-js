import type { Response } from 'express-serve-static-core'

/**
 * Extracts response metadata from res.locals, computing profile duration if profiling was started.
 * @param res The Express response to extract metadata from.
 * @returns The metadata record including any profiling information.
 */
export const getResponseMetadata = (res: Response): Record<string, unknown> => {
  const meta: Record<string, unknown> = res.locals?.meta || {}
  // NOTE: We should do this somewhere else to better separate concerns
  const profile = res.locals.meta?.profile
  if (profile) {
    const startTime = profile?.startTime
    if (startTime) {
      const endTime = Date.now()
      const duration = endTime - startTime
      res.locals.meta.profile = {
        duration, endTime, startTime,
      }
    }
  }
  return meta
}
