import { isObject } from '@xylabs/typeof'
import z from 'zod'

import type { AssertConfig } from '../assert.ts'
import { assertError } from '../assert.ts'
import type { HexConfig } from '../hex/index.ts'
import {
  hexFrom, hexFromHexString, isHex,
} from '../hex/index.ts'
import { HexRegExMinMax } from '../HexRegEx.ts'
import type { Address } from './AddressNamespace.ts'

export const AddressRegEx = HexRegExMinMax(20, 20)

export const AddressToStringZod = z.string().regex(AddressRegEx)

/** @deprecated use AddressToStringZod */
export const AddressToStringSchema = AddressToStringZod

export const AddressFromStringZod = z.string().toLowerCase().regex(AddressRegEx).transform(v => toAddress(v))

/** @deprecated use AddressFromStringZod */
export const AddressFromStringSchema = AddressFromStringZod

export const ZERO_ADDRESS = '0000000000000000000000000000000000000000' as Address
export const ADDRESS_LENGTH = 40 as const

export const toAddress = (value: string | number | bigint | ArrayBufferLike, config: HexConfig = {}): Address => {
  const { bitLength = 160, prefix = false } = config
  return hexFrom(value, {
    bitLength, prefix, ...config,
  }) as Address
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
