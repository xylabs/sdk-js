import { AssertConfig, assertError } from './assert'
import { bitsToNibbles, HexConfig, hexFrom, hexFromHexString, isHex } from './hex'

export const addressRegex = /0x[\da-f]+/i

export type Address = string

export const toAddress = (value: unknown, config: HexConfig = {}) => {
  const { bitLength = 160, prefix = true } = config
  return hexFrom(value, { bitLength, prefix, ...config })
}

export const isAddress = (value: unknown, bitLength = 160): value is Address => {
  //Is it a string?
  if (typeof value !== 'string') return false

  //Does it only has hex values and leading 0x?
  if (!addressRegex.test(value)) return false

  const valueHex = value.slice(2)

  //If a bitLength specified, does it conform?
  if (bitLength !== undefined && valueHex.length !== bitsToNibbles(bitLength)) return false

  return isHex(valueHex, bitLength)
}

export function asAddress(value: unknown): Address | undefined
export function asAddress(value: unknown, assert: AssertConfig): Address
export function asAddress(value: unknown, assert?: AssertConfig): Address | undefined {
  let stringValue: string | undefined = undefined

  switch (typeof value) {
    case 'string': {
      stringValue = hexFromHexString(value, { prefix: true })
      break
    }
    default: {
      return assert ? assertError(value, assert, `Unsupported type [${typeof value}]`) : undefined
    }
  }
  return isAddress(stringValue) ? stringValue : assertError(value, assert, `Value is not an Address [${value}]`)
}
