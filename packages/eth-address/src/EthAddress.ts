import { assertEx } from '@xylabs/assert'
import { BigNumber } from '@xylabs/bignumber'
import keccak256 from 'keccak256'

import { ellipsize } from './ellipsize'
import { padHex } from './padHex'

export const isEthAddress = (obj: { type: string }) => obj?.type === EthAddress.type

export class EthAddress {
  static readonly type = 'EthAddress'

  type = EthAddress.type

  private address: BigNumber

  private constructor(address: BigNumber) {
    this.address = address
  }

  static fromString(value?: string, base = 16) {
    if (value) {
      const bn = new BigNumber(value.startsWith('0x') ? value.substring(2) : value, base)
      return new EthAddress(bn)
    }
  }

  static parse(value: unknown, base?: number) {
    if (typeof value === 'string') {
      return this.fromString(value, base)
    }
  }

  static validate(address: string) {
    return /^(0x)?[0-9a-f]{40}$/i.test(address)
  }

  equals(address?: EthAddress | string | null): boolean {
    if (address) {
      let inAddress: EthAddress
      if (typeof address === 'string') {
        inAddress = assertEx(EthAddress.fromString(address), 'Bad Address')
      } else {
        inAddress = address
      }
      return this.address.eq(inAddress.address)
    }
    return false
  }

  toBigNumber() {
    return this.address
  }

  toHex() {
    return padHex(this.address.toString(16), 20)
  }

  toJSON(): string {
    return `0x${this.toHex()}`
  }

  toLowerCaseString() {
    return this.toString().toLowerCase()
  }

  toShortString(length = 2) {
    return `0x${ellipsize(this.toHex(), length)}`
  }

  toString(checksum?: boolean, chainId?: string) {
    if (checksum) {
      const strippedAddress = this.toHex()
      const keccakHash = keccak256(chainId !== undefined ? `${chainId}0x${strippedAddress}` : strippedAddress).toString('hex')
      let checksumAddress = '0x'

      for (let i = 0; i < strippedAddress.length; i++) {
        checksumAddress += parseInt(keccakHash[i], 16) >= 8 ? strippedAddress[i].toUpperCase() : strippedAddress[i]
      }

      return checksumAddress
    }
    return `0x${this.toHex()}`
  }

  validate() {
    return EthAddress.validate(this.toString())
  }
}
