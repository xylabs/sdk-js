import z from 'zod'

import { AddressRegEx } from './address.ts'
import { toAddress } from './to.ts'

/** @deprecated use AddressZod */
export const AddressToStringZod = z.string().regex(AddressRegEx)

/** @deprecated use AddressZod */
// eslint-disable-next-line sonarjs/deprecation
export const AddressToStringSchema = AddressToStringZod

/** @deprecated use AddressZod */
export const AddressFromStringZod = z.string().toLowerCase().regex(AddressRegEx).transform(v => toAddress(v))

/** @deprecated use AddressZod */
// eslint-disable-next-line sonarjs/deprecation
export const AddressFromStringSchema = AddressFromStringZod
