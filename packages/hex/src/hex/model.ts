import z from 'zod'

import { HexRegExMinMax } from '../HexRegExMinMax.ts'
import { isHex } from './is.ts'

// we use Exclude to intentionally make the type not equal to string
export type Hex = Lowercase<string> & { readonly __hex: unique symbol }

export const HexRegEx = HexRegExMinMax(1, Number.MAX_SAFE_INTEGER)

export const HexZod = z.string()
  .toLowerCase()
  .regex(HexRegEx, { message: 'Invalid hex format' })
  .refine(
    isHex,
  )

/** Configuration of validation and output format */
export interface HexConfig {
  bitLength?: number
  byteSize?: number
  prefix?: boolean
}
