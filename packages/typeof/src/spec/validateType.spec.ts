import {
  describe, expect, it,
} from 'vitest'

import { validateType } from '../validateType.ts'

describe('validateType', () => {
  it('returns value and no errors when type matches', () => {
    const [value, errors] = validateType('string', 'hello')
    expect(value).toBe('hello')
    expect(errors).toEqual([])
  })

  it('returns undefined and error when type does not match', () => {
    const [value, errors] = validateType('string', 42)
    expect(value).toBeUndefined()
    expect(errors).toHaveLength(1)
    expect(errors[0]).toBeInstanceOf(Error)
  })

  it('returns value and no errors for optional undefined', () => {
    const [value, errors] = validateType('string', undefined, true)
    expect(value).toBeUndefined()
    expect(errors).toEqual([])
  })

  it('returns error for non-optional undefined', () => {
    const [value, errors] = validateType('string', undefined)
    expect(value).toBeUndefined()
    expect(errors).toHaveLength(1)
  })

  it('works with array type', () => {
    const [value, errors] = validateType('array', [1, 2])
    expect(value).toEqual([1, 2])
    expect(errors).toEqual([])
  })
})
