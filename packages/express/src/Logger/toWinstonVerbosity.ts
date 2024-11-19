import type { LoggerVerbosity } from './LoggerVerbosity.ts'
import type { WinstonVerbosity } from './WinstonVerbosity.ts'

export const toWinstonVerbosity = (loggerVerbosity: LoggerVerbosity): WinstonVerbosity => {
  return loggerVerbosity === 'all' ? 'silly' : loggerVerbosity
}
