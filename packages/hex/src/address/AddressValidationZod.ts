import * as z from 'zod'

import { HexZod } from '../hex/index.ts'
import type { Address } from './address.ts'
import { ADDRESS_LENGTH } from './address.ts'

/** Zod schema that validates a string is a properly formatted 40-character hex address. */
export const AddressValidationZod = z.string()
  .refine(x => HexZod.safeParse(x))
  .refine(x => x.length === ADDRESS_LENGTH, { error: e => new Error(`Address must have 40 characters [${e.input}]`) })
  .transform(v => v as Address)

/** The output type of AddressValidationZod after parsing. */
export type AddressValidationZodType = z.infer<typeof AddressValidationZod>
