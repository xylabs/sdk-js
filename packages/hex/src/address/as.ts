import type { AssertConfig } from '@xylabs/error'
import { assertError } from '@xylabs/error'
import { isObject } from '@xylabs/typeof'

import { hexFromHexString } from '../hex/index.ts'
import type { Address } from './address.ts'
import { AddressValidationZod } from './AddressValidationZod.ts'
import { isAddress } from './is.ts'

/**
 * Attempts to coerce a value into an Address type, returning undefined or throwing based on the assert config.
 * @param value - The value to coerce (must be a string)
 * @param assert - If provided, throws on failure instead of returning undefined
 * @returns The value as Address, or undefined if coercion fails and assert is not set
 */
export function asAddress(value?: unknown): Address | undefined
export function asAddress(value: unknown, assert: AssertConfig): Address
export function asAddress(value?: unknown, assert?: AssertConfig): Address | undefined {
  try {
    let stringValue: string | undefined = undefined

    switch (typeof value) {
      case 'string': {
        stringValue = hexFromHexString(value, { prefix: false, byteSize: 4 })
        break
      }
      default: {
        return isObject(assert) ? assertError(value, assert, `Unsupported type [${typeof value}]`) : undefined
      }
    }
    return isAddress(stringValue) ? stringValue : assertError(value, assert, `Value is not an Address [${value}]`)
  } catch (ex) {
    const error = ex as Error
    return assertError(undefined, assert, error.message)
  }
}

/** @alpha */
export function asAddressV2(value?: unknown, assert: boolean = false): Address | undefined {
  return assert
    ? AddressValidationZod.parse(value)
    : AddressValidationZod.safeParse(value).data
}
