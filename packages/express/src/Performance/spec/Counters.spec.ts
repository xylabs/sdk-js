import {
  beforeEach, describe, expect, it,
} from 'vitest'

import { Counters } from '../Counters.ts'

describe('Counters', () => {
  beforeEach(() => {
    Counters.counters = {}
  })

  describe('inc', () => {
    it('should increment a counter by 1 by default', () => {
      Counters.inc('test')
      expect(Counters.counters['test']).toBe(1)
    })

    it('should increment a counter by the specified amount', () => {
      Counters.inc('test', 5)
      expect(Counters.counters['test']).toBe(5)
    })

    it('should accumulate increments', () => {
      Counters.inc('test', 3)
      Counters.inc('test', 7)
      expect(Counters.counters['test']).toBe(10)
    })
  })

  describe('max', () => {
    it('should set the value when counter does not exist', () => {
      Counters.max('test', 10)
      expect(Counters.counters['test']).toBe(10)
    })

    it('should update when new value is greater', () => {
      Counters.max('test', 5)
      Counters.max('test', 10)
      expect(Counters.counters['test']).toBe(10)
    })

    it('should not update when new value is smaller', () => {
      Counters.max('test', 10)
      Counters.max('test', 5)
      expect(Counters.counters['test']).toBe(10)
    })
  })

  describe('min', () => {
    it('should set the value when counter does not exist', () => {
      Counters.min('test', 10)
      expect(Counters.counters['test']).toBe(10)
    })

    it('should update when new value is smaller', () => {
      Counters.min('test', 10)
      Counters.min('test', 5)
      expect(Counters.counters['test']).toBe(5)
    })

    it('should not update when new value is greater', () => {
      Counters.min('test', 5)
      Counters.min('test', 10)
      expect(Counters.counters['test']).toBe(5)
    })

    it('should handle equal values', () => {
      Counters.min('test', 7)
      Counters.min('test', 7)
      expect(Counters.counters['test']).toBe(7)
    })
  })

  describe('max', () => {
    it('should handle equal values', () => {
      Counters.max('test', 7)
      Counters.max('test', 7)
      expect(Counters.counters['test']).toBe(7)
    })
  })

  describe('inc with multiple counters', () => {
    it('should track multiple counters independently', () => {
      Counters.inc('a', 1)
      Counters.inc('b', 2)
      Counters.inc('a', 3)
      expect(Counters.counters['a']).toBe(4)
      expect(Counters.counters['b']).toBe(2)
    })
  })

  describe('inc with zero', () => {
    it('should handle incrementing by zero', () => {
      Counters.inc('test', 5)
      Counters.inc('test', 0)
      expect(Counters.counters['test']).toBe(5)
    })
  })

  describe('catchError', () => {
    it('handles errors in the callback by resetting counter', () => {
      // Make counters throw only on the first get of 'broken'
      let throwCount = 0
      const throwingProxy = new Proxy({} as Record<string, number>, {
        get(_target, prop) {
          if (prop === 'broken' && throwCount === 0) {
            throwCount++
            throw new Error('proxy error')
          }
          return _target[prop as string]
        },
        set(target, prop, value) {
          target[prop as string] = value
          return true
        },
      })
      Counters.counters = throwingProxy
      Counters.inc('broken')
      // The catch block should reset the counter to 0 and increment CountersErrors
      expect(Counters.counters['broken']).toBe(0)
      expect(Counters.counters['CountersErrors']).toBe(1)
    })
  })

  describe('min and max with negative values', () => {
    it('should handle negative values for min', () => {
      Counters.min('test', -5)
      expect(Counters.counters['test']).toBe(-5)
      Counters.min('test', -10)
      expect(Counters.counters['test']).toBe(-10)
    })

    it('should handle negative values for max', () => {
      Counters.max('test', -10)
      expect(Counters.counters['test']).toBe(-10)
      Counters.max('test', -5)
      expect(Counters.counters['test']).toBe(-5)
    })
  })
})
