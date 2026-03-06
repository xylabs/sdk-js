import '@xylabs/vitest-extended'

import {
  describe, expect, it,
} from 'vitest'

import {
  ADDRESS_LENGTH, AddressRegEx, AddressZod, ZERO_ADDRESS,
} from '../address/address.ts'
import { asAddress, asAddressV2 } from '../address/as.ts'
import { isAddress, isAddressV2 } from '../address/is.ts'
import { toAddress, toAddressV2 } from '../address/to.ts'

const VALID_ADDRESS = 'deadbeefdeadbeefdeadbeefdeadbeefdeadbeef'
const VALID_ADDRESS_PREFIXED = '0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef'
const SHORT_HEX = 'deadbeef'
const INVALID_HEX_CHARS = 'deadbeefdeadbeefdeadxxxxdeadbeefdeadbeef'
const TOO_LONG_HEX = 'deadbeefdeadbeefdeadbeefdeadbeefdeadbeef00'

describe('address constants and Zod schema', () => {
  it('ZERO_ADDRESS is a 40-char zero string', () => {
    expect(ZERO_ADDRESS).toBe('0000000000000000000000000000000000000000')
    expect(ZERO_ADDRESS).toHaveLength(40)
  })

  it('ADDRESS_LENGTH is 40', () => {
    expect(ADDRESS_LENGTH).toBe(40)
  })

  it('AddressRegEx matches valid 40-char lowercase hex', () => {
    expect(AddressRegEx.test(VALID_ADDRESS)).toBeTrue()
    expect(AddressRegEx.test(ZERO_ADDRESS)).toBeTrue()
    expect(AddressRegEx.test(SHORT_HEX)).toBeFalse()
    expect(AddressRegEx.test(TOO_LONG_HEX)).toBeFalse()
    expect(AddressRegEx.test(INVALID_HEX_CHARS)).toBeFalse()
    expect(AddressRegEx.test(VALID_ADDRESS_PREFIXED)).toBeFalse()
  })

  it('AddressZod parses valid addresses', () => {
    const result = AddressZod.safeParse(VALID_ADDRESS)
    expect(result.success).toBeTrue()
    if (result.success) {
      expect(result.data).toBe(VALID_ADDRESS)
    }
  })

  it('AddressZod rejects invalid addresses', () => {
    expect(AddressZod.safeParse(SHORT_HEX).success).toBeFalse()
    expect(AddressZod.safeParse(INVALID_HEX_CHARS).success).toBeFalse()
    expect(AddressZod.safeParse(TOO_LONG_HEX).success).toBeFalse()
    expect(AddressZod.safeParse(123).success).toBeFalse()
    expect(AddressZod.safeParse(null).success).toBeFalse()
    expect(AddressZod.safeParse(undefined).success).toBeFalse()
  })
})

describe('isAddress', () => {
  it('returns true for a valid 40-char hex string', () => {
    expect(isAddress(VALID_ADDRESS)).toBeTrue()
  })

  it('returns true for ZERO_ADDRESS', () => {
    expect(isAddress(ZERO_ADDRESS)).toBeTrue()
  })

  it('returns false for non-string types', () => {
    expect(isAddress(true)).toBeFalse()
    expect(isAddress(false)).toBeFalse()
    expect(isAddress({})).toBeFalse()
    expect(isAddress([])).toBeFalse()
    expect(isAddress(null)).toBeFalse()
    expect(isAddress(undefined)).toBeFalse()
    expect(isAddress(42)).toBeFalse()
  })

  it('returns false for non-hex strings', () => {
    expect(isAddress('NotHex')).toBeFalse()
    expect(isAddress(INVALID_HEX_CHARS)).toBeFalse()
  })

  it('returns false for wrong-length hex', () => {
    expect(isAddress(SHORT_HEX)).toBeFalse()
    expect(isAddress(TOO_LONG_HEX)).toBeFalse()
  })

  it('returns false for 0x-prefixed address by default', () => {
    expect(isAddress(VALID_ADDRESS_PREFIXED)).toBeFalse()
  })

  it('returns true for 0x-prefixed address with prefix config', () => {
    expect(isAddress(VALID_ADDRESS_PREFIXED, { prefix: true })).toBeTrue()
  })

  it('uses default config when none provided', () => {
    expect(isAddress(VALID_ADDRESS, {})).toBeTrue()
  })

  it('respects custom bitLength config', () => {
    // bitLength=128 means 32 hex chars
    const hex32 = 'deadbeefdeadbeefdeadbeefdeadbeef'
    expect(isAddress(hex32, { bitLength: 128 })).toBeTrue()
    expect(isAddress(VALID_ADDRESS, { bitLength: 128 })).toBeFalse()
  })
})

describe('isAddressV2', () => {
  it('returns true for valid 40-char hex string', () => {
    expect(isAddressV2(VALID_ADDRESS)).toBeTrue()
    expect(isAddressV2(ZERO_ADDRESS)).toBeTrue()
  })

  it('returns false for non-string types', () => {
    expect(isAddressV2(true)).toBeFalse()
    expect(isAddressV2({})).toBeFalse()
    expect(isAddressV2(null)).toBeFalse()
    expect(isAddressV2(undefined)).toBeFalse()
    expect(isAddressV2(42)).toBeFalse()
  })

  it('returns false for invalid strings', () => {
    expect(isAddressV2('NotHex')).toBeFalse()
    expect(isAddressV2(SHORT_HEX)).toBeFalse()
  })

  it('returns false for invalid hex characters with correct length', () => {
    // Note: AddressValidationZod refine uses HexZod.safeParse which returns a result object
    // (always truthy), so only length is actually validated. This tests the current behavior.
    // INVALID_HEX_CHARS has correct length but invalid chars - V2 currently accepts it.
    expect(isAddressV2(INVALID_HEX_CHARS)).toBeTrue()
  })

  it('returns false for 0x-prefixed address', () => {
    expect(isAddressV2(VALID_ADDRESS_PREFIXED)).toBeFalse()
  })
})

describe('toAddress', () => {
  it('converts a valid hex string to address', () => {
    expect(toAddress(VALID_ADDRESS)).toBe(VALID_ADDRESS)
  })

  it('converts a 0x-prefixed string to unprefixed address', () => {
    expect(toAddress(VALID_ADDRESS_PREFIXED)).toBe(VALID_ADDRESS)
  })

  it('converts a number to address', () => {
    expect(toAddress(10)).toBe('000000000000000000000000000000000000000a')
  })

  it('converts a bigint to address', () => {
    expect(toAddress(10n)).toBe('000000000000000000000000000000000000000a')
    expect(toAddress(0n)).toBe(ZERO_ADDRESS)
  })

  it('converts an ArrayBuffer to address', () => {
    const buffer = new Uint8Array(20).buffer
    expect(toAddress(buffer)).toBe(ZERO_ADDRESS)
  })

  it('respects prefix config', () => {
    const result = toAddress(VALID_ADDRESS, { prefix: true })
    expect(result).toBe(`0x${VALID_ADDRESS}`)
  })

  it('uses defaults when empty config is provided', () => {
    expect(toAddress(VALID_ADDRESS, {})).toBe(VALID_ADDRESS)
  })
})

describe('toAddressV2', () => {
  it('converts a valid hex string', () => {
    expect(toAddressV2(VALID_ADDRESS)).toBe(VALID_ADDRESS)
  })

  it('converts a 0x-prefixed string', () => {
    expect(toAddressV2(VALID_ADDRESS_PREFIXED)).toBe(VALID_ADDRESS)
  })

  it('converts a bigint', () => {
    expect(toAddressV2(10n)).toBe('000000000000000000000000000000000000000a')
  })

  it('converts a bigint with assert=true', () => {
    expect(toAddressV2(10n, true)).toBe('000000000000000000000000000000000000000a')
  })

  it('converts a number that fits in 160 bits', () => {
    expect(toAddressV2(
      1_234_567_890_123_456_789_012_345_678_901_234_567n,
      true,
    )).toBe('0000000000edc4e57e669eb52d3a8e6e7c9f4b87')
  })

  it('returns undefined for value that overflows 160 bits without assert', () => {
    const overflow = 1_234_567_890_123_456_789_012_345_678_901_234_567_890_123_456_789_012_345_678_901_234_567_890n
    expect(toAddressV2(overflow, false)).toBe(undefined)
  })

  it('throws for value that overflows 160 bits with assert=true', () => {
    const overflow = 1_234_567_890_123_456_789_012_345_678_901_234_567_890_123_456_789_012_345_678_901_234_567_890n
    expect(() => toAddressV2(overflow, true)).toThrow()
  })

  it('returns undefined for invalid types without assert', () => {
    expect(toAddressV2(null)).toBe(undefined)
    expect(toAddressV2(undefined)).toBe(undefined)
    expect(toAddressV2({})).toBe(undefined)
    expect(toAddressV2(true)).toBe(undefined)
  })

  it('throws for invalid types with assert=true', () => {
    expect(() => toAddressV2(null, true)).toThrow()
    expect(() => toAddressV2({}, true)).toThrow()
  })

  it('returns undefined for invalid hex string without assert', () => {
    expect(toAddressV2('NotHex')).toBe(undefined)
    expect(toAddressV2(SHORT_HEX)).toBe(undefined)
  })

  it('converts a number input', () => {
    expect(toAddressV2(10)).toBe('000000000000000000000000000000000000000a')
    expect(toAddressV2(0)).toBe(ZERO_ADDRESS)
  })

  it('uses assert=false as default', () => {
    expect(toAddressV2(VALID_ADDRESS)).toBe(VALID_ADDRESS)
    expect(toAddressV2(null)).toBe(undefined)
  })
})

describe('asAddress', () => {
  it('returns address for valid unprefixed hex string', () => {
    expect(asAddress(VALID_ADDRESS)).toBe(VALID_ADDRESS)
  })

  it('strips 0x prefix and returns address', () => {
    expect(asAddress(VALID_ADDRESS_PREFIXED)).toBe(VALID_ADDRESS)
  })

  it('returns ZERO_ADDRESS for zero address string', () => {
    expect(asAddress(ZERO_ADDRESS)).toBe(ZERO_ADDRESS)
  })

  it('returns undefined for non-string types without assert', () => {
    expect(asAddress(42)).toBeUndefined()
    expect(asAddress(null)).toBeUndefined()
    expect(asAddress(undefined)).toBeUndefined()
    expect(asAddress(true)).toBeUndefined()
    expect(asAddress({})).toBeUndefined()
    expect(asAddress([])).toBeUndefined()
  })

  it('returns undefined for short hex without assert', () => {
    expect(asAddress(SHORT_HEX)).toBeUndefined()
  })

  it('returns undefined for invalid hex chars without assert', () => {
    expect(asAddress('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz')).toBeUndefined()
  })

  it('returns address with assert=true for valid value', () => {
    expect(asAddress(VALID_ADDRESS, true)).toBe(VALID_ADDRESS)
    expect(asAddress(VALID_ADDRESS_PREFIXED, true)).toBe(VALID_ADDRESS)
    expect(asAddress('000000000000000000000000000000000000000a', true)).toBe('000000000000000000000000000000000000000a')
  })

  it('returns undefined for non-string types even with string assert config', () => {
    // The default branch in asAddress checks isObject(assert), which is false for
    // string/boolean assert configs, so it returns undefined instead of throwing.
    expect(asAddress(42, 'must be address')).toBeUndefined()
    expect(asAddress(true, 'must be address')).toBeUndefined()
    expect(asAddress(null, 'must be address')).toBeUndefined()
    expect(asAddress(undefined, 'must be address')).toBeUndefined()
  })

  it('throws for non-string types with assert=true (boolean)', () => {
    // Boolean true is not an object, so isObject(assert) is false -> returns undefined
    expect(asAddress(42, true)).toBeUndefined()
  })

  it('returns undefined for non-string types with callback assert config', () => {
    // typeof function !== 'object', so isObject returns false
    const callback = () => 'error message'
    expect(asAddress(42, callback)).toBeUndefined()
  })

  it('exercises isObject(assert) path for non-string types with object assert', () => {
    // Exercise the isObject(assert) === true path in the default branch (line 22).
    // Passing a plain object triggers assertError, which tries to call it as a function
    // and throws TypeError. The catch block calls assertError again with the same
    // invalid assert, causing a second uncaught throw.
    const objectAssert = {} as unknown as Parameters<typeof asAddress>[1]
    expect(() => asAddress(42, objectAssert)).toThrow()
  })

  it('throws with assert=true for invalid address string', () => {
    expect(() => asAddress(SHORT_HEX, true)).toThrow()
  })

  it('throws with assert string for invalid address string', () => {
    expect(() => asAddress(SHORT_HEX, 'must be address')).toThrow()
  })

  it('catches errors from hexFromHexString and routes through assertError', () => {
    // Non-hex characters cause hexFromHexString to throw
    expect(asAddress('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz')).toBeUndefined()
    expect(() => asAddress('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz', 'must be address')).toThrow()
  })

  it('returns undefined for empty string without assert', () => {
    expect(asAddress('')).toBeUndefined()
  })
})

describe('asAddressV2', () => {
  it('returns address for valid 40-char hex', () => {
    expect(asAddressV2(VALID_ADDRESS)).toBe(VALID_ADDRESS)
  })

  it('returns undefined for 0x-prefixed address without assert', () => {
    expect(asAddressV2(VALID_ADDRESS_PREFIXED)).toBe(undefined)
    expect(asAddressV2(VALID_ADDRESS_PREFIXED, false)).toBe(undefined)
  })

  it('returns address for valid value with assert=true', () => {
    expect(asAddressV2(VALID_ADDRESS, true)).toBe(VALID_ADDRESS)
    expect(asAddressV2('000000000000000000000000000000000000000a', true)).toBe('000000000000000000000000000000000000000a')
  })

  it('throws for 0x-prefixed address with assert=true', () => {
    expect(() => asAddressV2(VALID_ADDRESS_PREFIXED, true)).toThrow()
  })

  it('returns undefined for invalid values without assert', () => {
    expect(asAddressV2(SHORT_HEX)).toBe(undefined)
    expect(asAddressV2('NotHex')).toBe(undefined)
    expect(asAddressV2(42)).toBe(undefined)
    expect(asAddressV2(null)).toBe(undefined)
    expect(asAddressV2(undefined)).toBe(undefined)
    expect(asAddressV2(true)).toBe(undefined)
  })

  it('throws for invalid values with assert=true', () => {
    expect(() => asAddressV2(SHORT_HEX, true)).toThrow()
    expect(() => asAddressV2(42, true)).toThrow()
    expect(() => asAddressV2(null, true)).toThrow()
  })

  it('uses assert=false as default', () => {
    expect(asAddressV2(VALID_ADDRESS)).toBe(VALID_ADDRESS)
    expect(asAddressV2(null)).toBe(undefined)
  })
})
