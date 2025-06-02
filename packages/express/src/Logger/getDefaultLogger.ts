import type { Logger } from '@xylabs/logger'

import { getLogger } from './getLogger.ts'
import type { WrappedWinstonLogger } from './WrappedWinstonLogger.ts'

/**
 * Static instance to prevent multiple instances of the same logger
 * with the same config
 */

declare global {
  var xy: {
    defaultLogger?: WrappedWinstonLogger
  }
}

export const getDefaultLogger = (): Logger => {
  if (globalThis.xy === undefined) globalThis.xy = {}
  if (globalThis.xy.defaultLogger) return globalThis.xy.defaultLogger
  return getLogger()
}
