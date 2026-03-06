import {
  describe, expect, it,
} from 'vitest'

import { isType } from '../isType.ts'

describe('isType', () => {
  it('checks "string" type', () => {
    expect(isType('hello', 'string')).toBe(true)
    expect(isType(42, 'string')).toBe(false)
  })

  it('checks "number" type', () => {
    expect(isType(42, 'number')).toBe(true)
    expect(isType('42', 'number')).toBe(false)
  })

  it('checks "array" type', () => {
    expect(isType([1, 2], 'array')).toBe(true)
    expect(isType({}, 'array')).toBe(false)
  })

  it('checks "null" type', () => {
    expect(isType(null, 'null')).toBe(true)
    expect(isType(undefined, 'null')).toBe(false)
  })

  it('checks "undefined" type', () => {
    expect(isType(undefined, 'undefined')).toBe(true)
    expect(isType(null, 'undefined')).toBe(false)
  })

  it('checks "object" type excluding null and arrays', () => {
    expect(isType({}, 'object')).toBe(true)
    expect(isType({ a: 1 }, 'object')).toBe(true)
    expect(isType(null, 'object')).toBe(false)
    expect(isType([1, 2], 'object')).toBe(false)
  })

  it('checks "function" type', () => {
    expect(isType(() => {}, 'function')).toBe(true)
    expect(isType('func', 'function')).toBe(false)
  })

  it('checks "symbol" type', () => {
    expect(isType(Symbol(), 'symbol')).toBe(true)
    expect(isType('sym', 'symbol')).toBe(false)
  })
})
