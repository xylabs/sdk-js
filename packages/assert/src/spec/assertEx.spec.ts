import {
  describe, expect, it,
} from 'vitest'

import { assertDefinedEx, assertEx } from '../index.ts'

describe('assertEx', () => {
  it('returns truthy values', () => {
    expect(assertEx(1)).toBe(1)
    expect(assertEx('hello')).toBe('hello')
    expect(assertEx(true)).toBe(true)
    expect(assertEx([])).toEqual([])
    expect(assertEx({})).toEqual({})
  })

  it('throws on null', () => {
    expect(() => assertEx(null)).toThrow('Assertion failed')
  })

  it('throws on undefined', () => {
    expect(() => assertEx(undefined)).toThrow('Assertion failed')
  })

  it('throws on falsy values', () => {
    expect(() => assertEx(0)).toThrow()
    expect(() => assertEx('')).toThrow()
    expect(() => assertEx(false)).toThrow()
  })

  it('throws with custom message function', () => {
    expect(() => assertEx(null, () => 'custom message')).toThrow('custom message')
  })

  it('throws with custom error function', () => {
    class CustomError extends Error {}
    expect(() => assertEx(null, () => new CustomError('custom'))).toThrow(CustomError)
  })

  it('throws when func is provided but is not a function', () => {
    // Testing the guard for invalid second argument
    expect(() => (assertEx as any)(null, 'not a function')).toThrow('Invalid assertEx usage')
  })
})

describe('assertDefinedEx', () => {
  it('returns defined values including falsy ones', () => {
    expect(assertDefinedEx(0)).toBe(0)
    expect(assertDefinedEx('')).toBe('')
    expect(assertDefinedEx(false)).toBe(false)
    expect(assertDefinedEx(null)).toBeNull()
  })

  it('throws on undefined', () => {
    expect(() => assertDefinedEx(undefined)).toThrow('value is undefined')
  })

  it('throws with custom message function', () => {
    expect(() => assertDefinedEx(undefined, () => 'must be defined')).toThrow('must be defined')
  })

  it('throws with custom error function', () => {
    class CustomError extends Error {}
    expect(() => assertDefinedEx(undefined, () => new CustomError('custom'))).toThrow(CustomError)
  })

  it('throws when func is provided but is not a function', () => {
    // Testing the guard for invalid second argument
    expect(() => (assertDefinedEx as any)(undefined, 'not a function')).toThrow('Invalid assertEx usage')
  })
})
