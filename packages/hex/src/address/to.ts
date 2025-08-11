import type { HexConfig } from '../hex/index.ts'
import { hexFrom } from '../hex/index.ts'
import type { Address } from './address.ts'
import { AddressTransformZod } from './AddressTransformZod.ts'

export const toAddress = (value: string | number | bigint | ArrayBufferLike, config: HexConfig = {}): Address => {
  const { bitLength = 160, prefix = false } = config
  return hexFrom(value, {
    bitLength, prefix, ...config,
  }) as unknown as Address
}

/** @alpha */
export function toAddressV2(value: unknown, assert: boolean = false): Address | undefined {
  return assert
    ? AddressTransformZod.parse(value)
    : AddressTransformZod.safeParse(value).data
}
