import {
  describe, expect, it,
} from 'vitest'

import { NoOpLogFunction } from '../NoOpLogFunction.ts'
import { SilentLogger } from '../SilentLogger.ts'

describe('SilentLogger', () => {
  it('all methods are NoOpLogFunction', () => {
    const logger = new SilentLogger()
    expect(logger.debug).toBe(NoOpLogFunction)
    expect(logger.error).toBe(NoOpLogFunction)
    expect(logger.info).toBe(NoOpLogFunction)
    expect(logger.log).toBe(NoOpLogFunction)
    expect(logger.trace).toBe(NoOpLogFunction)
    expect(logger.warn).toBe(NoOpLogFunction)
  })

  it('calling methods does not throw', () => {
    const logger = new SilentLogger()
    expect(() => logger.debug('test')).not.toThrow()
    expect(() => logger.error('test')).not.toThrow()
    expect(() => logger.info('test')).not.toThrow()
    expect(() => logger.log('test')).not.toThrow()
    expect(() => logger.trace('test')).not.toThrow()
    expect(() => logger.warn('test')).not.toThrow()
  })
})
