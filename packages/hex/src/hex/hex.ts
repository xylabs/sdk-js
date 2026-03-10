import type { Brand } from '@xylabs/typeof'
import * as z from 'zod'

import { HexRegEx } from '../HexRegEx.ts'

/** Branded type representing a validated lowercase hex string. */
export type BrandedHex = Brand<Lowercase<string>, { readonly __hex: true }>

/** Zod schema that validates and transforms a string into a branded Hex type. */
export const HexZod = z.string().regex(HexRegEx, { message: 'Invalid hex format' }).transform(val => val as BrandedHex)

/** Configuration of validation and output format */
export interface HexConfig {
  bitLength?: number
  byteSize?: number
  prefix?: boolean
}

/** A validated hex string type, inferred from the HexZod schema. */
export type Hex = z.infer<typeof HexZod>
