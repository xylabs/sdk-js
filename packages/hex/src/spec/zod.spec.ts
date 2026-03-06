import {
  describe, expect, it,
} from 'vitest'

import { HashToJsonZod, JsonToHashZod } from '../hash/zod.ts'
import { BigIntToJsonZod, JsonToBigIntZod } from '../zod.ts'

describe('BigIntToJsonZod', () => {
  it('transforms a bigint to hex string', () => {
    const result = BigIntToJsonZod.parse(10n)
    expect(result).toBe('0a')
  })

  it('transforms zero bigint', () => {
    const result = BigIntToJsonZod.parse(0n)
    expect(result).toBe('00')
  })

  it('rejects negative bigint', () => {
    expect(() => BigIntToJsonZod.parse(-1n)).toThrow()
  })
})

describe('JsonToBigIntZod', () => {
  it('transforms hex string to bigint', () => {
    const result = JsonToBigIntZod.parse('0a')
    expect(result).toBe(10n)
  })

  it('transforms 0x-prefixed hex string to bigint', () => {
    const result = JsonToBigIntZod.parse('0xff')
    expect(result).toBe(255n)
  })

  it('transforms zero string', () => {
    const result = JsonToBigIntZod.parse('00')
    expect(result).toBe(0n)
  })
})

describe('HashToJsonZod', () => {
  it('transforms a hash to a string', () => {
    const hash = 'a'.repeat(64)
    const result = HashToJsonZod.parse(hash)
    expect(result).toBe(hash)
  })
})

describe('JsonToHashZod', () => {
  it('transforms a string to a hash', () => {
    const hash = 'b'.repeat(64)
    const result = JsonToHashZod.parse(hash)
    expect(result).toBe(hash)
  })

  it('rejects invalid hash', () => {
    expect(() => JsonToHashZod.parse('not-a-hash')).toThrow()
  })
})
