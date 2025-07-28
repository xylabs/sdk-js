import {
  describe, expect, test,
} from 'vitest'

import { EthAddressWrapper } from '../EthAddress.ts'

describe('EthAddress', () => {
  test('checking happy path', () => {
    const addressString = '7284b6A4233B8B05910F2CbF7dBf6715325F6fCb'.toLowerCase()
    const address = EthAddressWrapper.fromString(addressString, 16)
    expect(address?.toString()).toBe(`0x${addressString}`)
    expect(address?.toShortString()).toBe('0x72...cb')
  })
  test('checksum', () => {
    const address = EthAddressWrapper.fromString('0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1')
    expect(address?.toString(true)).toBe('0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1')
  })
})
