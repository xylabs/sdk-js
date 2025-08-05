import z from 'zod'

import type { Address } from './address.ts'
import { AddressZodValidation } from './AddressZodValidation.ts'

export const AddressZodTransform = z.union([z.string(), z.bigint()])
  .transform((value) => {
    if (typeof value === 'bigint') {
      return value.toString(16).padStart(40, '0')
    }
    if (value.startsWith('0x')) {
      return value.slice(2)
    }
    return value
  })
  .refine(x => AddressZodValidation.safeParse(x).data)
  .transform(x => x as Address)

export type AddressZodTransformType = z.infer<typeof AddressZodTransform>
