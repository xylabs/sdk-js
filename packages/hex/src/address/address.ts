import type { Brand } from '@xylabs/typeof'
import { z } from 'zod'

import type { Hex } from '../hex/index.ts'
import { HexRegExMinMax } from '../HexRegEx.ts'

export const ZERO_ADDRESS = '0000000000000000000000000000000000000000' as Address
export const ADDRESS_LENGTH = 40 as const

export const AddressRegEx = HexRegExMinMax(ADDRESS_LENGTH / 2, ADDRESS_LENGTH / 2)

export const AddressZod = z.string()
  .regex(AddressRegEx, { message: 'Invalid hex format' }) as unknown as z.ZodType<Brand<Hex, { readonly __address: true }>>

export type Address = z.infer<typeof AddressZod>
