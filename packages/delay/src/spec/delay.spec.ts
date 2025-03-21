import {
  describe, expect, test,
} from 'vitest'

import { delay } from '../delay.ts'

describe('delay', () => {
  test('checking happy path', async () => {
    const testInterval = 500
    const startTime = Date.now()
    await delay(testInterval)
    const passedTime = Date.now() - startTime
    expect(passedTime).toBeGreaterThanOrEqual(testInterval)
    expect(passedTime).toBeLessThan(testInterval * 1.05)
  })
})
