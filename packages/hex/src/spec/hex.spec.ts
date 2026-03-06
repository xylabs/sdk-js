import '@xylabs/vitest-extended'

import {
  describe, expect, test,
} from 'vitest'

import {
  hexFromArrayBuffer, hexFromHexString, hexFromNumber, isHex,
} from '../hex/index.ts'

describe('hex', () => {
  test('isHex', () => {
    expect(isHex(true)).toBeFalse()
    expect(isHex({})).toBeFalse()
    expect(isHex('NotHex')).toBeFalse()
    expect(isHex('deadbeef')).toBeTrue()
    expect(isHex('0xdeadbeef')).toBeFalse()
  })
  test('hexFromHexString - single character', () => {
    expect(hexFromHexString('a')).toBe('0a')
    expect(hexFromHexString('0xa')).toBe('0a')
    expect(hexFromHexString('f')).toBe('0f')
    expect(hexFromHexString('a', { prefix: true })).toBe('0x0a')
    expect(hexFromHexString('0xa', { prefix: true })).toBe('0x0a')
    expect(hexFromHexString('a', { byteSize: 16 })).toBe('000a')
    expect(hexFromHexString('a', { byteSize: 16, prefix: true })).toBe('0x000a')
    expect(hexFromHexString('a', { bitLength: 256 })).toBe('000000000000000000000000000000000000000000000000000000000000000a')
  })
  test('asHex', () => {
    expect(hexFromArrayBuffer(new ArrayBuffer(2))).toBe('0000')
    expect(hexFromNumber(10)).toBe('0a')
    expect(hexFromNumber(10, { bitLength: 256 })).toBe('000000000000000000000000000000000000000000000000000000000000000a')
  })
})
