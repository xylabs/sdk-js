import type { LogConfig } from './model.ts'

export class Log {
  constructor(protected config: LogConfig) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  debug(...params: any[]) {
    if (this.config.devMode) {
      console.debug(params)
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error(...params: any[]) {
    console.error(params)
    if (!this.config.devMode) {
      this.config.rollbar?.error(params)
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  info(...params: any[]) {
    if (this.config.devMode) {
      console.info(params)
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  log(...params: any[]) {
    if (this.config.devMode) {
      console.log(params)
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  warn(...params: any[]) {
    console.warn(params)
    if (!this.config.devMode) {
      this.config.rollbar?.warn(params)
    }
  }
}
