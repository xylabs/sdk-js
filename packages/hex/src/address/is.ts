import type { HexConfig } from '../hex/index.ts'
import { isHex } from '../hex/index.ts'
import type { Address } from './address.ts'
import { AddressValidationZod } from './AddressValidationZod.ts'

/**
 * Type guard that checks whether a value is a valid 160-bit address.
 * @param value - The value to check
 * @param config - Optional hex config (defaults to 160-bit, no prefix)
 * @returns True if the value is a valid Address
 */
export const isAddress = (value: unknown, config: HexConfig = {}): value is Address => {
  const { bitLength = 160, prefix = false } = config
  return isHex(value, { bitLength, prefix })
}

/** @alpha */
export function isAddressV2(value: unknown): value is Address {
  return AddressValidationZod.safeParse(value).success
}
