import z from 'zod'

import type { Brand } from '../Brand.ts'
import { HexRegEx } from '../HexRegEx.ts'

// using true instead of unique symbol to avoid conflicts with other versions of library
export type Hex = Brand<Lowercase<string>, { readonly __hex: true }>

export const HexZod = z.string()
  .regex(HexRegEx, { message: 'Invalid hex format' }).transform(x => x as Hex)

/** Configuration of validation and output format */
export interface HexConfig {
  bitLength?: number
  byteSize?: number
  prefix?: boolean
}

export type HexZodType = z.infer<typeof HexZod>
