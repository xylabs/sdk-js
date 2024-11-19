import type { LoggerMeta } from './LoggerMeta.ts'
import type { LoggerVerbosity } from './LoggerVerbosity.ts'

export interface LoggerOptions {
  defaultMeta?: LoggerMeta
  level?: LoggerVerbosity
}
