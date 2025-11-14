import type { Brand } from '@xylabs/typeof'

import { type Hex, UntypedHexZod } from '../hex/index.ts'
import { HexRegExMinMax } from '../HexRegEx.ts'

export const ZERO_ADDRESS = '0000000000000000000000000000000000000000' as Address
export const ADDRESS_LENGTH = 40 as const

export const AddressRegEx = HexRegExMinMax(ADDRESS_LENGTH / 2, ADDRESS_LENGTH / 2)

export type Address = Brand<Hex, { readonly __address: true }>

export const UnTypedAddressZod = UntypedHexZod.regex(AddressRegEx)
export const AddressZod = UnTypedAddressZod.transform<Address>(v => v as Address)
