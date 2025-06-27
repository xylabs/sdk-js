import { LevelLogger, LogLevel } from './LevelLogger.ts'

export class ConsoleLogger extends LevelLogger {
  constructor(level: LogLevel = LogLevel.warn) {
    super(console, level)
  }
}
