import '@xylabs/vitest-extended'

import {
  describe, expect, test,
} from 'vitest'

import {
  Address, asAddress, isAddress,
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
    expect(Address.identify(true)).toBeFalse()
    expect(Address.identify({})).toBeFalse()
    expect(Address.identify('NotHex')).toBeFalse()
    expect(Address.identify('deadbeef')).toBeFalse()
    expect(Address.identify('0xdeadbeef')).toBeFalse()
    expect(Address.identify('deadbeefdeadbeefdeadbeefdeadbeefdeadbeef')).toBeTrue()
    expect(Address.identify('0xdeadbeefdeadbeefdeadxxxxdeadbeefdeadbeef')).toBeFalse()
  })
  test('cast', () => {
    expect(Address.cast('0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef')).toBe(undefined)
    expect(Address.cast('deadbeefdeadbeefdeadbeefdeadbeefdeadbeef')).toBe('deadbeefdeadbeefdeadbeefdeadbeefdeadbeef')
    expect(Address.cast('0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef', false)).toBe(undefined)
    expect(Address.cast('000000000000000000000000000000000000000a', true)).toBe('000000000000000000000000000000000000000a')
    expect(Address.cast('0x000000000000000000000000000000000000000a', false)).toBe(undefined)
  })

  test('from', () => {
    expect(Address.from('0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef')).toBe('deadbeefdeadbeefdeadbeefdeadbeefdeadbeef')
    expect(Address.from('deadbeefdeadbeefdeadbeefdeadbeefdeadbeef')).toBe('deadbeefdeadbeefdeadbeefdeadbeefdeadbeef')
    expect(Address.from('0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef', true)).toBe('deadbeefdeadbeefdeadbeefdeadbeefdeadbeef')
    expect(Address.from('000000000000000000000000000000000000000a', true)).toBe('000000000000000000000000000000000000000a')
    expect(Address.from('0x000000000000000000000000000000000000000a', true)).toBe('000000000000000000000000000000000000000a')
    expect(Address.from(10n, true)).toBe('000000000000000000000000000000000000000a')
    expect(Address.from(
      1_234_567_890_123_456_789_012_345_678_901_234_567_890_123_456_789_012_345_678_901_234_567_890n,
      false,
    )).toBe(undefined)
    expect(Address.from(
      1_234_567_890_123_456_789_012_345_678_901_234_567n,
      true,
    )).toBe('0000000000edc4e57e669eb52d3a8e6e7c9f4b87')
  })

  test('from [assert]', () => {
    try {
      Address.from(
        1_234_567_890_123_456_789_012_345_678_901_234_567_890_123_456_789_012_345_678_901_234_567_890n,
        true,
      )
      expect(false).toBeTrue() // should not reach here
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
    }
  })
})
