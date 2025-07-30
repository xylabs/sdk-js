import z from 'zod'

import type { AssertConfig } from './assert.ts'
import { assertError } from './assert.ts'
import type { Brand } from './Brand.ts'
import type { HexConfig } from './hex/index.ts'
import {
  hexFrom, hexFromHexString, isHex,
} from './hex/index.ts'
import { HexRegExMinMaxMixedCaseWithPrefix } from './HexRegEx.ts'

export const EthAddressRegEx = HexRegExMinMaxMixedCaseWithPrefix(20, 20)

export const EthAddressToStringSchema = z.string().regex(EthAddressRegEx)
export const EthAddressFromStringSchema = z.string().regex(EthAddressRegEx).transform(v => toEthAddress(v))

// using true instead of unique symbol to avoid conflicts with other versions of library
export type EthAddress = Brand<string, { readonly __eth_address: true }>

export const ETH_ZERO_ADDRESS = '0x0000000000000000000000000000000000000000' as EthAddress

export const toEthAddress = (value: string | number | bigint | ArrayBufferLike, config: HexConfig = {}): EthAddress => {
  const { bitLength = 160, prefix = false } = config
  return `0x${hexFrom(value, {
    bitLength, prefix, ...config,
  })}` as EthAddress
}

export const isEthAddress = (value: unknown, config: HexConfig = {}): value is EthAddress => {
  const { bitLength = 160, prefix = true } = config
  return isHex(value, { bitLength, prefix })
}

export const EthAddressZod = z.string()
  .regex(EthAddressRegEx, { message: 'Invalid address format' })
  .refine(
    isEthAddress,
  )

export function asEthAddress(value: unknown): EthAddress | undefined
export function asEthAddress(value: unknown, assert: AssertConfig): EthAddress
export function asEthAddress(value: unknown, assert?: AssertConfig): EthAddress | undefined {
  try {
    let stringValue: string | undefined = undefined

    switch (typeof value) {
      case 'string': {
        stringValue = hexFromHexString(value, { prefix: true })
        break
      }
      default: {
        if (value !== undefined) {
          return assertError(value, assert, `Unsupported type [${typeof value}]`)
        }
      }
    }
    return isEthAddress(stringValue) ? stringValue : assertError(value, assert, `Value is not an EthAddress [${value}]`)
  } catch (ex) {
    const error = ex as Error
    return assertError(undefined, assert, error.message)
  }
}
