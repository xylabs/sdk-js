import { AssertConfig, assertError } from '../assert.js'
import { hexFromHexString } from './from/index.js'
import { isHex } from './is.js'
import { Hex } from './model.js'

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
