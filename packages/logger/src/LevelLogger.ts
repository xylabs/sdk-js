import type { EnumKey, EnumValue } from '@xylabs/enum'
import { Enum } from '@xylabs/enum'

import { NoOpLogFunction } from './NoOpLogFunction.ts'

/** A generic logging function that accepts any number of arguments. */
export type LogFunction = (...data: unknown[]) => void

/**
 * Interface to handle overlap between Winston &
 * `console` with as much congruency as possible.
 */
export interface Logger {
  debug: LogFunction
  error: LogFunction
  info: LogFunction
  log: LogFunction
  trace: LogFunction
  warn: LogFunction
}

/** Numeric log level values, from least verbose (error=1) to most verbose (trace=6). */
export const LogLevel = Enum({
  error: 1,
  warn: 2,
  info: 3,
  log: 4,
  debug: 5,
  trace: 6,
})

/** String key for a log level (e.g. 'error', 'warn', 'info'). */
export type LogLevelKey = EnumKey<typeof LogLevel>

/** Alias for LogLevelKey, representing the verbosity setting as a string. */
export type LogVerbosity = LogLevelKey

/** Numeric value of a log level (1 through 6). */
export type LogLevelValue = EnumValue<typeof LogLevel>

/**
 * A logger that filters messages based on a configured log level.
 * Methods for levels above the configured threshold return a no-op function.
 */
export class LevelLogger implements Logger {
  readonly level: LogLevelValue
  readonly logger: Logger
  constructor(logger: Logger, level: LogLevelValue = LogLevel.warn) {
    this.level = level
    this.logger = logger
  }

  get debug() {
    return this.level >= LogLevel.debug ? this.logger.debug : NoOpLogFunction
  }

  get error() {
    return this.level >= LogLevel.error ? this.logger.error : NoOpLogFunction
  }

  get info() {
    return this.level >= LogLevel.info ? this.logger.info : NoOpLogFunction
  }

  get log() {
    return this.level >= LogLevel.log ? this.logger.log : NoOpLogFunction
  }

  get trace() {
    return this.level >= LogLevel.trace ? this.logger.trace : NoOpLogFunction
  }

  get warn() {
    return this.level >= LogLevel.warn ? this.logger.warn : NoOpLogFunction
  }
}
