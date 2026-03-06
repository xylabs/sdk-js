import {
  describe, expect, it,
} from 'vitest'

import { compactObject } from '../compactObject.ts'

describe('compactObject', () => {
  it('should remove null values', () => {
    const result = compactObject({ a: 1, b: null, c: 'hello' })
    expect(result).toEqual({ a: 1, c: 'hello' })
  })

  it('should remove undefined values', () => {
    const result = compactObject({ a: 1, b: undefined, c: 'hello' })
    expect(result).toEqual({ a: 1, c: 'hello' })
  })

  it('should keep falsy values that are not null/undefined', () => {
    const result = compactObject({
      a: 0, b: '', c: false, d: null, e: undefined,
    })
    expect(result).toEqual({ a: 0, b: '', c: false })
  })

  it('should return an empty object when given an empty object', () => {
    const result = compactObject({})
    expect(result).toEqual({})
  })

  it('should return the same object when no null/undefined values exist', () => {
    const input = { a: 1, b: 'test', c: true }
    const result = compactObject(input)
    expect(result).toEqual(input)
  })

  it('should keep nested objects even if they contain null values', () => {
    const result = compactObject({ a: { nested: null }, b: 'test' } as any)
    expect(result).toEqual({ a: { nested: null }, b: 'test' })
  })

  it('should keep arrays including ones with null elements', () => {
    const result = compactObject({ a: [1, null, 3], b: undefined } as any)
    expect(result).toEqual({ a: [1, null, 3] })
  })

  it('should remove all values if all are null or undefined', () => {
    const result = compactObject({ a: null, b: undefined } as any)
    expect(result).toEqual({})
  })
})
