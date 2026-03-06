import { delay } from '@xylabs/delay'
import {
  afterEach,
  beforeAll,
  beforeEach,
  describe, expect, it, test,
  vi,
} from 'vitest'

import type { ForgetConfig } from '../ForgetConfig.ts'
import { defaultForgetConfig } from '../ForgetConfig.ts'
import { forget } from '../forget.ts'
import { ForgetPromise } from '../ForgetPromise.ts'

describe('forget', () => {
  beforeAll(() => {
    vi.spyOn(console, 'log').mockImplementation(() => {})
    vi.spyOn(console, 'error').mockImplementation(() => {})
    vi.spyOn(console, 'warn').mockImplementation(() => {})
  })

  beforeEach(() => {
    ForgetPromise.activeForgets = 0
    ForgetPromise.exceptedForgets = 0
  })

  afterEach(async () => {
    // drain any lingering forgets
    await ForgetPromise.awaitInactive(10, 5000)
    globalThis.xy = undefined
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
      forget(promise)
    })
  })

  describe('forget function', () => {
    test('checking happy path', async () => {
      let cancelled = false
      forget(delay(100), { onCancel: () => (cancelled = true), timeout: 200 })
      await delay(300)
      expect(cancelled).toBeFalsy()
    })

    test('checking unhappy path (timeout triggers onCancel)', async () => {
      let cancelled = false
      forget(delay(200), { onCancel: () => (cancelled = true), timeout: 100 })
      await delay(300)
      expect(cancelled).toBeTruthy()
    })

    test('accepts a function returning a promise', async () => {
      let completed = false
      forget(() => delay(50).then(() => { completed = true }), { timeout: 500 })
      await delay(200)
      expect(completed).toBe(true)
    })

    test('accepts a synchronous function returning a value (non-promise)', () => {
      // Should not throw; non-promise values are silently ignored
      forget(() => 42 as unknown as Promise<number>)
    })

    test('accepts a non-promise value directly', () => {
      // Passing a raw value that is not a promise should be a no-op
      forget(42 as unknown as Promise<number>)
    })
  })

  describe('ForgetPromise.active', () => {
    test('is true while promise is pending', async () => {
      forget(delay(300))
      expect(ForgetPromise.active).toBeTruthy()
      await ForgetPromise.awaitInactive()
      expect(ForgetPromise.active).toBeFalsy()
    })

    test('is false after promise resolves', async () => {
      forget(delay(50))
      await delay(200)
      expect(ForgetPromise.active).toBeFalsy()
    })
  })

  describe('ForgetPromise.awaitInactive', () => {
    test('resolves to 0 when all forgets complete', async () => {
      forget(delay(100))
      const result = await ForgetPromise.awaitInactive()
      expect(result).toBe(0)
      expect(ForgetPromise.active).toBeFalsy()
    })

    test('returns active count when timeout is exceeded', async () => {
      forget(delay(300))
      const activeCount = await ForgetPromise.awaitInactive(50, 100)
      expect(activeCount).toBe(1)
      expect(ForgetPromise.active).toBeTruthy()
      await ForgetPromise.awaitInactive()
    })

    test('resolves immediately when no forgets are active', async () => {
      const result = await ForgetPromise.awaitInactive(10, 100)
      expect(result).toBe(0)
    })
  })

  describe('onComplete callback', () => {
    test('receives resolved value on success', async () => {
      let result: [number | undefined, Error | undefined] | undefined
      forget(Promise.resolve(42), {
        onComplete: (r) => { result = r },
        timeout: 1000,
      })
      await delay(100)
      expect(result).toBeDefined()
      expect(result?.[0]).toBe(42)
      expect(result?.[1]).toBeUndefined()
    })

    test('receives error on rejection', async () => {
      let result: [unknown, Error | undefined] | undefined
      forget(Promise.reject(new Error('test error')), {
        onComplete: (r) => { result = r },
        timeout: 1000,
      })
      await delay(100)
      expect(result).toBeDefined()
      expect(result?.[0]).toBeUndefined()
      expect(result?.[1]).toBeInstanceOf(Error)
    })
  })

  describe('timeout handling', () => {
    test('calls onCancel when promise exceeds timeout', async () => {
      let cancelCalled = false
      forget(delay(500), {
        name: 'timeout-test',
        onCancel: () => { cancelCalled = true },
        timeout: 50,
      })
      await delay(200)
      expect(cancelCalled).toBe(true)
    })

    test('does not call onCancel when promise completes before timeout', async () => {
      let cancelCalled = false
      forget(delay(50), {
        onCancel: () => { cancelCalled = true },
        timeout: 500,
      })
      await delay(200)
      expect(cancelCalled).toBe(false)
    })

    test('timeoutHandler logs error with name', () => {
      const errorSpy = vi.spyOn(ForgetPromise.logger, 'error')
      ForgetPromise.timeoutHandler(1000, { name: 'my-promise' })
      expect(errorSpy).toHaveBeenCalledWith(expect.stringContaining('my-promise'))
    })

    test('timeoutHandler logs external stack trace when provided', () => {
      const warnSpy = vi.spyOn(ForgetPromise.logger, 'warn')
      ForgetPromise.timeoutHandler(1000, { name: 'trace-test' }, 'fake stack')
      expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('trace-test'), 'fake stack')
    })

    test('uses default timeout from defaultForgetConfig', () => {
      expect(defaultForgetConfig.timeout).toBe(30_000)
    })

    test('no timeout when timeout is undefined', async () => {
      let cancelCalled = false
      forget(delay(100), {
        onCancel: () => { cancelCalled = true },
        timeout: undefined,
      })
      await delay(200)
      expect(cancelCalled).toBe(false)
    })
  })

  describe('error handling', () => {
    test('exceptionHandler logs error message', () => {
      const errorSpy = vi.spyOn(ForgetPromise.logger, 'error')
      const error = new Error('boom')
      const config: ForgetConfig = { name: 'err-test' }
      ForgetPromise.exceptionHandler(error, config)
      expect(errorSpy).toHaveBeenCalledWith(expect.stringContaining('err-test'), error)
    })

    test('exceptionHandler logs external stack trace when provided', () => {
      const warnSpy = vi.spyOn(ForgetPromise.logger, 'warn')
      const error = new Error('boom')
      ForgetPromise.exceptionHandler(error, { name: 'stack-test' }, 'external stack')
      expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('stack-test'), 'external stack')
    })

    test('rejected promise decrements activeForgets', async () => {
      forget(Promise.reject(new Error('fail')), { timeout: 1000 })
      await delay(100)
      expect(ForgetPromise.activeForgets).toBe(0)
    })
  })

  describe('config merging', () => {
    test('merges global config with provided config', async () => {
      let cancelCalled = false
      globalThis.xy = {
        forget: {
          config: { name: 'global-name' },
        },
      }
      forget(delay(500), {
        onCancel: () => { cancelCalled = true },
        timeout: 50,
      })
      await delay(200)
      expect(cancelCalled).toBe(true)
    })

    test('provided config overrides global config', async () => {
      let cancelCalled = false
      globalThis.xy = {
        forget: {
          config: { timeout: 50 },
        },
      }
      // provided timeout overrides global
      forget(delay(100), {
        onCancel: () => { cancelCalled = true },
        timeout: 5000,
      })
      await delay(200)
      expect(cancelCalled).toBe(false)
      await ForgetPromise.awaitInactive()
    })
  })

  describe('multiple concurrent forgets', () => {
    test('tracks multiple active forgets', async () => {
      forget(delay(200))
      forget(delay(200))
      forget(delay(200))
      expect(ForgetPromise.activeForgets).toBe(3)
      await ForgetPromise.awaitInactive()
      expect(ForgetPromise.activeForgets).toBe(0)
    })
  })

  describe('synchronous exception in forget (lines 97-102)', () => {
    test('catches synchronous exception thrown during promise setup', () => {
      const originalRace = Promise.race
      const exceptedBefore = ForgetPromise.exceptedForgets
      // Override Promise.race to throw synchronously
      Promise.race = () => { throw new Error('sync-race-throw') }
      try {
        const onException = vi.fn()
        ForgetPromise.forget(Promise.resolve('ok'), { name: 'sync-exception-test', onException })
        expect(ForgetPromise.exceptedForgets).toBe(exceptedBefore + 1)
        expect(onException).toHaveBeenCalledWith(expect.any(Error))
      } finally {
        Promise.race = originalRace
      }
    })
  })

  describe('Promise.race catch handler (line 97)', () => {
    test('catch handler on Promise.race swallows rejection silently', async () => {
      // Create a promise that rejects after the wrapper completes
      const rejecting = Promise.reject(new Error('race-reject'))
      // forget should not throw even when the race rejects
      ForgetPromise.forget(rejecting, { name: 'race-catch-test' })
      await delay(100)
      // The catch on line 96-98 swallows the error, so no unhandled rejection
      expect(ForgetPromise.activeForgets).toBe(0)
    })
  })
})
