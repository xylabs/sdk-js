/* eslint-disable require-await */
import type { Tracer } from '@opentelemetry/api'
import {
  context, createContextKey, propagation, trace as TRACE_API,
} from '@opentelemetry/api'
import type { Logger } from '@xylabs/logger'
import {
  afterEach,
  describe, expect, it, vi,
} from 'vitest'

import {
  cloneContextWithoutSpan, span, spanAsync, spanRoot, spanRootAsync,
} from '../span.ts'

describe('span', () => {
  it('executes function and returns result', () => {
    expect(span('test', () => 42)).toBe(42)
  })

  it('propagates errors', () => {
    expect(() => span('test', () => {
      throw new Error('fail')
    })).toThrow('fail')
  })

  it('falls back to running fn directly when tracer is undefined', () => {
    const result = span('test', () => 'no-trace', undefined as unknown as Tracer)
    expect(result).toBe('no-trace')
  })
})

describe('spanRoot', () => {
  it('executes function and returns result', () => {
    expect(spanRoot('test', () => 'ok')).toBe('ok')
  })

  it('propagates errors', () => {
    expect(() => spanRoot('test', () => {
      throw new Error('root fail')
    })).toThrow('root fail')
  })

  it('falls back to running fn directly when tracer is undefined', () => {
    const result = spanRoot('test', () => 'no-trace-root', undefined as unknown as Tracer)
    expect(result).toBe('no-trace-root')
  })
})

describe('spanAsync', () => {
  it('executes async function and returns result', async () => {
    expect(await spanAsync('test', async () => 42)).toBe(42)
  })

  it('propagates async errors', async () => {
    await expect(spanAsync('test', async () => {
      throw new Error('async fail')
    })).rejects.toThrow('async fail')
  })

  it('supports timeBudgetLimit config', async () => {
    const result = await spanAsync('test', async () => 'ok', { timeBudgetLimit: 5000 })
    expect(result).toBe('ok')
  })

  it('supports timeBudgetLimit with custom logger', async () => {
    const logger = { warn: vi.fn() } as unknown as Logger
    const result = await spanAsync('test', async () => 'logged', { timeBudgetLimit: 5000, logger })
    expect(result).toBe('logged')
  })

  it('uses console as default logger when logger is null and timeBudgetLimit set', async () => {
    const result = await spanAsync('test', async () => 'default-logger', { timeBudgetLimit: 5000, logger: null })
    expect(result).toBe('default-logger')
  })

  it('falls back to running fn directly when tracer is undefined', async () => {
    const result = await spanAsync('test', async () => 'async-no-trace', { tracer: undefined as unknown as Tracer })
    expect(result).toBe('async-no-trace')
  })

  it('falls back with timeBudgetLimit when tracer is undefined', async () => {
    const result = await spanAsync('test', async () => 'budget-no-trace', { tracer: undefined as unknown as Tracer, timeBudgetLimit: 5000 })
    expect(result).toBe('budget-no-trace')
  })
})

describe('spanRootAsync', () => {
  it('executes async function and returns result', async () => {
    expect(await spanRootAsync('test', async () => 'root ok')).toBe('root ok')
  })

  it('propagates async errors', async () => {
    await expect(spanRootAsync('test', async () => {
      throw new Error('root async fail')
    })).rejects.toThrow('root async fail')
  })

  it('supports timeBudgetLimit config', async () => {
    const result = await spanRootAsync('test', async () => 'budgeted', { timeBudgetLimit: 5000 })
    expect(result).toBe('budgeted')
  })

  it('supports timeBudgetLimit with custom logger', async () => {
    const logger = { warn: vi.fn() } as unknown as Logger
    const result = await spanRootAsync('test', async () => 'logged-root', { timeBudgetLimit: 5000, logger })
    expect(result).toBe('logged-root')
  })

  it('uses console as default logger when logger is null', async () => {
    const result = await spanRootAsync('test', async () => 'null-logger', { timeBudgetLimit: 5000, logger: null })
    expect(result).toBe('null-logger')
  })

  it('falls back to running fn directly when tracer is undefined', async () => {
    const result = await spanRootAsync('test', async () => 'root-no-trace', { tracer: undefined as unknown as Tracer })
    expect(result).toBe('root-no-trace')
  })

  it('falls back with timeBudgetLimit when tracer is undefined', async () => {
    const result = await spanRootAsync('test', async () => 'root-budget-no-trace', { tracer: undefined as unknown as Tracer, timeBudgetLimit: 5000 })
    expect(result).toBe('root-budget-no-trace')
  })
})

describe('span fallback when getTracer returns undefined', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('span falls back to fn when tracer resolves to undefined', () => {
    vi.spyOn(TRACE_API, 'getTracer').mockReturnValue(undefined as unknown as Tracer)
    const result = span('test', () => 'fallback-span')
    expect(result).toBe('fallback-span')
  })

  it('spanRoot falls back to fn when tracer resolves to undefined', () => {
    vi.spyOn(TRACE_API, 'getTracer').mockReturnValue(undefined as unknown as Tracer)
    const result = spanRoot('test', () => 'fallback-spanRoot')
    expect(result).toBe('fallback-spanRoot')
  })

  it('spanAsync falls back to fn when tracer resolves to undefined', async () => {
    vi.spyOn(TRACE_API, 'getTracer').mockReturnValue(undefined as unknown as Tracer)
    const result = await spanAsync('test', async () => 'fallback-spanAsync')
    expect(result).toBe('fallback-spanAsync')
  })

  it('spanRootAsync falls back to fn when tracer resolves to undefined', async () => {
    vi.spyOn(TRACE_API, 'getTracer').mockReturnValue(undefined as unknown as Tracer)
    const result = await spanRootAsync('test', async () => 'fallback-spanRootAsync')
    expect(result).toBe('fallback-spanRootAsync')
  })
})

describe('cloneContextWithoutSpan', () => {
  it('returns a context object', () => {
    const ctx = cloneContextWithoutSpan(context.active())
    expect(ctx).toBeDefined()
  })

  it('copies custom config keys', () => {
    const key = createContextKey('test-key')
    const activeCtx = context.active().setValue(key, 'test-value')
    const cloned = cloneContextWithoutSpan(activeCtx, [key])
    expect(cloned.getValue(key)).toBe('test-value')
  })

  it('does not copy config keys with undefined values', () => {
    const key = createContextKey('missing-key')
    const cloned = cloneContextWithoutSpan(context.active(), [key])
    expect(cloned.getValue(key)).toBeUndefined()
  })

  it('copies baggage from the active context', () => {
    const baggage = propagation.createBaggage({ 'test-entry': { value: 'baggage-value' } })
    const activeCtx = propagation.setBaggage(context.active(), baggage)
    const cloned = cloneContextWithoutSpan(activeCtx)
    const clonedBaggage = propagation.getBaggage(cloned)
    expect(clonedBaggage).toBeDefined()
    expect(clonedBaggage?.getEntry('test-entry')?.value).toBe('baggage-value')
  })

  it('handles context without baggage', () => {
    const cloned = cloneContextWithoutSpan(context.active())
    const clonedBaggage = propagation.getBaggage(cloned)
    expect(clonedBaggage).toBeUndefined()
  })

  it('called with no configKeys defaults to empty array', () => {
    const cloned = cloneContextWithoutSpan(context.active())
    expect(cloned).toBeDefined()
  })
})
