import {
  describe, expect, it,
} from 'vitest'

import {
  isTypedArray, isTypedKey, isTypedObject, isTypedValue, isValidTypedFieldPair,
} from '../Typed.ts'

describe('isTypedKey', () => {
  it('returns true for string', () => {
    expect(isTypedKey('key')).toBe(true)
  })

  it('returns true for number', () => {
    expect(isTypedKey(42)).toBe(true)
  })

  it('returns true for symbol', () => {
    expect(isTypedKey(Symbol())).toBe(true)
  })

  it('returns true for bigint', () => {
    expect(isTypedKey(123n)).toBe(true)
  })

  it('returns false for non-key types', () => {
    expect(isTypedKey(null)).toBe(false)
    expect(isTypedKey(undefined)).toBe(false)
    expect(isTypedKey({})).toBe(false)
    expect(isTypedKey(true)).toBe(false)
  })
})

describe('isTypedValue', () => {
  it('returns true for string', () => {
    expect(isTypedValue('hello')).toBe(true)
  })

  it('returns true for number', () => {
    expect(isTypedValue(42)).toBe(true)
  })

  it('returns true for boolean', () => {
    expect(isTypedValue(true)).toBe(true)
  })

  it('returns true for null', () => {
    expect(isTypedValue(null)).toBe(true)
  })

  it('returns true for typed objects', () => {
    expect(isTypedValue({ a: 1 })).toBe(true)
  })

  it('returns true for typed arrays', () => {
    expect(isTypedValue([1, 'two'])).toBe(true)
  })

  it('returns false for non-typed values', () => {
    expect(isTypedValue(Symbol())).toBe(false)
  })
})

describe('isTypedArray', () => {
  it('returns true for arrays of typed values', () => {
    expect(isTypedArray([1, 'two', true, null])).toBe(true)
    expect(isTypedArray([])).toBe(true)
  })

  it('returns false for non-arrays', () => {
    expect(isTypedArray('not array')).toBe(false)
  })

  it('returns false for arrays with non-typed values', () => {
    expect(isTypedArray([Symbol()])).toBe(false)
  })
})

describe('isValidTypedFieldPair', () => {
  it('returns true for valid key-value pairs', () => {
    expect(isValidTypedFieldPair(['key', 'value'])).toBe(true)
    expect(isValidTypedFieldPair([0, 42])).toBe(true)
  })

  it('returns false for invalid keys', () => {
    expect(isValidTypedFieldPair([null, 'value'])).toBe(false)
  })

  it('returns false for invalid values', () => {
    expect(isValidTypedFieldPair(['key', Symbol()])).toBe(false)
  })
})

describe('isTypedObject', () => {
  it('returns true for plain objects with typed fields', () => {
    expect(isTypedObject({ a: 1, b: 'two' })).toBe(true)
    expect(isTypedObject({})).toBe(true)
  })

  it('returns false for non-objects', () => {
    expect(isTypedObject('not object')).toBe(false)
    expect(isTypedObject(null)).toBe(false)
    expect(isTypedObject([1, 2])).toBe(false)
  })

  it('returns false for objects with non-typed values', () => {
    expect(isTypedObject({ a: Symbol() })).toBe(false)
  })
})
