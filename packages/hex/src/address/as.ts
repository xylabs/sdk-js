import { isObject } from '@xylabs/typeof'

import type { AssertConfig } from '../assert.ts'
import { assertError } from '../assert.ts'
import { hexFromHexString } from '../hex/index.ts'
import type { Address } from './address.ts'
import { AddressValidationZod } from './AddressValidationZod.ts'
import { isAddress } from './is.ts'

export function asAddress(value: unknown): Address | undefined
export function asAddress(value: unknown, assert: AssertConfig): Address
export function asAddress(value: unknown, assert?: AssertConfig): Address | undefined {
  try {
    let stringValue: string | undefined = undefined

    switch (typeof value) {
      case 'string': {
        stringValue = hexFromHexString(value, { prefix: false })
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
export function asAddressV2(value: unknown, assert: boolean = false): Address | undefined {
  return assert
    ? AddressValidationZod.parse(value)
    : AddressValidationZod.safeParse(value).data
}
