import { assertEx } from './assertEx'
import { BigNumber } from './BigNumber'
import { ellipsize } from './ellipsize'
import { padHex } from './padHex'

export const isEthAddress = (obj: { type: string }) => obj?.type === EthAddress.type

export class EthAddress {
  public type = EthAddress.type

  private address: BigNumber

  static type = 'EthAddress'

  private constructor(address: BigNumber) {
    this.address = address
  }

  public equals(address?: EthAddress | string | null): boolean {
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

  public toBigNumber() {
    return this.address
  }

  public toString() {
    return `0x${this.toHex()}`
  }

  public toLowerCaseString() {
    return this.toString().toLowerCase()
  }

  public toJSON(): string {
    return `0x${this.toHex()}`
  }

  public toHex() {
    return padHex(this.address.toString(16), 20)
  }

  public toShortString(length = 2) {
    return `0x${ellipsize(this.toHex(), length)}`
  }
}
