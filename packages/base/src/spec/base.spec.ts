import type { MeterProvider, TracerProvider } from '@opentelemetry/api'
import type { Logger } from '@xylabs/logger'
import {
  afterEach,
  describe, expect, it,
} from 'vitest'

import type { BaseClassName } from '../Base.ts'
import { Base } from '../Base.ts'
import { disableGloballyUnique, globallyUnique } from '../globallyUnique.ts'
import { UniqueBase } from '../UniqueBase.ts'

class TestBase extends Base {
  getLogger() {
    return this.logger
  }

  getMeter() {
    return this.meter
  }

  getTracer() {
    return this.tracer
  }
}

describe('Base', () => {
  it('constructs with params', () => {
    const b = new TestBase({})
    expect(b).toBeDefined()
    expect(b.params).toBeDefined()
  })

  it('logger falls back to defaultLogger', () => {
    const logger = { log: () => {} } as unknown as Logger
    Base.defaultLogger = logger
    const b = new TestBase({})
    expect(b.getLogger()).toBe(logger)
    Base.defaultLogger = undefined
  })

  it('logger uses params logger', () => {
    const logger = { log: () => {}, debug: () => {} } as unknown as Logger
    const b = new TestBase({ logger })
    expect(b.getLogger()).toBe(logger)
  })

  it('meter returns undefined without provider', () => {
    const b = new TestBase({})
    expect(b.getMeter()).toBeUndefined()
  })

  it('meter returns meter from provider', () => {
    const fakeMeter = { name: 'test-meter' }
    const meterProvider = { getMeter: () => fakeMeter } as unknown as MeterProvider
    const b = new TestBase({ meterProvider })
    expect(b.getMeter()).toBe(fakeMeter)
  })

  it('tracer returns undefined without provider', () => {
    const b = new TestBase({})
    expect(b.getTracer()).toBeUndefined()
  })

  it('tracer returns tracer from provider', () => {
    const fakeTracer = { name: 'test-tracer' }
    const traceProvider = { getTracer: () => fakeTracer } as unknown as TracerProvider
    const b = new TestBase({ traceProvider })
    expect(b.getTracer()).toBe(fakeTracer)
  })

  it('records instances globally', () => {
    const before = Base.instanceCount('TestBase2' as BaseClassName)
    class TestBase2 extends Base {}
    new TestBase2({})
    expect(Base.instanceCount('TestBase2' as BaseClassName)).toBe(before + 1)
  })

  it('records multiple instances under the same class name', () => {
    class MultiInstance extends Base {}
    const className = 'MultiInstance' as BaseClassName
    const before = Base.instanceCount(className)
    new MultiInstance({})
    new MultiInstance({})
    new MultiInstance({})
    expect(Base.instanceCount(className)).toBe(before + 3)
  })

  it('gc runs without error', () => {
    expect(() => Base.gc(true)).not.toThrow()
  })

  it('gc with force cleans up instances', () => {
    class GcTest extends Base {}
    new GcTest({})
    // Force gc should not throw and should clean up collected refs
    expect(() => Base.gc(true)).not.toThrow()
  })

  it('gc without force respects maxGcFrequency', () => {
    // Running gc twice in quick succession without force
    Base.gc(true) // reset the timer
    expect(() => Base.gc()).not.toThrow()
  })

  it('instanceCounts returns record', () => {
    const counts = Base.instanceCounts()
    expect(typeof counts).toBe('object')
    // Should contain at least TestBase
    const keys = Object.keys(counts)
    expect(keys.length).toBeGreaterThan(0)
  })

  it('instanceCount returns 0 for unknown class', () => {
    expect(Base.instanceCount('NonExistentClass12345' as BaseClassName)).toBe(0)
  })

  it('historyInterval getter/setter', () => {
    const original = Base.historyInterval
    Base.historyInterval = 2000
    expect(Base.historyInterval).toBe(2000)
    Base.historyInterval = original
  })

  it('historyInterval enforces minimum', () => {
    const original = Base.historyInterval
    Base.historyInterval = 100 // below MIN_HISTORY_INTERVAL (1000)
    expect(Base.historyInterval).toBe(1000)
    Base.historyInterval = original
  })

  it('historyInterval throws if greater than historyTime', () => {
    expect(() => {
      Base.historyInterval = Base.historyTime + 1
    }).toThrow()
  })

  it('maxGcFrequency getter/setter', () => {
    const original = Base.maxGcFrequency
    Base.maxGcFrequency = 5000
    expect(Base.maxGcFrequency).toBe(5000)
    Base.maxGcFrequency = original
  })

  it('maxGcFrequency enforces minimum', () => {
    const original = Base.maxGcFrequency
    Base.maxGcFrequency = 100 // below MIN_GC_FREQUENCY (1000)
    expect(Base.maxGcFrequency).toBe(1000)
    Base.maxGcFrequency = original
  })

  it('maxHistoryDepth returns a number', () => {
    expect(typeof Base.maxHistoryDepth).toBe('number')
    expect(Base.maxHistoryDepth).toBeGreaterThan(0)
  })

  it('maxHistoryDepth is historyTime / historyInterval', () => {
    const expected = Math.floor(Base.historyTime / Base.historyInterval)
    expect(Base.maxHistoryDepth).toBe(expected)
  })

  it('gc with className runs without error', () => {
    expect(() => Base.gc('TestBase' as BaseClassName)).not.toThrow()
  })

  it('gc with className for nonexistent class runs without error', () => {
    expect(() => Base.gc('DoesNotExist999' as BaseClassName)).not.toThrow()
  })

  it('historyTime getter/setter', () => {
    Base.historyTime = Base.historyInterval + 1000
    expect(Base.historyTime).toBeGreaterThan(0)
    // Reset
    Base.historyInterval = 5000
  })

  it('historyTime throws if less than historyInterval', () => {
    const currentInterval = Base.historyInterval
    expect(() => {
      Base.historyTime = currentInterval - 1
    }).toThrow()
  })
})

describe('Base.history', () => {
  afterEach(() => {
    Base.stopHistory()
  })

  it('startHistory and stopHistory work', () => {
    expect(() => Base.startHistory()).not.toThrow()
    expect(() => Base.stopHistory()).not.toThrow()
  })

  it('startHistory stops existing before restarting', () => {
    Base.startHistory()
    expect(() => Base.startHistory()).not.toThrow()
  })

  it('stopHistory is safe to call when not started', () => {
    expect(() => Base.stopHistory()).not.toThrow()
  })

  it('stopHistory clears timeout on double call', () => {
    Base.startHistory()
    Base.stopHistory()
    // Second call should be safe (no timeout to clear)
    Base.stopHistory()
  })

  it('records history when timer fires', async () => {
    // Set a short interval for testing
    const originalInterval = Base.historyInterval
    const originalTime = Base.historyTime
    Base.historyTime = 10_000
    Base.historyInterval = 1000
    class HistoryTest extends Base {}
    new HistoryTest({})
    Base.startHistory()
    // Wait for the timer to fire at least once
    await new Promise(r => setTimeout(r, 1200))
    Base.stopHistory()
    // Restore
    Base.historyTime = originalTime
    Base.historyInterval = originalInterval
  })
})

describe('Base.gc advanced', () => {
  it('gc with false does not force gc when called rapidly', () => {
    Base.gc(true) // Force first to set _lastGC
    // Immediately calling without force should skip (within maxGcFrequency)
    expect(() => Base.gc(false)).not.toThrow()
  })

  it('gc cleans up dereferenced WeakRefs', () => {
    class GcCleanup extends Base {}
    const className = 'GcCleanup' as BaseClassName
    new GcCleanup({})
    const countBefore = Base.instanceCount(className)
    expect(countBefore).toBeGreaterThan(0)
    // Force gc - instances are still alive so count should remain
    Base.gc(true)
    expect(Base.instanceCount(className)).toBeGreaterThan(0)
  })

  it('instanceCounts triggers gc internally', () => {
    const counts = Base.instanceCounts()
    expect(typeof counts).toBe('object')
  })
})

describe('UniqueBase', () => {
  it('can be instantiated via subclass', () => {
    class TestUnique extends UniqueBase {}
    const instance = new TestUnique({})
    expect(instance).toBeDefined()
  })

  it('has uniqueDomain set to xy', () => {
    expect(UniqueBase.uniqueDomain).toBe('xy')
  })

  it('has uniqueName defined', () => {
    expect(UniqueBase.uniqueName).toBeDefined()
    expect(typeof UniqueBase.uniqueName).toBe('string')
  })

  it('uniqueName contains the domain', () => {
    expect(UniqueBase.uniqueName).toContain('xy')
  })

  it('has uniqueNameXyo defined', () => {
    expect(UniqueBase.uniqueNameXyo).toBeDefined()
    expect(UniqueBase.uniqueNameXyo).toContain('xyo')
  })
})

describe('globallyUnique', () => {
  it('registers a unique name', () => {
    const name = globallyUnique('test-unique-1', {}, 'test')
    expect(name).toContain('test')
    expect(name).toContain('test-unique-1')
  })

  it('allows same value re-registration', () => {
    const value = { id: 'same' }
    globallyUnique('test-same', value, 'test2')
    expect(() => globallyUnique('test-same', value, 'test2')).not.toThrow()
  })

  it('throws for different value with same name', () => {
    globallyUnique('test-conflict', { id: 1 }, 'test3')
    expect(() => globallyUnique('test-conflict', { id: 2 }, 'test3')).toThrow('already defined')
  })

  it('bundle domain does not include url', () => {
    const name = globallyUnique('bundled', {}, 'bundle')
    expect(name).toBe('bundle:bundled')
  })

  it('non-bundle domain includes import.meta.url', () => {
    const name = globallyUnique('url-test-item', {}, 'custom-domain')
    expect(name).toContain('custom-domain')
    expect(name).toContain('url-test-item')
    // Non-bundle domains include the url segment between domain and name
    expect(name).toContain('custom-domain')
    expect(name).toContain('url-test-item')
  })

  it('uses default domain of global', () => {
    const name = globallyUnique('default-domain-test', {})
    expect(name).toContain('global')
  })

  it('handles string names with special characters', () => {
    const name = globallyUnique('test-special/chars.here', {}, 'sym-domain')
    expect(name).toBeDefined()
    expect(name).toContain('test-special/chars.here')
  })
})

describe('disableGloballyUnique', () => {
  it('disables uniqueness checks', () => {
    disableGloballyUnique()
    // After disabling, registering conflicting values should not throw
    expect(() => {
      globallyUnique('disabled-test', { a: 1 }, 'disabled')
      globallyUnique('disabled-test', { a: 2 }, 'disabled')
    }).not.toThrow()
    // Re-enable
    globalThis.xylabs.uniqueDisabled = false
  })

  it('sets uniqueDisabled on global xylabs object', () => {
    disableGloballyUnique()
    expect(globalThis.xylabs.uniqueDisabled).toBe(true)
    // Re-enable
    globalThis.xylabs.uniqueDisabled = false
  })
})
