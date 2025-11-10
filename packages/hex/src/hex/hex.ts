import type { Brand } from '@xylabs/typeof'
import z from 'zod'

import { HexRegEx } from '../HexRegEx.ts'

export type Hex = Brand<Lowercase<string>, { readonly __hex: true }>

export const HexZod = z.string()
  .regex(HexRegEx, { message: 'Invalid hex format' }).transform(val => val as Hex)

/** Configuration of validation and output format */
export interface HexConfig {
  bitLength?: number
  byteSize?: number
  prefix?: boolean
}
