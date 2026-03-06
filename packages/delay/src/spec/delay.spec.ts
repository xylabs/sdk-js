import {
  describe, expect, it, test, vi,
} from 'vitest'

import { delay } from '../delay.ts'

describe('delay', () => {
  test('checking happy path', async () => {
    const testInterval = 500
    const startTime = Date.now()
    await delay(testInterval)
    const passedTime = Date.now() - startTime
    expect(passedTime).toBeGreaterThanOrEqual(testInterval * 0.95)
    expect(passedTime).toBeLessThan(testInterval * 1.05)
  })

  test('resolves after specified ms', async () => {
    const startTime = Date.now()
    await delay(100)
    const elapsed = Date.now() - startTime
    expect(elapsed).toBeGreaterThanOrEqual(100)
  })

  test('resolves with undefined', async () => {
    const result = await delay(10)
    expect(result).toBeUndefined()
  })

  test('delay(0) resolves almost immediately', async () => {
    const startTime = Date.now()
    await delay(0)
    const elapsed = Date.now() - startTime
    expect(elapsed).toBeLessThan(50)
  })

  test('returns a promise', () => {
    const result = delay(10)
    expect(result).toBeInstanceOf(Promise)
  })

  test('multiple delays resolve independently', async () => {
    const order: number[] = []
    const p1 = delay(100).then(() => {
      order.push(1)
    })
    const p2 = delay(50).then(() => {
      order.push(2)
    })
    await Promise.all([p1, p2])
    // shorter delay should resolve first
    expect(order).toEqual([2, 1])
  })

  it('can be used to yield the event loop', async () => {
    let flag = false
    const p = delay(0).then(() => {
      flag = true
    })
    // flag should still be false synchronously
    expect(flag).toBe(false)
    await p
    expect(flag).toBe(true)
  })

  it('handles small delay values', async () => {
    const startTime = Date.now()
    await delay(1)
    const elapsed = Date.now() - startTime
    expect(elapsed).toBeGreaterThanOrEqual(1)
    expect(elapsed).toBeLessThan(100)
  })

  it('multiple sequential delays accumulate time', async () => {
    const startTime = Date.now()
    await delay(50)
    await delay(50)
    const elapsed = Date.now() - startTime
    expect(elapsed).toBeGreaterThanOrEqual(100)
  })
})
