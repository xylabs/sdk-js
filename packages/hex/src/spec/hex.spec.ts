import {
  describe, expect, test,
} from 'vitest'

import {
  hexFromArrayBuffer, hexFromNumber, isHex,
} from '../hex/index.ts'

describe('hex', () => {
  test('isHex', () => {
    expect(isHex(true)).toBeFalse()
    expect(isHex({})).toBeFalse()
    expect(isHex('NotHex')).toBeFalse()
    expect(isHex('deadbeef')).toBeTrue()
    expect(isHex('0xdeadbeef')).toBeFalse()
  })
  test('asHex', () => {
    expect(hexFromArrayBuffer(new ArrayBuffer(2))).toBe('0000')
    expect(hexFromNumber(10)).toBe('0a')
    expect(hexFromNumber(10, { bitLength: 256 })).toBe('000000000000000000000000000000000000000000000000000000000000000a')
  })
})
