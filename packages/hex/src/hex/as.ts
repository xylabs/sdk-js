import type { AssertConfig } from '../assert.ts'
import { assertError } from '../assert.ts'
import { hexFromHexString } from './from/index.ts'
import type { Hex } from './hex.ts'
import { isHex } from './is.ts'

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
