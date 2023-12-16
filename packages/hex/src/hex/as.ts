import { AssertConfig, assertError } from '../assert'
import { hexFromHexString } from './from'
import { isHex } from './is'
import { Hex } from './model'

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
