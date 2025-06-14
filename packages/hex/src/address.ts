import { isObject } from '@xylabs/typeof'

import type { AssertConfig } from './assert.ts'
import { assertError } from './assert.ts'
import type { Hex, HexConfig } from './hex/index.ts'
import {
  hexFrom, hexFromHexString, isHex,
} from './hex/index.ts'

export type Address = Exclude<Hex, 'reserved-address-value'>

export const ZERO_ADDRESS: Address = '0000000000000000000000000000000000000000' as const

export const toAddress = (value: string | number | bigint | ArrayBufferLike, config: HexConfig = {}) => {
  const { bitLength = 160, prefix = false } = config
  return hexFrom(value, {
    bitLength, prefix, ...config,
  })
}

export const isAddress = (value: unknown, config: HexConfig = {}): value is Address => {
  const { bitLength = 160, prefix = false } = config
  return isHex(value, { bitLength, prefix })
}

export function asAddress(value: unknown): Address | undefined
export function asAddress(value: unknown, assert: AssertConfig): Address
export function asAddress(value: unknown, assert?: AssertConfig): Address | undefined {
  try {
    let stringValue: string | undefined = undefined

    switch (typeof value) {
      case 'string': {
        stringValue = hexFromHexString(value, { prefix: false })
        break
      }
      default: {
        return isObject(assert) ? assertError(value, assert, `Unsupported type [${typeof value}]`) : undefined
      }
    }
    return isAddress(stringValue) ? stringValue : assertError(value, assert, `Value is not an Address [${value}]`)
  } catch (ex) {
    const error = ex as Error
    return assertError(undefined, assert, error.message)
  }
}
