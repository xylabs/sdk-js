import type { EnumKey, EnumValue } from '@xylabs/enum'
import { Enum } from '@xylabs/enum'

import { NoOpLogFunction } from './NoOpLogFunction.ts'

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

export const LogLevel = Enum({
  error: 1,
  warn: 2,
  info: 3,
  log: 4,
  debug: 5,
  trace: 6,
})

export type LogLevelKey = EnumKey<typeof LogLevel>
export type LogVerbosity = LogLevelKey

export type LogLevelValue = EnumValue<typeof LogLevel>

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
