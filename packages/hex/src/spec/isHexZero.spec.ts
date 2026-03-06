import { describe, expect, it } from 'vitest'

import { isHexZero } from '../hex/isHexZero.ts'

describe('isHexZero', () => {
  it('returns true for zero hex strings', () => {
    expect(isHexZero('00')).toBe(true)
    expect(isHexZero('0000')).toBe(true)
    expect(isHexZero('0x00')).toBe(true)
    expect(isHexZero('0x0000')).toBe(true)
  })

  it('returns false for non-zero hex strings', () => {
    expect(isHexZero('01')).toBe(false)
    expect(isHexZero('deadbeef')).toBe(false)
    expect(isHexZero('0x0a')).toBe(false)
  })

  it('returns undefined when value is undefined', () => {
    expect(isHexZero(undefined)).toBeUndefined()
  })

  it('returns undefined when value is not a string', () => {
    expect(isHexZero(undefined)).toBeUndefined()
  })
})
