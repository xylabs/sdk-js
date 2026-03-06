import {
  describe, expect, it, vi,
} from 'vitest'

import { ConsoleLogger } from '../ConsoleLogger.ts'
import { IdLogger } from '../IdLogger.ts'
import type { Logger } from '../LevelLogger.ts'

describe('IdLogger', () => {
  const createMockLogger = (): Logger => ({
    debug: vi.fn(),
    error: vi.fn(),
    info: vi.fn(),
    log: vi.fn(),
    trace: vi.fn(),
    warn: vi.fn(),
  })

  it('constructs with ConsoleLogger', () => {
    const logger = new IdLogger(new ConsoleLogger(), () => 'TestLoggerId')
    expect(logger).toBeDefined()
  })

  it('prefixes all log methods with [id]', () => {
    const mock = createMockLogger()
    const logger = new IdLogger(mock, () => 'myId')

    logger.debug('d')
    logger.error('e')
    logger.info('i')
    logger.log('l')
    logger.trace('t')
    logger.warn('w')

    expect(mock.debug).toHaveBeenCalledWith('[myId]', 'd')
    expect(mock.error).toHaveBeenCalledWith('[myId]', 'e')
    expect(mock.info).toHaveBeenCalledWith('[myId]', 'i')
    expect(mock.log).toHaveBeenCalledWith('[myId]', 'l')
    expect(mock.trace).toHaveBeenCalledWith('[myId]', 't')
    expect(mock.warn).toHaveBeenCalledWith('[myId]', 'w')
  })

  it('handles undefined id function', () => {
    const mock = createMockLogger()
    const logger = new IdLogger(mock)

    logger.log('test')
    expect(mock.log).toHaveBeenCalledWith('[undefined]', 'test')
  })

  it('supports setting id via setter', () => {
    const mock = createMockLogger()
    const logger = new IdLogger(mock)

    logger.id = 'newId'
    logger.log('test')
    expect(mock.log).toHaveBeenCalledWith('[newId]', 'test')
  })

  it('passes multiple arguments', () => {
    const mock = createMockLogger()
    const logger = new IdLogger(mock, () => 'x')

    logger.log('a', 'b', 'c')
    expect(mock.log).toHaveBeenCalledWith('[x]', 'a', 'b', 'c')
  })
})
