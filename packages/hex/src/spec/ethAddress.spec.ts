import '@xylabs/vitest-extended'

import {
  describe, expect, it,
} from 'vitest'

import {
  asEthAddress,
  EthAddressRegEx, isEthAddress, toEthAddress,
} from '../ethAddress.ts'

describe('ethAddress', () => {
  const isValidAddresses = [
    '0xCd9A7cf9A3b809b18a274cE648f6b59E40De8bd9',
    '0x9b59c7E7B758364c8e24a79ff8f84d9f073156fD',
    '0x0000000000000000000000000000000000000000',
    '0xffffffffffffffffffffffffffffffffffffffff',
    '0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
  ]
  const isInvalidAddresses = [
    '0xCd9A7cf9A3b809b18a274cE648f6b59E40De8bd', // too short
    '0x9b59c7E7B758364c8e24a79ff8f84d9f073156fDD', // too long
    '0xfffffffffffffffffffffffffffffffffffffffg', // invalid chars
    'Cd9A7cf9A3b809b18a274cE648f6b59E40De8bd9', // missing prefix
    '', // empty string
    '0x12345', // way too short
  ]
  const asValidAddresses = [
    ...isValidAddresses,
    'Cd9A7cf9A3b809b18a274cE648f6b59E40De8bd9', // missing prefix
  ]
  const asInvalidAddresses = [
    '0xCd9A7cf9A3b809b18a274cE648f6b59E40De8bd', // too short
    '0x9b59c7E7B758364c8e24a79ff8f84d9f073156fDD', // too long
    '0xfffffffffffffffffffffffffffffffffffffffg', // invalid chars
    '', // empty string
    '0x12345', // way too short
  ]

  const toValidAddresses = [
    ...asValidAddresses,
    'Cd9A7cf9A3b809b18a274cE648f6b59E40De8bd9', // missing prefix
    '0xCd9A7cf9A3b809b18a274cE648f6b59E40De8bd', // too short
  ]

  const toInvalidAddresses = [
    '0x9b59c7E7B758364c8e24a79ff8f84d9f073156fDD', // too long
    '0xfffffffffffffffffffffffffffffffffffffffg', // invalid chars
    '', // empty string
    '0x12345', // way too short
  ]
  describe('EthAddressRegEx', () => {
    it.each(isInvalidAddresses)('should return false for invalid addresses', (address) => {
      expect(EthAddressRegEx.test(address)).toBeFalse()
    })
    it.each(isValidAddresses)('should return true for valid addresses', (address) => {
      expect(EthAddressRegEx.test(address)).toBeTrue()
    })
  })
  describe('asEthAddress', () => {
    it.each(asInvalidAddresses)('should return undefined for invalid addresses', (address) => {
      expect(asEthAddress(address)).toBeUndefined()
    })
    it.each(asValidAddresses)('should return address for valid addresses', (address) => {
      expect(asEthAddress(address)).toBeDefined()
    })
  })
  describe('isEthAddress', () => {
    it.each(isInvalidAddresses)('should return false for invalid addresses', (address) => {
      expect(isEthAddress(address)).toBeFalse()
    })
    it.each(isValidAddresses)('should return true for valid addresses', (address) => {
      expect(isEthAddress(address)).toBeTrue()
    })
  })
  describe.skip('toEthAddress', () => {
    it.each(toInvalidAddresses)('should throw for invalid addresses', (address) => {
      expect(() => toEthAddress(address)).toThrow()
    })
    it.each(toValidAddresses)('should return address for valid addresses', (address) => {
      expect(toEthAddress(address)).toBeDefined()
    })
  })
})
