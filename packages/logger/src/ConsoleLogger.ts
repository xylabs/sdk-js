import type { LogLevelValue } from './LevelLogger.ts'
import { LevelLogger, LogLevel } from './LevelLogger.ts'

/** A LevelLogger that delegates to the global `console` object. */
export class ConsoleLogger extends LevelLogger {
  constructor(level: LogLevelValue = LogLevel.warn) {
    super(console, level)
  }
}
