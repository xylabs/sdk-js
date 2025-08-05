import '@xylabs/vitest-extended'

import {
  describe, expect, test,
} from 'vitest'

import {
  asAddress, asAddressV2, isAddress,
  isAddressV2,
  toAddressV2,
} from '../address/index.ts'

describe('address', () => {
  test('isAddress', () => {
    expect(isAddress(true)).toBeFalse()
    expect(isAddress({})).toBeFalse()
    expect(isAddress('NotHex')).toBeFalse()
    expect(isAddress('deadbeef')).toBeFalse()
    expect(isAddress('0xdeadbeef')).toBeFalse()
    expect(isAddress('0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef', { prefix: true })).toBeTrue()
    expect(isAddress('0xdeadbeefdeadbeefdeadxxxxdeadbeefdeadbeef')).toBeFalse()
  })
  test('asAddress', () => {
    expect(asAddress('0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef')).toBe('deadbeefdeadbeefdeadbeefdeadbeefdeadbeef')
    expect(asAddress('deadbeefdeadbeefdeadbeefdeadbeefdeadbeef')).toBe('deadbeefdeadbeefdeadbeefdeadbeefdeadbeef')
    expect(asAddress('0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef', true)).toBe('deadbeefdeadbeefdeadbeefdeadbeefdeadbeef')
    expect(asAddress('000000000000000000000000000000000000000a', true)).toBe('000000000000000000000000000000000000000a')
  })
})

describe('address [zod]', () => {
  test('identify', () => {
    expect(isAddressV2(true)).toBeFalse()
    expect(isAddressV2({})).toBeFalse()
    expect(isAddressV2('NotHex')).toBeFalse()
    expect(isAddressV2('deadbeef')).toBeFalse()
    expect(isAddressV2('0xdeadbeef')).toBeFalse()
    expect(isAddressV2('deadbeefdeadbeefdeadbeefdeadbeefdeadbeef')).toBeTrue()
    expect(isAddressV2('0xdeadbeefdeadbeefdeadxxxxdeadbeefdeadbeef')).toBeFalse()
  })
  test('cast', () => {
    expect(asAddressV2('0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef')).toBe(undefined)
    expect(asAddressV2('deadbeefdeadbeefdeadbeefdeadbeefdeadbeef')).toBe('deadbeefdeadbeefdeadbeefdeadbeefdeadbeef')
    expect(asAddressV2('0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef', false)).toBe(undefined)
    expect(asAddressV2('000000000000000000000000000000000000000a', true)).toBe('000000000000000000000000000000000000000a')
    expect(asAddressV2('0x000000000000000000000000000000000000000a', false)).toBe(undefined)
  })

  test('from', () => {
    expect(toAddressV2('0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef')).toBe('deadbeefdeadbeefdeadbeefdeadbeefdeadbeef')
    expect(toAddressV2('deadbeefdeadbeefdeadbeefdeadbeefdeadbeef')).toBe('deadbeefdeadbeefdeadbeefdeadbeefdeadbeef')
    expect(toAddressV2('0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef', true)).toBe('deadbeefdeadbeefdeadbeefdeadbeefdeadbeef')
    expect(toAddressV2('000000000000000000000000000000000000000a', true)).toBe('000000000000000000000000000000000000000a')
    expect(toAddressV2('0x000000000000000000000000000000000000000a', true)).toBe('000000000000000000000000000000000000000a')
    expect(toAddressV2(10n, true)).toBe('000000000000000000000000000000000000000a')
    expect(toAddressV2(
      1_234_567_890_123_456_789_012_345_678_901_234_567_890_123_456_789_012_345_678_901_234_567_890n,
      false,
    )).toBe(undefined)
    expect(toAddressV2(
      1_234_567_890_123_456_789_012_345_678_901_234_567n,
      true,
    )).toBe('0000000000edc4e57e669eb52d3a8e6e7c9f4b87')
  })

  test('from [assert]', () => {
    try {
      toAddressV2(
        1_234_567_890_123_456_789_012_345_678_901_234_567_890_123_456_789_012_345_678_901_234_567_890n,
        true,
      )
      expect(false).toBeTrue() // should not reach here
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
    }
  })
})
