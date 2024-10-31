import {
  describe, expect, test,
} from 'vitest'

import { IdLogger } from '../IdLogger.ts'
import { ConsoleLogger } from '../Logger.ts'

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
