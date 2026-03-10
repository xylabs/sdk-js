import type { Brand } from '@xylabs/typeof'
import * as z from 'zod'

import type { Hex } from '../hex/index.ts'
import { HexRegExMinMax } from '../HexRegEx.ts'

/** The byte length of a standard hash (32 bytes / 256 bits). */
export const HASH_LENGTH = 32 as const

/** Regular expression matching a 32-byte (64 hex character) hash string. */
export const HashRegEx = HexRegExMinMax(HASH_LENGTH, HASH_LENGTH)

/** A 256-bit zero hash constant. */
export const ZERO_HASH = '0000000000000000000000000000000000000000000000000000000000000000' as Hash

/** Valid bit lengths for hash values. */
export type HashBitLength = 32 | 64 | 128 | 256 | 512 | 1024 | 2048 | 4096
/** Array of all valid hash bit lengths for runtime validation. */
export const HashBitLength: HashBitLength[] = [32, 64, 128, 256, 512, 1024, 2048, 4096]

/**
 * Type guard that checks whether a value is a valid hash bit length.
 * @param value - The value to check
 * @returns True if the value is one of the supported HashBitLength values
 */
export const isHashBitLength = (value: unknown): value is HashBitLength => {
  return typeof value === 'number' && HashBitLength.includes(value as HashBitLength)
}

/** Branded type representing a validated hash hex string. */
export type BrandedHash = Brand<Hex, { readonly __hash: true }>

/** Zod schema that validates and transforms a string into a branded Hash type. */
export const HashZod = z.string()
  .regex(HashRegEx, { message: 'Invalid hex format' }).transform(val => val as BrandedHash)

/** A validated hash string type, inferred from the HashZod schema. */
export type Hash = z.infer<typeof HashZod>
