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

export enum LogLevel {
  error = 1,
  warn = 2,
  info = 3,
  debug = 4,
  log = 5,
}

export const NoOpLogFunction = (_message?: unknown) => void {}

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
