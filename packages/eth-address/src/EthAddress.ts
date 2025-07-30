import { assertEx } from '@xylabs/assert'
import { getAddress } from 'ethers'

import { ellipsize } from './ellipsize.ts'
import { padHex } from './padHex.ts'

export const isEthAddressWrapper = (obj: { type: string }) => obj instanceof EthAddressWrapper

export class EthAddressWrapper {
  private address: bigint

  protected constructor(address: bigint) {
    this.address = address
  }

  static fromString(value?: string, base = 16) {
    if (value !== undefined) {
      const bi = base === 16 ? BigInt(value.startsWith('0x') ? value : `0x${value}`) : BigInt(value)
      return new EthAddressWrapper(bi)
    }
  }

  static parse(value: unknown, base?: number) {
    if (typeof value === 'string') {
      return this.fromString(value, base)
    }
  }

  static validate(address: string) {
    return /^(0x)?[\da-f]{40}$/i.test(address)
  }

  equals(address?: EthAddressWrapper | string | null): boolean {
    if (address !== null && address !== undefined) {
      const inAddress = typeof address === 'string' ? assertEx(EthAddressWrapper.fromString(address), () => 'Bad Address') : address
      return this.address === inAddress.address
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
      return getAddress(chainId === undefined ? `0x${strippedAddress}` : `${chainId}0x${strippedAddress}`)
    }
    return `0x${this.toHex()}`
  }

  validate() {
    return EthAddressWrapper.validate(this.toString())
  }
}
