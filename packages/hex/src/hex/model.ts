import type { Brand } from '@xylabs/typeof'
import z from 'zod'

import { HexRegEx } from '../HexRegEx.ts'

export const HexZod = z.string()
  .regex(HexRegEx, { message: 'Invalid hex format' }) as unknown as z.ZodType<Brand<Lowercase<string>, { readonly __hex: true }>>

export type Hex = z.infer<typeof HexZod>

/** Configuration of validation and output format */
export interface HexConfig {
  bitLength?: number
  byteSize?: number
  prefix?: boolean
}
