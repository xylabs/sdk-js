import type { Brand } from '@xylabs/typeof'
import { isUndefined } from '@xylabs/typeof'
import z from 'zod'

import type { AssertConfig } from './assert.ts'
import { assertError } from './assert.ts'
import type { Hex } from './hex/index.ts'
import { hexFromHexString, isHex } from './hex/index.ts'
import { HexRegExMinMax } from './HexRegEx.ts'

export const HashRegEx = HexRegExMinMax(32, 32)

export const ZERO_HASH = '0000000000000000000000000000000000000000000000000000000000000000' as Hash

export type HashBitLength = 32 | 64 | 128 | 256 | 512 | 1024 | 2048 | 4096
export const HashBitLength: HashBitLength[] = [32, 64, 128, 256, 512, 1024, 2048, 4096]

export const isHashBitLength = (value: unknown): value is HashBitLength => {
  return typeof value === 'number' && HashBitLength.includes(value as HashBitLength)
}

// using true instead of unique symbol to avoid conflicts with other versions of library
export type Hash = Brand<Hex, { readonly __hash: true }>

export const isHash = (value: unknown, bitLength: HashBitLength = 256): value is Hash => {
  return isHex(value, { bitLength })
}

export const HashZod = z.string()
  .toLowerCase()
  .regex(HashRegEx, { message: 'Invalid hash format' })
  .refine(
    isHash,
  )

export function asHash(value: unknown): Hash | undefined
export function asHash(value: unknown, assert: AssertConfig): Hash
export function asHash(value: unknown, assert?: AssertConfig): Hash | undefined {
  let stringValue: string | undefined = undefined

  switch (typeof value) {
    case 'string': {
      stringValue = hexFromHexString(value)
      break
    }
    default: {
      return isUndefined(assert) ? undefined : assertError(value, assert, `Unsupported type [${typeof value}]`)
    }
  }
  return isHash(stringValue) ? stringValue : assertError(value, assert, `Value is not a Hash [${value}]`)
}
