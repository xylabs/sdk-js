import {
  describe, expect, it,
} from 'vitest'

import { asHex } from '../hex/index.ts'

describe('asHex', () => {
  it('returns Hex for a valid hex string', () => {
    expect(asHex('deadbeef')).toBe('deadbeef')
  })

  it('strips 0x prefix and returns valid hex', () => {
    expect(asHex('0xdeadbeef')).toBe('deadbeef')
  })

  it('returns undefined for non-string types without assert', () => {
    expect(asHex(123)).toBeUndefined()
    expect(asHex(true)).toBeUndefined()
    expect(asHex(null)).toBeUndefined()
    // eslint-disable-next-line unicorn/no-useless-undefined
    expect(asHex(undefined)).toBeUndefined()
    expect(asHex({})).toBeUndefined()
    expect(asHex([])).toBeUndefined()
  })

  it('throws for invalid hex string even without assert', () => {
    // hexFromHexString throws for non-hex strings before asHex can return undefined
    expect(() => asHex('xyz')).toThrow()
    expect(() => asHex('not-hex!')).toThrow()
  })

  it('throws for non-string types with assert', () => {
    expect(() => asHex(123, true)).toThrow()
    expect(() => asHex(true, true)).toThrow()
    expect(() => asHex(null, true)).toThrow()
  })

  it('throws for invalid hex string with assert', () => {
    expect(() => asHex('xyz', true)).toThrow()
  })

  it('returns valid hex with assert for valid input', () => {
    expect(asHex('abcd', true)).toBe('abcd')
    expect(asHex('0xabcd', true)).toBe('abcd')
  })

  it('handles single character hex', () => {
    expect(asHex('a')).toBe('0a')
  })

  it('lowercases the result', () => {
    expect(asHex('DEADBEEF')).toBe('deadbeef')
  })
})
