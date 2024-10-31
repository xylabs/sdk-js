import type Rollbar from 'rollbar'

export interface LogConfig {
  commitHash?: string
  devMode?: boolean
  payload?: Record<string, unknown>
  rollbar?: Rollbar
}
