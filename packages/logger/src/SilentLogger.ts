import type { Logger } from './LevelLogger.ts'
import { NoOpLogFunction } from './NoOpLogFunction.ts'

/**
 * A logger that does not log anything.
 * This is useful when you want to disable logging
 * like when running unit tests or in silent mode.
 * It implements the `Logger` interface but all methods
 * are no-op functions.
 */
export class SilentLogger implements Logger {
  readonly debug = NoOpLogFunction
  readonly error = NoOpLogFunction
  readonly info = NoOpLogFunction
  readonly log = NoOpLogFunction
  readonly trace = NoOpLogFunction
  readonly warn = NoOpLogFunction
}
