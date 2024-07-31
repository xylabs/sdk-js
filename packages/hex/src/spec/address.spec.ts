import { asAddress, isAddress } from '../address.ts'

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
