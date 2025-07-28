import type { LogLevelValue } from './LevelLogger.ts'
import { LevelLogger, LogLevel } from './LevelLogger.ts'

export class ConsoleLogger extends LevelLogger {
  constructor(level: LogLevelValue = LogLevel.warn) {
    super(console, level)
  }
}
