import {
  describe, expect, it,
} from 'vitest'

import { typeOf } from '../typeOf.ts'

describe('typeOf', () => {
  it('returns "array" for arrays', () => {
    expect(typeOf([])).toBe('array')
    expect(typeOf([1, 2, 3])).toBe('array')
  })

  it('returns "string" for strings', () => {
    expect(typeOf('hello')).toBe('string')
  })

  it('returns "number" for numbers', () => {
    expect(typeOf(42)).toBe('number')
  })

  it('returns "boolean" for booleans', () => {
    expect(typeOf(true)).toBe('boolean')
  })

  it('returns "object" for objects and null', () => {
    expect(typeOf({})).toBe('object')
    expect(typeOf(null)).toBe('object')
  })

  it('returns "undefined" for undefined', () => {
    // eslint-disable-next-line unicorn/no-useless-undefined
    expect(typeOf(undefined)).toBe('undefined')
  })

  it('returns "function" for functions', () => {
    expect(typeOf(() => {})).toBe('function')
  })

  it('returns "symbol" for symbols', () => {
    expect(typeOf(Symbol())).toBe('symbol')
  })

  it('returns "bigint" for bigints', () => {
    expect(typeOf(123n)).toBe('bigint')
  })
})
