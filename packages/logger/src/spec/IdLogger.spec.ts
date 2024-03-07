import { IdLogger } from '../IdLogger'
import { ConsoleLogger } from '../Logger'

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
