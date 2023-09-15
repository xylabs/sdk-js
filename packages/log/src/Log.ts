import Rollbar from 'rollbar'

export interface LogConfig {
  commitHash?: string
  devMode?: boolean
  payload?: Record<string, unknown>
  rollbarToken?: string
}

export class Log {
  private devMode?: boolean
  private rollbar?: Rollbar

  constructor(config: LogConfig) {
    this.devMode = config.devMode ?? false

    if (config.rollbarToken) {
      this.rollbar = new Rollbar({
        accessToken: config.rollbarToken,
        captureUncaught: true,
        captureUnhandledRejections: true,
        codeVersion: config.commitHash,
        code_version: config.commitHash,
        payload: {
          client: {
            javascript: {
              code_version: config.commitHash,
              guess_uncaught_frames: true,
              source_map_enabled: true,
            },
          },
          codeVersion: config.commitHash,
          code_version: config.commitHash,
          environment: this.devMode ? 'development' : 'production',
          ...config.payload,
        },
        sendConfig: true,
      })
    }
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
