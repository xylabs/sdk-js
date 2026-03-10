import type { AssertConfig } from '@xylabs/error'
import { assertError } from '@xylabs/error'
import { isUndefined } from '@xylabs/typeof'

import { hexFromHexString } from '../hex/index.ts'
import { type Hash } from './hash.ts'
import { isHash } from './is.ts'

/**
 * Attempts to coerce a value into a Hash type, returning undefined or throwing based on the assert config.
 * @param value - The value to coerce (must be a string)
 * @param assert - If provided, throws on failure instead of returning undefined
 * @returns The value as Hash, or undefined if coercion fails and assert is not set
 */
export function asHash(value: unknown): Hash | undefined
export function asHash(value: unknown, assert: AssertConfig): Hash
export function asHash(value: unknown, assert?: AssertConfig): Hash | undefined {
  let stringValue: string | undefined = undefined

  switch (typeof value) {
    case 'string': {
      stringValue = hexFromHexString(value)
      break
    }
    default: {
      return isUndefined(assert) ? undefined : assertError(value, assert, `Unsupported type [${typeof value}]`)
    }
  }
  return isHash(stringValue) ? stringValue : assertError(value, assert, `Value is not a Hash [${value}]`)
}
