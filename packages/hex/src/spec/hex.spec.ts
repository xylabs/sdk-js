import { asHex, isHex } from '../hex'

describe('hex', () => {
  test('isHex', () => {
    expect(isHex(true)).toBeFalse()
    expect(isHex({})).toBeFalse()
    expect(isHex('NotHex')).toBeFalse()
    expect(isHex('deadbeef')).toBeTrue()
    expect(isHex('0xdeadbeef')).toBeFalse()
  })
  test('asHex', () => {
    expect(asHex(10)).toBe('a')
    expect(asHex(10, 256)).toBe('000000000000000000000000000000000000000000000000000000000000000a')
  })
})
