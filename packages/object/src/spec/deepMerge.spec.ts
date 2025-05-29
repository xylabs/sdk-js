import {
  describe, expect, it,
} from 'vitest'

import { deepMerge } from '../deepMerge.ts'

describe('deepMerge', () => {
  it('merges flat objects', () => {
    const a = { foo: 1 }
    const b = { bar: 'hello' }
    const result = deepMerge(a, b)
    expect(result).toEqual({ foo: 1, bar: 'hello' })
  })

  it('overwrites primitive values', () => {
    const a = { count: 1 }
    const b = { count: 2 }
    const result = deepMerge(a, b)
    expect(result).toEqual({ count: 2 })
  })

  it('merges nested objects recursively', () => {
    const a = { config: { retries: 3 } }
    const b = { config: { timeout: 5000 } }
    const result = deepMerge(a, b)
    expect(result).toEqual({ config: { retries: 3, timeout: 5000 } })
  })

  it('overwrites with non-object values in nested structure', () => {
    const a = { options: { log: true } }
    const b = { options: false }
    const result = deepMerge(a, b)
    expect(result).toEqual({ options: false })
  })

  it('overwrites arrays shallowly (no deep merge)', () => {
    const a = { list: [1, 2] }
    const b = { list: [3] }
    const result = deepMerge(a, b)
    expect(result).toEqual({ list: [3] })
  })

  it('skips undefined or null values in source', () => {
    const a = { a: 1 }
    const b = null
    const c = undefined
    const result = deepMerge(a, b as never, c as never)
    expect(result).toEqual({ a: 1 })
  })

  it('works with symbol keys', () => {
    const sym = Symbol('key')
    const a = { [sym]: 'value1' }
    const b = { [sym]: 'value2' }
    const result = deepMerge(a, b)
    expect(result[sym]).toBe('value2')
  })

  it('handles multiple sources correctly', () => {
    const a = { x: 1 }
    const b = { y: 2 }
    const c = { z: 3 }
    const result = deepMerge(a, b, c)
    expect(result).toEqual({
      x: 1, y: 2, z: 3,
    })
  })

  it('returns an empty object if no args passed', () => {
    const result = deepMerge()
    expect(result).toEqual({})
  })
})
