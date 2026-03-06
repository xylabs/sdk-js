import {
  describe, expect, it,
} from 'vitest'

import { Profiler } from '../Profiler.ts'

describe('Profiler', () => {
  it('should create an instance with empty stats', () => {
    const profiler = new Profiler()
    expect(profiler.stats).toEqual({})
  })

  it('should profile a resolved promise and record timing', async () => {
    const profiler = new Profiler()
    const result = await profiler.profile('test-op', Promise.resolve('value'))
    expect(result).toBe('value')
    expect(profiler.stats['test-op']).toBeGreaterThanOrEqual(0)
    expect(typeof profiler.stats['test-op']).toBe('number')
  })

  it('should profile multiple operations independently', async () => {
    const profiler = new Profiler()
    await profiler.profile('op1', Promise.resolve(1))
    await profiler.profile('op2', Promise.resolve(2))
    expect(profiler.stats['op1']).toBeGreaterThanOrEqual(0)
    expect(profiler.stats['op2']).toBeGreaterThanOrEqual(0)
  })

  it('should profile a delayed promise and record non-zero timing', async () => {
    const profiler = new Profiler()
    const delayed = new Promise<string>(resolve => setTimeout(() => resolve('delayed'), 50))
    const result = await profiler.profile('delayed-op', delayed)
    expect(result).toBe('delayed')
    expect(profiler.stats['delayed-op']).toBeGreaterThanOrEqual(40)
  })

  it('should return the resolved value from the profiled promise', async () => {
    const profiler = new Profiler()
    const obj = { key: 'value' }
    const result = await profiler.profile('obj-op', Promise.resolve(obj))
    expect(result).toBe(obj)
  })

  it('should overwrite stats for the same operation name', async () => {
    const profiler = new Profiler()
    await profiler.profile('same', Promise.resolve(1))
    const firstTiming = profiler.stats['same']
    await profiler.profile('same', Promise.resolve(2))
    expect(profiler.stats['same']).toBeGreaterThanOrEqual(0)
    expect(typeof firstTiming).toBe('number')
  })

  it('should propagate rejection from the profiled promise', async () => {
    const profiler = new Profiler()
    const error = new Error('promise failed')
    await expect(profiler.profile('failing', Promise.reject(error))).rejects.toThrow('promise failed')
  })

  it('should still record stats even for zero-duration operations', async () => {
    const profiler = new Profiler()
    await profiler.profile('instant', Promise.resolve(null))
    expect(profiler.stats['instant']).toBeGreaterThanOrEqual(0)
  })

  it('should handle profiling with various return types', async () => {
    const profiler = new Profiler()

    const numResult = await profiler.profile('num', Promise.resolve(42))
    expect(numResult).toBe(42)

    const arrResult = await profiler.profile('arr', Promise.resolve([1, 2, 3]))
    expect(arrResult).toEqual([1, 2, 3])

    const nullResult = await profiler.profile('null', Promise.resolve(null))
    expect(nullResult).toBeNull()
  })
})
