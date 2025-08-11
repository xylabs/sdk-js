import z from 'zod'

import { type Address, ADDRESS_LENGTH } from './address.ts'
import { AddressValidationZod } from './AddressValidationZod.ts'

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

export type AddressTransformZodType = z.infer<typeof AddressTransformZod>
