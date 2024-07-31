import { delay } from '@xylabs/delay'

import { forget, ForgetPromise } from '../forget.ts'

describe('forget', () => {
  beforeAll(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {
      // Stop expected logs from being logged
    })
  })
  describe('with types', () => {
    const cases = [
      Promise.resolve(1),
      Promise.resolve({ a: 1 }),
      Promise.resolve('resolved'),
      Promise.resolve([1, 2, 3, 4]),
      Promise.resolve(null),
      Promise.resolve(),
    ]
    it.each(cases)('properly infers the type', (promise) => {
      forget(promise)
    })
  })
  test('checking happy path', async () => {
    let cancelled = false
    forget(delay(100), { cancel: () => (cancelled = true), delay: 200 })
    await delay(300)
    expect(cancelled).toBeFalsy()
  })
  test('checking unhappy path', async () => {
    let cancelled = false
    forget(delay(200), { cancel: () => (cancelled = true), delay: 100 })
    await delay(300)
    expect(cancelled).toBeTruthy()
  })
  test('forget active', async () => {
    forget(delay(300))
    expect(ForgetPromise.active).toBeTruthy()
    await delay(600)
    expect(ForgetPromise.active).toBeFalsy()
  })
  test('forget active async', async () => {
    forget(delay(1000))
    await ForgetPromise.awaitInactive()
    expect(ForgetPromise.active).toBeFalsy()
  })
  test('forget active async w/timeout', async () => {
    forget(delay(300))
    const activeCount = await ForgetPromise.awaitInactive(100, 200)
    expect(activeCount).toBe(1)
    expect(ForgetPromise.active).toBeTruthy()
    await ForgetPromise.awaitInactive()
    expect(ForgetPromise.active).toBeFalsy()
  })
})
