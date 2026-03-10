import type { AssertConfig } from '@xylabs/error'
import { assertError } from '@xylabs/error'

import { hexFromHexString } from './from/index.ts'
import type { Hex } from './hex.ts'
import { isHex } from './is.ts'

/**
 * Attempts to coerce a value into a Hex type, returning undefined or throwing based on the assert config.
 * @param value - The value to coerce (must be a string)
 * @param assert - If provided, throws on failure instead of returning undefined
 * @returns The value as Hex, or undefined if coercion fails and assert is not set
 */
export function asHex(value: unknown): Hex | undefined
export function asHex(value: unknown, assert: AssertConfig): Hex
export function asHex(value: unknown, assert?: AssertConfig): Hex | undefined {
  let stringValue: string | undefined = undefined

  switch (typeof value) {
    case 'string': {
      stringValue = hexFromHexString(value)
      break
    }
    default: {
      return assertError(value, assert, `Unsupported type [${typeof value}]`)
    }
  }

  return isHex(stringValue) ? stringValue : assertError(value, assert, `Value is not Hex [${value}]`)
}
