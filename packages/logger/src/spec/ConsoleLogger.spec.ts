import {
  describe, expect, it,
} from 'vitest'

import { ConsoleLogger } from '../ConsoleLogger.ts'
import { LevelLogger, LogLevel } from '../LevelLogger.ts'

describe('ConsoleLogger', () => {
  it('extends LevelLogger', () => {
    const logger = new ConsoleLogger()
    expect(logger).toBeInstanceOf(LevelLogger)
  })

  it('defaults to warn level', () => {
    const logger = new ConsoleLogger()
    expect(logger.level).toBe(LogLevel.warn)
  })

  it('accepts custom level', () => {
    const logger = new ConsoleLogger(LogLevel.trace)
    expect(logger.level).toBe(LogLevel.trace)
  })

  it('uses console as the underlying logger', () => {
    const logger = new ConsoleLogger()
    expect(logger.logger).toBe(console)
  })
})
