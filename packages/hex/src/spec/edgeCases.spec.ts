import {
  describe, expect, it,
} from 'vitest'

import {
  ADDRESS_LENGTH,
  AddressTransformZod, AddressValidationZod,
  ZERO_ADDRESS,
} from '../address/index.ts'
import {
  EthAddressZod, isEthAddress,
  toEthAddress,
} from '../ethAddress.ts'
import {
  HASH_LENGTH,
  HashRegEx,
  isHash,
  ZERO_HASH,
} from '../hash/index.ts'
import type { Hex } from '../hex/index.ts'
import {
  asHex,
  bitsToNibbles,
  hexFrom,
  hexFromArrayBuffer, hexFromBigInt,
  hexFromHexString, hexFromNumber,
  isHex, isHexZero,
  nibblesToBits,
} from '../hex/index.ts'
import { HexRegExMinMax, HexRegExMinMaxMixedCaseWithPrefix } from '../HexRegEx.ts'
import { hexToBigInt } from '../hexToBigInt.ts'
import { BigIntToJsonZod, JsonToBigIntZod } from '../zod.ts'

describe('isHex edge cases', () => {
  it('rejects an empty string', () => {
    expect(isHex('')).toBe(false)
  })

  it('rejects uppercase hex without prefix', () => {
    expect(isHex('DEADBEEF')).toBe(false)
  })

  it('rejects mixed case', () => {
    expect(isHex('DeAdBeEf')).toBe(false)
  })

  it('validates with prefix config', () => {
    expect(isHex('0xdeadbeef', { prefix: true })).toBe(true)
    expect(isHex('deadbeef', { prefix: true })).toBe(false)
    expect(isHex('0xDEADBEEF', { prefix: true })).toBe(false)
  })

  it('validates with bitLength config', () => {
    expect(isHex('deadbeef', { bitLength: 32 })).toBe(true)
    expect(isHex('deadbeef', { bitLength: 16 })).toBe(false)
    expect(isHex('de', { bitLength: 8 })).toBe(true)
    expect(isHex('d', { bitLength: 4 })).toBe(true)
  })

  it('validates with combined prefix and bitLength', () => {
    expect(isHex('0xdeadbeef', { prefix: true, bitLength: 32 })).toBe(true)
    expect(isHex('0xde', { prefix: true, bitLength: 8 })).toBe(true)
    expect(isHex('0xde', { prefix: true, bitLength: 32 })).toBe(false)
  })

  it('accepts single hex character', () => {
    expect(isHex('a')).toBe(true)
    expect(isHex('0')).toBe(true)
    expect(isHex('f')).toBe(true)
  })

  it('rejects whitespace', () => {
    expect(isHex(' deadbeef')).toBe(false)
    expect(isHex('dead beef')).toBe(false)
    expect(isHex('deadbeef ')).toBe(false)
  })
})

describe('hexFromHexString edge cases', () => {
  it('throws for empty string', () => {
    expect(() => hexFromHexString('')).toThrow()
  })

  it('throws for non-hex characters', () => {
    expect(() => hexFromHexString('xyz')).toThrow()
  })

  it('lowercases uppercase input', () => {
    expect(hexFromHexString('DEADBEEF')).toBe('deadbeef')
  })

  it('lowercases mixed case input', () => {
    expect(hexFromHexString('DeAdBeEf')).toBe('deadbeef')
  })

  it('pads odd-length strings to even with default byteSize (8)', () => {
    // default byteSize=8, nibbleBoundary=2, so pads to nearest multiple of 2
    expect(hexFromHexString('abc')).toBe('0abc')
    expect(hexFromHexString('12345')).toBe('012345')
  })

  it('pads with byteSize: 4 (nibble boundary 1)', () => {
    // nibbleBoundary = bitsToNibbles(4) = 1, so no padding for odd length
    expect(hexFromHexString('a', { byteSize: 4 })).toBe('a')
    expect(hexFromHexString('abc', { byteSize: 4 })).toBe('abc')
  })

  it('pads with byteSize: 16 (nibble boundary 4)', () => {
    expect(hexFromHexString('a', { byteSize: 16 })).toBe('000a')
    expect(hexFromHexString('abcde', { byteSize: 16 })).toBe('000abcde')
  })

  it('pads to bitLength when specified', () => {
    expect(hexFromHexString('ff', { bitLength: 32 })).toBe('000000ff')
    expect(hexFromHexString('ff', { bitLength: 256 })).toBe('00000000000000000000000000000000000000000000000000000000000000ff')
  })

  it('handles 0x prefix stripping with uppercase', () => {
    expect(hexFromHexString('0xDEAD')).toBe('dead')
  })

  it('combines prefix output with bitLength padding', () => {
    expect(hexFromHexString('ff', { prefix: true, bitLength: 16 })).toBe('0x00ff')
  })
})

describe('hexFromBigInt edge cases', () => {
  it('converts zero', () => {
    expect(hexFromBigInt(0n)).toBe('00')
  })

  it('converts with prefix', () => {
    expect(hexFromBigInt(255n, { prefix: true })).toBe('0xff')
  })

  it('converts with bitLength padding', () => {
    expect(hexFromBigInt(255n, { bitLength: 32 })).toBe('000000ff')
  })

  it('converts very large bigint', () => {
    const large = (1n << 256n) - 1n
    const result = hexFromBigInt(large)
    expect(result).toHaveLength(64)
    expect(result).toBe('f'.repeat(64))
  })

  it('handles negative bigint (produces negative hex via toString)', () => {
    // BigInt(-1).toString(16) returns '-1', which is not valid hex
    expect(() => hexFromBigInt(-1n)).toThrow()
  })
})

describe('hexFromNumber edge cases', () => {
  it('converts zero', () => {
    expect(hexFromNumber(0)).toBe('00')
  })

  it('throws for negative numbers', () => {
    expect(() => hexFromNumber(-1)).toThrow()
  })

  it('converts MAX_SAFE_INTEGER', () => {
    const result = hexFromNumber(Number.MAX_SAFE_INTEGER)
    expect(result).toBe('1fffffffffffff')
  })
})

describe('hexFromArrayBuffer edge cases', () => {
  it('throws for empty buffer (empty string is not valid hex)', () => {
    expect(() => hexFromArrayBuffer(new ArrayBuffer(0))).toThrow()
  })

  it('converts single byte', () => {
    expect(hexFromArrayBuffer(new Uint8Array([0xff]).buffer)).toBe('ff')
  })

  it('respects prefix config', () => {
    expect(hexFromArrayBuffer(new Uint8Array([0xca, 0xfe]).buffer, { prefix: true })).toBe('0xcafe')
  })

  it('respects bitLength config', () => {
    expect(hexFromArrayBuffer(new Uint8Array([0xff]).buffer, { bitLength: 32 })).toBe('000000ff')
  })
})

describe('hexFrom edge cases', () => {
  it('throws for null', () => {
    expect(() => hexFrom(null as unknown as string)).toThrow()
  })

  it('throws for symbol', () => {
    expect(() => hexFrom(Symbol('test') as unknown as string)).toThrow()
  })
})

describe('asHex edge cases', () => {
  it('returns undefined for empty string', () => {
    // empty string throws in hexFromHexString, but asHex doesn't catch
    expect(() => asHex('')).toThrow()
  })

  it('handles whitespace-only string', () => {
    expect(() => asHex(' ')).toThrow()
  })
})

describe('isHexZero edge cases', () => {
  it('returns true for single zero without prefix', () => {
    expect(isHexZero('0')).toBe(true)
  })

  it('returns true for 0x0', () => {
    expect(isHexZero('0x0')).toBe(true)
  })

  it('throws for non-hex string', () => {
    expect(() => isHexZero('xyz')).toThrow()
  })

  it('throws for empty string', () => {
    expect(() => isHexZero('')).toThrow()
  })

  it('returns undefined for number input', () => {
    expect(isHexZero(42 as unknown as string)).toBeUndefined()
  })
})

describe('hexToBigInt edge cases', () => {
  it('handles 0x-prefixed hex', () => {
    expect(hexToBigInt('0xdeadbeef' as Hex)).toBe(0xDE_AD_BE_EFn)
  })

  it('handles single character hex', () => {
    expect(hexToBigInt('f' as Hex)).toBe(15n)
  })

  it('converts 256-bit max value', () => {
    const maxHex = 'f'.repeat(64) as Hex
    expect(hexToBigInt(maxHex)).toBe((1n << 256n) - 1n)
  })

  it('converts zero', () => {
    expect(hexToBigInt('0' as Hex)).toBe(0n)
  })
})

describe('bitsToNibbles edge cases', () => {
  it('handles zero bits', () => {
    expect(bitsToNibbles(0)).toBe(0)
  })

  it('handles large multiples of 4', () => {
    expect(bitsToNibbles(4096)).toBe(1024)
  })

  it('throws for 2', () => {
    expect(() => bitsToNibbles(2)).toThrow()
  })

  it('roundtrips with nibblesToBits', () => {
    for (const bits of [0, 4, 8, 16, 32, 64, 128, 256]) {
      expect(nibblesToBits(bitsToNibbles(bits))).toBe(bits)
    }
  })
})

describe('HexRegExMinMax edge cases', () => {
  it('matches exact byte count', () => {
    const regex = HexRegExMinMax(2, 2)
    expect(regex.test('aabb')).toBe(true)
    expect(regex.test('aa')).toBe(false)
    expect(regex.test('aabbcc')).toBe(false)
  })

  it('matches range of byte counts', () => {
    const regex = HexRegExMinMax(1, 3)
    expect(regex.test('aa')).toBe(true)
    expect(regex.test('aabb')).toBe(true)
    expect(regex.test('aabbcc')).toBe(true)
    expect(regex.test('a')).toBe(false) // 1 char < 2 (1 byte min)
    expect(regex.test('aabbccdd')).toBe(false) // 4 bytes > 3 max
  })

  it('allows zero minimum bytes', () => {
    const regex = HexRegExMinMax(0, 2)
    expect(regex.test('')).toBe(true)
    expect(regex.test('aa')).toBe(true)
    expect(regex.test('aabb')).toBe(true)
    expect(regex.test('aabbcc')).toBe(false)
  })

  it('rejects uppercase', () => {
    const regex = HexRegExMinMax(1, 1)
    expect(regex.test('AA')).toBe(false)
  })
})

describe('HexRegExMinMaxMixedCaseWithPrefix', () => {
  it('requires 0x prefix', () => {
    const regex = HexRegExMinMaxMixedCaseWithPrefix(1, 1)
    expect(regex.test('0xaa')).toBe(true)
    expect(regex.test('0xAA')).toBe(true)
    expect(regex.test('aa')).toBe(false)
  })

  it('matches exact byte count with prefix', () => {
    const regex = HexRegExMinMaxMixedCaseWithPrefix(2, 2)
    expect(regex.test('0xaabb')).toBe(true)
    expect(regex.test('0xAABB')).toBe(true)
    expect(regex.test('0xaa')).toBe(false)
    expect(regex.test('0xaabbcc')).toBe(false)
  })
})

describe('isHash edge cases', () => {
  it('accepts a valid 64-char hex hash', () => {
    const validHash = 'a'.repeat(64)
    expect(isHash(validHash)).toBe(true)
  })

  it('accepts ZERO_HASH', () => {
    expect(isHash(ZERO_HASH)).toBe(true)
  })

  it('rejects 63-char hex (one short, but ceil(63/2) = 32 correct bytes)', () => {
    const oneShort = 'a'.repeat(63)
    expect(oneShort.length).toBe(63)
    expect(Math.ceil(oneShort.length / 2)).toBe(HASH_LENGTH)
    expect(isHash(oneShort)).toBe(false)
  })

  it('rejects 65-char hex', () => {
    expect(isHash('a'.repeat(65))).toBe(false)
  })

  it('validates with non-default bitLength', () => {
    // 128-bit hash = 32 hex chars
    const hex32 = 'a'.repeat(32)
    expect(isHash(hex32, 128)).toBe(true)
    expect(isHash(hex32, 256)).toBe(false)
  })

  it('validates 512-bit hash', () => {
    const hex128 = 'a'.repeat(128)
    expect(isHash(hex128, 512)).toBe(true)
  })

  it('rejects empty string', () => {
    expect(isHash('')).toBe(false)
  })

  it('rejects 0x-prefixed hash', () => {
    expect(isHash('0x' + 'a'.repeat(64))).toBe(false)
  })

  it('rejects uppercase', () => {
    expect(isHash('A'.repeat(64))).toBe(false)
  })
})

describe('HashRegEx edge cases', () => {
  it('matches exactly 64 lowercase hex chars', () => {
    expect(HashRegEx.test('a'.repeat(64))).toBe(true)
    expect(HashRegEx.test('a'.repeat(63))).toBe(false)
    expect(HashRegEx.test('a'.repeat(65))).toBe(false)
    expect(HashRegEx.test('A'.repeat(64))).toBe(false)
  })
})

describe('AddressValidationZod edge cases', () => {
  it('parses a valid 40-char lowercase hex address', () => {
    const result = AddressValidationZod.safeParse('a'.repeat(ADDRESS_LENGTH))
    expect(result.success).toBe(true)
  })

  it('rejects 39-char address', () => {
    const result = AddressValidationZod.safeParse('a'.repeat(ADDRESS_LENGTH - 1))
    expect(result.success).toBe(false)
  })

  it('rejects 41-char address', () => {
    const result = AddressValidationZod.safeParse('a'.repeat(ADDRESS_LENGTH + 1))
    expect(result.success).toBe(false)
  })

  it('rejects uppercase hex', () => {
    const result = AddressValidationZod.safeParse('A'.repeat(ADDRESS_LENGTH))
    expect(result.success).toBe(false)
  })

  it('rejects non-hex characters of correct length', () => {
    const result = AddressValidationZod.safeParse('g'.repeat(ADDRESS_LENGTH))
    expect(result.success).toBe(false)
  })

  it('rejects non-string input', () => {
    expect(AddressValidationZod.safeParse(123).success).toBe(false)
    expect(AddressValidationZod.safeParse(null).success).toBe(false)
  })

  it('rejects 0x-prefixed address', () => {
    expect(AddressValidationZod.safeParse('0x' + 'a'.repeat(38)).success).toBe(false)
  })
})

describe('AddressTransformZod edge cases', () => {
  it('transforms a valid hex string', () => {
    const addr = 'a'.repeat(ADDRESS_LENGTH)
    const result = AddressTransformZod.safeParse(addr)
    expect(result.success).toBe(true)
    if (result.success) expect(result.data).toBe(addr)
  })

  it('transforms a 0x-prefixed string by stripping prefix', () => {
    const addr = 'a'.repeat(ADDRESS_LENGTH)
    const result = AddressTransformZod.safeParse('0x' + addr)
    expect(result.success).toBe(true)
    if (result.success) expect(result.data).toBe(addr)
  })

  it('transforms a bigint to padded address', () => {
    const result = AddressTransformZod.safeParse(10n)
    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.data).toBe('000000000000000000000000000000000000000a')
    }
  })

  it('transforms zero bigint to zero address', () => {
    const result = AddressTransformZod.safeParse(0n)
    expect(result.success).toBe(true)
    if (result.success) expect(result.data).toBe(ZERO_ADDRESS)
  })

  it('transforms a number to padded address', () => {
    const result = AddressTransformZod.safeParse(255)
    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.data).toBe('00000000000000000000000000000000000000ff')
    }
  })

  it('rejects a string that is too short', () => {
    expect(AddressTransformZod.safeParse('dead').success).toBe(false)
  })

  it('rejects non-hex characters', () => {
    expect(AddressTransformZod.safeParse('g'.repeat(ADDRESS_LENGTH)).success).toBe(false)
  })

  it('rejects bigint that overflows 160 bits', () => {
    const overflow = (1n << 160n)
    expect(AddressTransformZod.safeParse(overflow).success).toBe(false)
  })

  it('rejects unsupported types', () => {
    expect(AddressTransformZod.safeParse(null).success).toBe(false)
    expect(AddressTransformZod.safeParse(true).success).toBe(false)
    expect(AddressTransformZod.safeParse({}).success).toBe(false)
  })
})

describe('EthAddressZod edge cases', () => {
  it('parses a valid 0x-prefixed mixed-case address', () => {
    const result = EthAddressZod.safeParse('0xCd9A7cf9A3b809b18a274cE648f6b59E40De8bd9')
    expect(result.success).toBe(true)
  })

  it('rejects address without 0x prefix', () => {
    expect(EthAddressZod.safeParse('Cd9A7cf9A3b809b18a274cE648f6b59E40De8bd9').success).toBe(false)
  })

  it('rejects too-short address', () => {
    expect(EthAddressZod.safeParse('0xdead').success).toBe(false)
  })

  it('rejects non-hex characters', () => {
    expect(EthAddressZod.safeParse('0x' + 'g'.repeat(40)).success).toBe(false)
  })

  it('rejects non-string', () => {
    expect(EthAddressZod.safeParse(123).success).toBe(false)
  })
})

describe('isEthAddress edge cases', () => {
  it('accepts lowercase 0x-prefixed address', () => {
    expect(isEthAddress('0x' + 'a'.repeat(40))).toBe(true)
  })

  it('accepts uppercase 0x-prefixed address', () => {
    expect(isEthAddress('0x' + 'A'.repeat(40))).toBe(true)
  })

  it('rejects address without 0x prefix by default', () => {
    expect(isEthAddress('a'.repeat(40))).toBe(false)
  })

  it('accepts non-prefixed address with prefix: false config', () => {
    expect(isEthAddress('a'.repeat(40), { prefix: false, bitLength: 160 })).toBe(true)
  })

  it('rejects non-string types', () => {
    expect(isEthAddress(123)).toBe(false)
    expect(isEthAddress(null)).toBe(false)
    expect(isEthAddress()).toBe(false)
  })
})

describe('toEthAddress edge cases', () => {
  it('always produces 0x prefix', () => {
    const result = toEthAddress('a'.repeat(40))
    expect(result).toBe('0x' + 'a'.repeat(40))
  })

  it('pads short value to 40 hex chars plus prefix', () => {
    const result = toEthAddress(1)
    expect(result).toBe('0x000000000000000000000000000000000000000' + '1')
    expect(result).toHaveLength(42) // 0x + 40
  })

  it('converts bigint to eth address', () => {
    const result = toEthAddress(0xDE_ADn)
    expect(result.startsWith('0x')).toBe(true)
    expect(result).toHaveLength(42)
    expect(result).toBe('0x000000000000000000000000000000000000dead')
  })

  it('converts ArrayBuffer to eth address', () => {
    const buf = new Uint8Array(20).fill(0xff).buffer
    const result = toEthAddress(buf)
    expect(result).toBe('0x' + 'ff'.repeat(20))
  })
})

describe('BigIntToJsonZod edge cases', () => {
  it('converts large bigint', () => {
    const large = (1n << 256n) - 1n
    const result = BigIntToJsonZod.parse(large)
    expect(result).toBe('f'.repeat(64))
  })

  it('rejects non-bigint', () => {
    expect(() => BigIntToJsonZod.parse(42)).toThrow()
    expect(() => BigIntToJsonZod.parse('ff')).toThrow()
  })
})

describe('JsonToBigIntZod edge cases', () => {
  it('converts large hex string', () => {
    const result = JsonToBigIntZod.parse('f'.repeat(64))
    expect(result).toBe((1n << 256n) - 1n)
  })

  it('rejects non-string', () => {
    expect(() => JsonToBigIntZod.parse(42)).toThrow()
  })
})
