import { asAddress, isAddress } from '../address'

describe('address', () => {
  test('isAddress', () => {
    expect(isAddress(true)).toBeFalse()
    expect(isAddress({})).toBeFalse()
    expect(isAddress('NotHex')).toBeFalse()
    expect(isAddress('deadbeef')).toBeFalse()
    expect(isAddress('0xdeadbeef')).toBeFalse()
    expect(isAddress('0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef')).toBeTrue()
    expect(isAddress('0xdeadbeefdeadbeefdeadxxxxdeadbeefdeadbeef')).toBeFalse()
  })
  test('asAddress', () => {
    expect(asAddress('0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef', true)).toBe('0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef')
    expect(asAddress('000000000000000000000000000000000000000a', true)).toBe('0x000000000000000000000000000000000000000a')
  })
})
