import type { LoggerVerbosity } from './LoggerVerbosity.ts'
import type { WinstonVerbosity } from './WinstonVerbosity.ts'

/**
 * Converts a LoggerVerbosity level to the corresponding Winston log level.
 * @param loggerVerbosity The application-level verbosity to convert.
 * @returns The equivalent Winston verbosity level.
 */
export const toWinstonVerbosity = (loggerVerbosity: LoggerVerbosity): WinstonVerbosity => {
  return loggerVerbosity === 'all' ? 'silly' : loggerVerbosity
}
