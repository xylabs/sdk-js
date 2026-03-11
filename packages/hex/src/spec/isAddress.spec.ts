import {
  describe, expect, it,
} from 'vitest'

import {
  ADDRESS_LENGTH,
  asAddress, asAddressV2,
  isAddress, isAddressV2,
} from '../address/index.ts'

const validAddress = 'a'.repeat(ADDRESS_LENGTH)
const tooShort = 'a'.repeat(ADDRESS_LENGTH - 1)
const tooLong = 'a'.repeat(ADDRESS_LENGTH + 1)

// 39 hex chars: one character short of ADDRESS_LENGTH (40),
// but Math.ceil(39 / 2) === 20 bytes — the correct byte count for an address.
// Validators must check character count, not byte count.
const oneCharShortCorrectBytes = 'a'.repeat(ADDRESS_LENGTH - 1)

describe('isAddress', () => {
  it('accepts a valid 40-character hex address', () => {
    expect(isAddress(validAddress)).toBe(true)
  })

  it('rejects an address that is too short', () => {
    expect(isAddress(tooShort)).toBe(false)
  })

  it('rejects an address that is too long', () => {
    expect(isAddress(tooLong)).toBe(false)
  })

  it('rejects non-hex characters', () => {
    expect(isAddress('g'.repeat(ADDRESS_LENGTH))).toBe(false)
  })

  it('rejects a 39-char address that has the correct byte count but wrong character count', () => {
    expect(oneCharShortCorrectBytes.length).toBe(ADDRESS_LENGTH - 1)
    expect(Math.ceil(oneCharShortCorrectBytes.length / 2)).toBe(ADDRESS_LENGTH / 2)
    expect(isAddress(oneCharShortCorrectBytes)).toBe(false)
  })

  it('rejects non-string values', () => {
    expect(isAddress(123)).toBe(false)
    expect(isAddress(null)).toBe(false)
    expect(isAddress()).toBe(false)
  })

  it('manual', () => {
    expect(isAddress('0x' + validAddress, { prefix: true })).toBe(true)
    expect(isAddress(validAddress, { prefix: false })).toBe(true)
    expect(isAddress(validAddress.slice(1), { prefix: false })).toBe(false)
    expect(asAddress(validAddress.slice(1))).toBe(undefined)
  })
})

describe('isAddressV2', () => {
  it('accepts a valid 40-character hex address', () => {
    expect(isAddressV2(validAddress)).toBe(true)
  })

  it('rejects an address that is too short', () => {
    expect(isAddressV2(tooShort)).toBe(false)
  })

  it('rejects an address that is too long', () => {
    expect(isAddressV2(tooLong)).toBe(false)
  })

  it('rejects non-hex characters', () => {
    expect(isAddressV2('g'.repeat(ADDRESS_LENGTH))).toBe(false)
  })

  it('rejects a 39-char address that has the correct byte count but wrong character count', () => {
    expect(oneCharShortCorrectBytes.length).toBe(ADDRESS_LENGTH - 1)
    expect(Math.ceil(oneCharShortCorrectBytes.length / 2)).toBe(ADDRESS_LENGTH / 2)
    expect(isAddressV2(oneCharShortCorrectBytes)).toBe(false)
  })

  it('rejects non-string values', () => {
    expect(isAddressV2(123)).toBe(false)
    expect(isAddressV2(null)).toBe(false)
    expect(isAddressV2()).toBe(false)
  })
})

describe('asAddress', () => {
  it('returns a valid 40-character hex address', () => {
    expect(asAddress(validAddress)).toBe(validAddress)
  })

  it('returns undefined for an address that is too short', () => {
    expect(asAddress(tooShort)).toBeUndefined()
  })

  it('returns undefined for an address that is too long', () => {
    expect(asAddress(tooLong)).toBeUndefined()
  })

  it('returns undefined for non-hex characters', () => {
    expect(asAddress('g'.repeat(ADDRESS_LENGTH))).toBeUndefined()
  })

  it('returns undefined for a 39-char address that has the correct byte count but wrong character count', () => {
    expect(oneCharShortCorrectBytes.length).toBe(ADDRESS_LENGTH - 1)
    expect(Math.ceil(oneCharShortCorrectBytes.length / 2)).toBe(ADDRESS_LENGTH / 2)
    expect(asAddress(oneCharShortCorrectBytes)).toBeUndefined()
  })

  it('strips 0x prefix and returns the address', () => {
    expect(asAddress('0x' + validAddress)).toBe(validAddress)
  })

  it('returns undefined for non-string values', () => {
    expect(asAddress(123)).toBeUndefined()
    expect(asAddress(null)).toBeUndefined()
    expect(asAddress()).toBeUndefined()
  })
})

describe('asAddressV2', () => {
  it('returns a valid 40-character hex address', () => {
    expect(asAddressV2(validAddress)).toBe(validAddress)
  })

  it('returns undefined for an address that is too short', () => {
    expect(asAddressV2(tooShort)).toBeUndefined()
  })

  it('returns undefined for an address that is too long', () => {
    expect(asAddressV2(tooLong)).toBeUndefined()
  })

  it('returns undefined for non-hex characters', () => {
    expect(asAddressV2('g'.repeat(ADDRESS_LENGTH))).toBeUndefined()
  })

  it('returns undefined for a 39-char address that has the correct byte count but wrong character count', () => {
    expect(oneCharShortCorrectBytes.length).toBe(ADDRESS_LENGTH - 1)
    expect(Math.ceil(oneCharShortCorrectBytes.length / 2)).toBe(ADDRESS_LENGTH / 2)
    expect(asAddressV2(oneCharShortCorrectBytes)).toBeUndefined()
  })

  it('returns undefined for non-string values', () => {
    expect(asAddressV2(123)).toBeUndefined()
    expect(asAddressV2(null)).toBeUndefined()
    expect(asAddressV2()).toBeUndefined()
  })
})
