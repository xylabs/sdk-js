import {
  describe, expect, it,
} from 'vitest'

import {
  HashZod, isHashBitLength, ZERO_HASH,
} from '../hash/index.ts'

describe('isHashBitLength', () => {
  it('returns true for valid hash bit lengths', () => {
    expect(isHashBitLength(32)).toBe(true)
    expect(isHashBitLength(64)).toBe(true)
    expect(isHashBitLength(128)).toBe(true)
    expect(isHashBitLength(256)).toBe(true)
    expect(isHashBitLength(512)).toBe(true)
    expect(isHashBitLength(1024)).toBe(true)
    expect(isHashBitLength(2048)).toBe(true)
    expect(isHashBitLength(4096)).toBe(true)
  })

  it('returns false for invalid bit lengths', () => {
    expect(isHashBitLength(0)).toBe(false)
    expect(isHashBitLength(1)).toBe(false)
    expect(isHashBitLength(100)).toBe(false)
    expect(isHashBitLength(255)).toBe(false)
  })

  it('returns false for non-number types', () => {
    expect(isHashBitLength('256')).toBe(false)
    expect(isHashBitLength(null)).toBe(false)
    // eslint-disable-next-line unicorn/no-useless-undefined
    expect(isHashBitLength(undefined)).toBe(false)
  })
})

describe('HashZod', () => {
  const validHash = 'deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef'

  it('parses a valid 64-char hex string', () => {
    const result = HashZod.safeParse(validHash)
    expect(result.success).toBe(true)
  })

  it('rejects a string that is too short', () => {
    const result = HashZod.safeParse('deadbeef')
    expect(result.success).toBe(false)
  })

  it('rejects non-hex characters', () => {
    const result = HashZod.safeParse('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz')
    expect(result.success).toBe(false)
  })
})

describe('ZERO_HASH', () => {
  it('is a 64-character zero string', () => {
    expect(ZERO_HASH).toBe('0000000000000000000000000000000000000000000000000000000000000000')
    expect(ZERO_HASH.length).toBe(64)
  })
})
