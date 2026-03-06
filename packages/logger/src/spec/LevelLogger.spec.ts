import {
  describe, expect, it, vi,
} from 'vitest'

import { LevelLogger, LogLevel } from '../LevelLogger.ts'
import type { Logger } from '../LevelLogger.ts'
import { NoOpLogFunction } from '../NoOpLogFunction.ts'

describe('LevelLogger', () => {
  const createMockLogger = (): Logger => ({
    debug: vi.fn(),
    error: vi.fn(),
    info: vi.fn(),
    log: vi.fn(),
    trace: vi.fn(),
    warn: vi.fn(),
  })

  it('defaults to warn level', () => {
    const mock = createMockLogger()
    const logger = new LevelLogger(mock)
    expect(logger.level).toBe(LogLevel.warn)
  })

  it('at error level, only error is active', () => {
    const mock = createMockLogger()
    const logger = new LevelLogger(mock, LogLevel.error)

    expect(logger.error).toBe(mock.error)
    expect(logger.warn).toBe(NoOpLogFunction)
    expect(logger.info).toBe(NoOpLogFunction)
    expect(logger.log).toBe(NoOpLogFunction)
    expect(logger.debug).toBe(NoOpLogFunction)
    expect(logger.trace).toBe(NoOpLogFunction)
  })

  it('at warn level, error and warn are active', () => {
    const mock = createMockLogger()
    const logger = new LevelLogger(mock, LogLevel.warn)

    expect(logger.error).toBe(mock.error)
    expect(logger.warn).toBe(mock.warn)
    expect(logger.info).toBe(NoOpLogFunction)
    expect(logger.log).toBe(NoOpLogFunction)
    expect(logger.debug).toBe(NoOpLogFunction)
    expect(logger.trace).toBe(NoOpLogFunction)
  })

  it('at info level, error/warn/info are active', () => {
    const mock = createMockLogger()
    const logger = new LevelLogger(mock, LogLevel.info)

    expect(logger.error).toBe(mock.error)
    expect(logger.warn).toBe(mock.warn)
    expect(logger.info).toBe(mock.info)
    expect(logger.log).toBe(NoOpLogFunction)
    expect(logger.debug).toBe(NoOpLogFunction)
    expect(logger.trace).toBe(NoOpLogFunction)
  })

  it('at log level, error/warn/info/log are active', () => {
    const mock = createMockLogger()
    const logger = new LevelLogger(mock, LogLevel.log)

    expect(logger.error).toBe(mock.error)
    expect(logger.warn).toBe(mock.warn)
    expect(logger.info).toBe(mock.info)
    expect(logger.log).toBe(mock.log)
    expect(logger.debug).toBe(NoOpLogFunction)
    expect(logger.trace).toBe(NoOpLogFunction)
  })

  it('at debug level, only trace is inactive', () => {
    const mock = createMockLogger()
    const logger = new LevelLogger(mock, LogLevel.debug)

    expect(logger.error).toBe(mock.error)
    expect(logger.warn).toBe(mock.warn)
    expect(logger.info).toBe(mock.info)
    expect(logger.log).toBe(mock.log)
    expect(logger.debug).toBe(mock.debug)
    expect(logger.trace).toBe(NoOpLogFunction)
  })

  it('at trace level, all methods are active', () => {
    const mock = createMockLogger()
    const logger = new LevelLogger(mock, LogLevel.trace)

    expect(logger.error).toBe(mock.error)
    expect(logger.warn).toBe(mock.warn)
    expect(logger.info).toBe(mock.info)
    expect(logger.log).toBe(mock.log)
    expect(logger.debug).toBe(mock.debug)
    expect(logger.trace).toBe(mock.trace)
  })
})
