import z from 'zod'

import { HexZod } from '../hex/index.ts'
import type { Address } from './address.ts'
import { ADDRESS_LENGTH } from './address.ts'

export const AddressZodValidation = z.string()
  .refine(x => HexZod.safeParse(x))
  .refine(x => x.length === ADDRESS_LENGTH, { error: e => new Error(`Address must have 40 characters [${e.input}]`) })
  .transform(v => v as Address)

export type AddressZodValidationType = z.infer<typeof AddressZodValidation>
