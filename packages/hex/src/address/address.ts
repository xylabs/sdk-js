import type { Brand } from '@xylabs/typeof'
import * as z from 'zod'

import { type Hex } from '../hex/index.ts'
import { HexRegExMinMax } from '../HexRegEx.ts'

export const ZERO_ADDRESS = '0000000000000000000000000000000000000000' as Address
export const ADDRESS_LENGTH = 40 as const

export const AddressRegEx = HexRegExMinMax(ADDRESS_LENGTH / 2, ADDRESS_LENGTH / 2)

type BrandedAddress = Brand<Hex, { readonly __address: true }>

export const AddressZod = z.string().regex(AddressRegEx).transform<BrandedAddress>(v => v as BrandedAddress)

export type Address = z.infer<typeof AddressZod>
