import type { HexConfig } from '../hex/index.ts'
import { isHex } from '../hex/index.ts'
import type { Address } from './address.ts'
import { AddressValidationZod } from './AddressValidationZod.ts'

export const isAddress = (value: unknown, config: HexConfig = {}): value is Address => {
  const { bitLength = 160, prefix = false } = config
  return isHex(value, { bitLength, prefix })
}

/** @alpha */
export function isAddressV2(value: unknown): value is Address {
  return AddressValidationZod.safeParse(value).success
}
