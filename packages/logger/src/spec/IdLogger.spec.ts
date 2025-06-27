import {
  describe, expect, test,
} from 'vitest'

import { ConsoleLogger } from '../ConsoleLogger.ts'
import { IdLogger } from '../IdLogger.ts'

describe('Logger', () => {
  test('checking happy path', () => {
    const logger = new IdLogger(new ConsoleLogger(), () => 'TestLoggerId')
    expect(logger).toBeDefined()
    const testLogFunc = () => {
      logger.warn('Test Log')
    }
    testLogFunc()
  })
})
