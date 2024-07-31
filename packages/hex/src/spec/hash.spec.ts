import { isHash } from '../hash.ts'
import { hexFromNumber } from '../hex/index.ts'

describe('hash', () => {
  test('isHash', () => {
    expect(isHash(true)).toBeFalse()
    expect(isHash({})).toBeFalse()
    expect(isHash('NotHex')).toBeFalse()
    expect(isHash('deadbeef')).toBeFalse()
    expect(isHash('0xdeadbeef')).toBeFalse()
  })
  test('hexFromNumber', () => {
    expect(hexFromNumber(10)).toBe('0a')
    expect(hexFromNumber(10, { bitLength: 256 })).toBe('000000000000000000000000000000000000000000000000000000000000000a')
    expect(hexFromNumber(10, { bitLength: 128 })).toBe('0000000000000000000000000000000a')
  })
})
