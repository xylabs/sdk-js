import { describe, expect, it } from 'vitest'

import { asHash } from '../hash/as.ts'

const validHash = 'deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef'
const invalidHash = 'deadbeef' // too short to be a hash (need 64 chars for 256-bit)

describe('asHash', () => {
  it('returns Hash for a valid 64-char hex string', () => {
    expect(asHash(validHash)).toBe(validHash)
  })

  it('strips 0x prefix and returns valid hash', () => {
    expect(asHash(`0x${validHash}`)).toBe(validHash)
  })

  it('returns undefined for non-string types without assert', () => {
    expect(asHash(123)).toBeUndefined()
    expect(asHash(true)).toBeUndefined()
    expect(asHash(null)).toBeUndefined()
    expect(asHash(undefined)).toBeUndefined()
    expect(asHash({})).toBeUndefined()
  })

  it('returns undefined for valid hex that is not a valid hash length', () => {
    // 'deadbeef' is valid hex but not 64 chars, so isHash fails and assertError returns undefined
    expect(asHash(invalidHash)).toBeUndefined()
  })

  it('throws for non-hex string', () => {
    // hexFromHexString throws for non-hex strings before asHash can return undefined
    expect(() => asHash('not-hex')).toThrow()
  })

  it('throws for non-string types with assert', () => {
    expect(() => asHash(123, {})).toThrow()
    expect(() => asHash(true, {})).toThrow()
    expect(() => asHash(null, {})).toThrow()
  })

  it('throws for invalid hash string with assert', () => {
    expect(() => asHash(invalidHash, {})).toThrow()
    expect(() => asHash('xyz', {})).toThrow()
  })

  it('returns valid hash with assert for valid input', () => {
    expect(asHash(validHash, {})).toBe(validHash)
  })

  it('lowercases the result', () => {
    const upper = 'DEADBEEFDEADBEEFDEADBEEFDEADBEEFDEADBEEFDEADBEEFDEADBEEFDEADBEEF'
    expect(asHash(upper)).toBe(validHash)
  })
})
