import { getLogger } from './getLogger.ts'
import type { Logger } from './Logger.ts'
import type { WrappedWinstonLogger } from './WrappedWinstonLogger.ts'

/**
 * Static instance to prevent multiple instances of the same logger
 * with the same config
 */
let defaultLogger: WrappedWinstonLogger
export const getDefaultLogger = (): Logger => {
  if (defaultLogger) return defaultLogger
  return getLogger()
}
