import type { EnumValue } from '@xylabs/enum'
import { Enum } from '@xylabs/enum'
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
  warn: LogFunction
}

export const LogLevel = Enum({
  error: 1,
  warn: 2,
  info: 3,
  log: 4,
  debug: 5,
})

export type LogLevel = EnumValue<typeof LogLevel>

export const NoOpLogFunction = (..._data: unknown[]) => void {}

export class ConsoleLogger implements Logger {
  constructor(readonly level: LogLevel = LogLevel.warn) {}

  get debug() {
    return this.level >= LogLevel.debug ? console.debug : NoOpLogFunction
  }

  get error() {
    return this.level >= LogLevel.error ? console.error : NoOpLogFunction
  }

  get info() {
    return this.level >= LogLevel.info ? console.info : NoOpLogFunction
  }

  get log() {
    return this.level >= LogLevel.log ? console.log : NoOpLogFunction
  }

  get warn() {
    return this.level >= LogLevel.warn ? console.warn : NoOpLogFunction
  }
}
