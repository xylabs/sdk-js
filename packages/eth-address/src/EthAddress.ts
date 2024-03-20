import { assertEx } from '@xylabs/assert'
import { getAddress } from 'ethers'

import { ellipsize } from './ellipsize'
import { padHex } from './padHex'

export const isEthAddress = (obj: { type: string }) => obj?.type === EthAddress.type

export class EthAddress {
  static readonly type = 'EthAddress'

  type = EthAddress.type

  private address: bigint

  private constructor(address: bigint) {
    this.address = address
  }

  static fromString(value?: string, base = 16) {
    if (value) {
      const bi = base === 16 ? BigInt(value.startsWith('0x') ? value : `0x${value}`) : BigInt(value)
      return new EthAddress(bi)
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

  equals(address?: EthAddress | string | null): boolean {
    if (address) {
      const inAddress = typeof address === 'string' ? assertEx(EthAddress.fromString(address), () => 'Bad Address') : address
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
    return EthAddress.validate(this.toString())
  }
}
