import type { Brand } from '@xylabs/typeof'
import * as z from 'zod'

import { type Hex } from '../hex/index.ts'
import { HexRegExMinMax } from '../HexRegEx.ts'

/** A 160-bit zero address constant. */
export const ZERO_ADDRESS = '0000000000000000000000000000000000000000' as Address
/** The character length of an address hex string (40 hex characters / 20 bytes). */
export const ADDRESS_LENGTH = 40 as const

/** Regular expression matching a 20-byte (40 hex character) address string. */
export const AddressRegEx = HexRegExMinMax(ADDRESS_LENGTH / 2, ADDRESS_LENGTH / 2)

type BrandedAddress = Brand<Hex, { readonly __address: true }>

/** Zod schema that validates and transforms a string into a branded Address type. */
export const AddressZod = z.string().regex(AddressRegEx).transform<BrandedAddress>(v => v as BrandedAddress)

/** A validated 20-byte address string type, inferred from the AddressZod schema. */
export type Address = z.infer<typeof AddressZod>
