import type { Brand } from '@xylabs/typeof'
import z from 'zod'

import type { Hex } from '../hex/index.ts'
import { HexRegExMinMax } from '../HexRegEx.ts'

export const HASH_LENGTH = 32 as const

export const HashRegEx = HexRegExMinMax(HASH_LENGTH, HASH_LENGTH)

export const ZERO_HASH = '0000000000000000000000000000000000000000000000000000000000000000' as Hash

export type HashBitLength = 32 | 64 | 128 | 256 | 512 | 1024 | 2048 | 4096
export const HashBitLength: HashBitLength[] = [32, 64, 128, 256, 512, 1024, 2048, 4096]

export const isHashBitLength = (value: unknown): value is HashBitLength => {
  return typeof value === 'number' && HashBitLength.includes(value as HashBitLength)
}

export type Hash = Brand<Hex, { readonly __hash: true }>

export const HashZod = z.string()
  .regex(HashRegEx, { message: 'Invalid hex format' }).transform(val => val as Hash)
