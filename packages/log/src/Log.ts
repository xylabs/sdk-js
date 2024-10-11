import type Rollbar from 'rollbar'

export interface LogConfig {
  commitHash?: string
  devMode?: boolean
  payload?: Record<string, unknown>
  rollbar?: Rollbar
}

export class Log {
  private devMode?: boolean
  private rollbar?: Rollbar

  constructor(config: LogConfig) {
    this.devMode = config.devMode ?? false
    this.rollbar = config.rollbar
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  debug(...params: any[]) {
    if (this.devMode) {
      console.debug(params)
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error(...params: any[]) {
    console.error(params)
    if (!this.devMode) {
      this.rollbar?.error(params)
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  info(...params: any[]) {
    if (this.devMode) {
      console.info(params)
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  log(...params: any[]) {
    if (this.devMode) {
      console.log(params)
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  warn(...params: any[]) {
    console.warn(params)
    if (!this.devMode) {
      this.rollbar?.warn(params)
    }
  }
}
