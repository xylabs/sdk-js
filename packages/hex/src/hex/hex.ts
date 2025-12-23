import type { Brand } from '@xylabs/typeof'
import * as z from 'zod'

import { HexRegEx } from '../HexRegEx.ts'

export type BrandedHex = Brand<Lowercase<string>, { readonly __hex: true }>

export const HexZod = z.string().regex(HexRegEx, { message: 'Invalid hex format' }).transform(val => val as BrandedHex)

/** Configuration of validation and output format */
export interface HexConfig {
  bitLength?: number
  byteSize?: number
  prefix?: boolean
}

export type Hex = z.infer<typeof HexZod>
