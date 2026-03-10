import type { LoggerMeta } from './LoggerMeta.ts'
import type { LoggerVerbosity } from './LoggerVerbosity.ts'

/** Configuration options for creating a logger instance. */
export interface LoggerOptions {
  defaultMeta?: LoggerMeta
  level?: LoggerVerbosity
}
