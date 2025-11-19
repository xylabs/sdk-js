import type { AssertConfig } from '@xylabs/error'
import { assertError } from '@xylabs/error'
import { isUndefined } from '@xylabs/typeof'

import { hexFromHexString } from '../hex/index.ts'
import { type Hash } from './hash.ts'
import { isHash } from './is.ts'

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
