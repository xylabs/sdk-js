import * as z from 'zod'

import { type Address, ADDRESS_LENGTH } from './address.ts'
import { AddressValidationZod } from './AddressValidationZod.ts'

/** Zod schema that accepts a string, bigint, or number and transforms it into a validated Address. */
export const AddressTransformZod = z.union([z.string(), z.bigint(), z.number()])
  .transform((value) => {
    switch (typeof value) {
      case 'bigint': {
        return value.toString(16).padStart(ADDRESS_LENGTH, '0')
      }
      case 'string': {
        if (value.startsWith('0x')) {
          return value.slice(2)
        }
        return value
      }
      case 'number': {
        return BigInt(value).toString(16).padStart(ADDRESS_LENGTH, '0')
      }
    }
  })
  .refine(x => AddressValidationZod.safeParse(x).data)
  .transform(x => x as Address)

/** The output type of AddressTransformZod after parsing and transformation. */
export type AddressTransformZodType = z.infer<typeof AddressTransformZod>
