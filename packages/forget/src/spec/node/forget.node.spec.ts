import { delay } from '@xylabs/delay'
import {
  afterEach,
  beforeAll,
  beforeEach,
  describe, expect, it, test,
  vi,
} from 'vitest'

import { forgetNode } from '../../forgetNode.ts'
import { defaultForgetNodeConfig } from '../../ForgetNodeConfig.ts'
import { ForgetPromiseNode } from '../../ForgetPromiseNode.ts'

describe('forgetNode', () => {
  beforeAll(() => {
    vi.spyOn(console, 'log').mockImplementation(() => {})
    vi.spyOn(console, 'error').mockImplementation(() => {})
    vi.spyOn(console, 'warn').mockImplementation(() => {})
  })

  beforeEach(() => {
    ForgetPromiseNode.activeForgets = 0
    ForgetPromiseNode.exceptedForgets = 0
  })

  afterEach(async () => {
    await ForgetPromiseNode.awaitInactive(10, 5000)
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

  describe('ForgetPromiseNode.exceptionHandler', () => {
    it('calls super exceptionHandler and logs error', () => {
      const errorSpy = vi.spyOn(ForgetPromiseNode.logger, 'error')
      const error = new Error('node-exception')
      ForgetPromiseNode.exceptionHandler(error, { name: 'node-test' })
      expect(errorSpy).toHaveBeenCalledWith(expect.stringContaining('node-test'), error)
    })

    it('logs external stack trace when provided', () => {
      const warnSpy = vi.spyOn(ForgetPromiseNode.logger, 'warn')
      const error = new Error('boom')
      ForgetPromiseNode.exceptionHandler(error, { name: 'trace-node' }, 'external stack trace')
      expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('trace-node'), 'external stack trace')
    })
  })

  describe('ForgetPromiseNode.timeoutHandler', () => {
    it('calls super timeoutHandler and logs error', () => {
      const errorSpy = vi.spyOn(ForgetPromiseNode.logger, 'error')
      ForgetPromiseNode.timeoutHandler(5000, { name: 'timeout-node-test' })
      expect(errorSpy).toHaveBeenCalledWith(expect.stringContaining('timeout-node-test'))
    })

    it('logs external stack trace when provided', () => {
      const warnSpy = vi.spyOn(ForgetPromiseNode.logger, 'warn')
      ForgetPromiseNode.timeoutHandler(5000, { name: 'timeout-trace' }, 'stack here')
      expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('timeout-trace'), 'stack here')
    })
  })

  describe('ForgetNodeConfig defaults', () => {
    it('has expected default values', () => {
      expect(defaultForgetNodeConfig.terminateOnException).toBe(false)
      expect(defaultForgetNodeConfig.terminateOnTimeout).toBe(false)
      expect(defaultForgetNodeConfig.timeout).toBe(30_000)
    })
  })

  describe('onComplete callback', () => {
    it('receives resolved value on success', async () => {
      let result: [number | undefined, Error | undefined] | undefined
      forgetNode(Promise.resolve(99), {
        onComplete: (r) => { result = r },
        timeout: 1000,
      })
      await delay(100)
      expect(result).toBeDefined()
      expect(result?.[0]).toBe(99)
      expect(result?.[1]).toBeUndefined()
    })

    it('receives error on rejection', async () => {
      let result: [unknown, Error | undefined] | undefined
      forgetNode(Promise.reject(new Error('node-error')), {
        onComplete: (r) => { result = r },
        timeout: 1000,
      })
      await delay(100)
      expect(result).toBeDefined()
      expect(result?.[0]).toBeUndefined()
      expect(result?.[1]).toBeInstanceOf(Error)
    })
  })

  describe('multiple concurrent forgetNode calls', () => {
    it('tracks multiple active forgets', async () => {
      forgetNode(delay(200))
      forgetNode(delay(200))
      expect(ForgetPromiseNode.activeForgets).toBe(2)
      await ForgetPromiseNode.awaitInactive()
      expect(ForgetPromiseNode.activeForgets).toBe(0)
    })
  })

  describe('terminateOnException', () => {
    it('calls process.exit(1) when terminateOnException is true', () => {
      const exitSpy = vi.spyOn(process, 'exit').mockImplementation(() => undefined as never)
      const error = new Error('terminate-exception')
      ForgetPromiseNode.exceptionHandler(error, { name: 'term-test', terminateOnException: true })
      expect(exitSpy).toHaveBeenCalledWith(1)
      exitSpy.mockRestore()
    })

    it('does not call process.exit when terminateOnException is false', () => {
      const exitSpy = vi.spyOn(process, 'exit').mockImplementation(() => undefined as never)
      const error = new Error('no-terminate')
      ForgetPromiseNode.exceptionHandler(error, { name: 'no-term', terminateOnException: false })
      expect(exitSpy).not.toHaveBeenCalled()
      exitSpy.mockRestore()
    })
  })

  describe('terminateOnTimeout', () => {
    it('calls process.exit(2) when terminateOnTimeout is true', () => {
      const exitSpy = vi.spyOn(process, 'exit').mockImplementation(() => undefined as never)
      ForgetPromiseNode.timeoutHandler(5000, { name: 'timeout-term', terminateOnTimeout: true })
      expect(exitSpy).toHaveBeenCalledWith(2)
      exitSpy.mockRestore()
    })

    it('does not call process.exit when terminateOnTimeout is false', () => {
      const exitSpy = vi.spyOn(process, 'exit').mockImplementation(() => undefined as never)
      ForgetPromiseNode.timeoutHandler(5000, { name: 'no-timeout-term', terminateOnTimeout: false })
      expect(exitSpy).not.toHaveBeenCalled()
      exitSpy.mockRestore()
    })
  })
})
