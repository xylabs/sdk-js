import { delay } from '@xylabs/delay'
import {
  beforeAll,
  describe, expect, it, test,
  vi,
} from 'vitest'

import { forgetNode } from '../forgetNode.ts'
import { ForgetPromiseNode } from '../ForgetPromiseNode.ts'

describe('forgetNode', () => {
  beforeAll(() => {
    vi.spyOn(console, 'log').mockImplementation(() => {
      // Stop expected logs from being logged
    })
  })
  describe('with types', () => {
    const cases: Promise<unknown>[] = [
      Promise.resolve(1),
      Promise.resolve({ a: 1 }),
      Promise.resolve('resolved'),
      Promise.resolve([1, 2, 3, 4]),
      Promise.resolve(null),
      Promise.resolve(),
    ]
    it.each(cases)('properly infers the type', (promise) => {
      forgetNode(promise)
    })
  })
  test('checking happy path', async () => {
    let cancelled = false
    forgetNode(delay(100), { onCancel: () => (cancelled = true), timeout: 200 })
    await delay(300)
    expect(cancelled).toBeFalsy()
  })
  test('checking unhappy path', async () => {
    let cancelled = false
    forgetNode(delay(200), { onCancel: () => (cancelled = true), timeout: 100 })
    await delay(300)
    expect(cancelled).toBeTruthy()
  })
  test('forget active', async () => {
    forgetNode(delay(300))
    expect(ForgetPromiseNode.active).toBeTruthy()
    await delay(600)
    expect(ForgetPromiseNode.active).toBeFalsy()
  })
  test('forget active async', async () => {
    forgetNode(delay(1000))
    await ForgetPromiseNode.awaitInactive()
    expect(ForgetPromiseNode.active).toBeFalsy()
  })
  test('forget active async w/timeout', async () => {
    forgetNode(delay(300))
    const activeCount = await ForgetPromiseNode.awaitInactive(100, 200)
    expect(activeCount).toBe(1)
    expect(ForgetPromiseNode.active).toBeTruthy()
    await ForgetPromiseNode.awaitInactive()
    expect(ForgetPromiseNode.active).toBeFalsy()
  })
})
