import type { AssertConfig } from '@xylabs/error'
import { assertError } from '@xylabs/error'
import type { Brand } from '@xylabs/typeof'
import * as z from 'zod'

import type { HexConfig } from './hex/index.ts'
import {
  hexFrom, hexFromHexString, isHex,
} from './hex/index.ts'
import { HexRegExMinMaxMixedCaseWithPrefix } from './HexRegEx.ts'

/** Regular expression matching a 20-byte Ethereum address with 0x prefix (mixed case). */
export const EthAddressRegEx = HexRegExMinMaxMixedCaseWithPrefix(20, 20)

/** Zod schema that validates a string is a properly formatted Ethereum address. */
export const EthAddressToStringZod = z.string().regex(EthAddressRegEx)

/** @deprecated use EthAddressToStringZod */
export const EthAddressToStringSchema = EthAddressToStringZod

/** Zod schema that validates and transforms a string into an EthAddress type. */
export const EthAddressFromStringZod = z.string().regex(EthAddressRegEx).transform(v => toEthAddress(v))

/** @deprecated use EthAddressFromStringZod */
export const EthAddressFromStringSchema = EthAddressFromStringZod

/** Branded type representing a validated Ethereum address with 0x prefix. */
// using true instead of unique symbol to avoid conflicts with other versions of library
export type EthAddress = Brand<string, { readonly __eth_address: true }>

/** The zero Ethereum address constant (0x followed by 40 zero characters). */
export const ETH_ZERO_ADDRESS = '0x0000000000000000000000000000000000000000' as EthAddress

/**
 * Converts a value to a 0x-prefixed Ethereum address string.
 * @param value - The value to convert (string, number, bigint, or ArrayBuffer)
 * @param config - Optional hex config (defaults to 160-bit, no inner prefix)
 * @returns The value as an EthAddress
 */
export const toEthAddress = (value: string | number | bigint | ArrayBufferLike, config: HexConfig = {}): EthAddress => {
  const { bitLength = 160, prefix = false } = config
  return `0x${hexFrom(value, {
    bitLength, prefix, ...config,
  })}` as EthAddress
}

/**
 * Type guard that checks whether a value is a valid 0x-prefixed Ethereum address.
 * @param value - The value to check
 * @param config - Optional hex config (defaults to 160-bit with prefix)
 * @returns True if the value is a valid EthAddress
 */
export const isEthAddress = (value: unknown, config: HexConfig = {}): value is EthAddress => {
  const { bitLength = 160, prefix = true } = config
  const loweredValue = typeof value === 'string' ? value.toLowerCase() : value
  return isHex(loweredValue, { bitLength, prefix })
}

/** Zod schema that validates a string as a properly formatted Ethereum address using regex and type guard. */
export const EthAddressZod = z.string()
  .regex(EthAddressRegEx, { message: 'Invalid address format' })
  .refine(
    isEthAddress,
  )

/**
 * Attempts to coerce a value into an EthAddress, returning undefined or throwing based on the assert config.
 * @param value - The value to coerce (must be a string)
 * @param assert - If provided, throws on failure instead of returning undefined
 * @returns The value as EthAddress, or undefined if coercion fails and assert is not set
 */
export function asEthAddress(value: unknown): EthAddress | undefined
export function asEthAddress(value: unknown, assert: AssertConfig): EthAddress
export function asEthAddress(value: unknown, assert?: AssertConfig): EthAddress | undefined {
  try {
    let stringValue: string | undefined = undefined

    switch (typeof value) {
      case 'string': {
        stringValue = hexFromHexString(value, { prefix: true, byteSize: 4 })
        break
      }
      default: {
        if (value !== undefined) {
          return assertError(value, assert, `Unsupported type [${typeof value}]`)
        }
      }
    }
    return isEthAddress(stringValue) ? stringValue : assertError(value, assert, `Value is not an EthAddress [${value}]`)
  } catch (ex) {
    const error = ex as Error
    return assertError(undefined, assert, error.message)
  }
}
