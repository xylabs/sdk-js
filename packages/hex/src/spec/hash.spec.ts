import { asHash, isHash } from '../hash'

describe('hash', () => {
  test('isHash', () => {
    expect(isHash(true)).toBeFalse()
    expect(isHash({})).toBeFalse()
    expect(isHash('NotHex')).toBeFalse()
    expect(isHash('deadbeef')).toBeFalse()
    expect(isHash('0xdeadbeef')).toBeFalse()
  })
  test('asHash', () => {
    expect(asHash(10)).toBe('000000000000000000000000000000000000000000000000000000000000000a')
    expect(asHash(10, 128)).toBe('0000000000000000000000000000000a')
  })
})
