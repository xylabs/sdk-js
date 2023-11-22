import { AssertConfig, assertError } from './assert'
import { asHex, bitsToOctets, isHex } from './hex'

export const addressRegex = /0x[0-9a-f]+/i

export type Address = string

export const isAddress = (value: unknown, bitLength = 160): value is Address => {
  //Is it a string?
  if (typeof value !== 'string') return false

  //Does it only has hex values and leading 0x?
  if (!addressRegex.test(value)) return false

  const valueHex = value.substring(2)

  //If a bitLength specified, does it conform?
  if (bitLength !== undefined && valueHex.length !== bitsToOctets(bitLength)) return false

  return isHex(valueHex, bitLength)
}

export function asAddress(value: unknown): Address | undefined
export function asAddress(value: unknown, assert: AssertConfig): Address
export function asAddress(value: unknown, bitLength: number): Address | undefined
export function asAddress(value: unknown, bitLength: number, assert: AssertConfig): Address
export function asAddress(value: unknown, assertOrBitLength?: AssertConfig | number, assertOnly?: AssertConfig): Address | undefined {
  const bitLength = typeof assertOrBitLength === 'number' ? assertOrBitLength : 160
  const assert = typeof assertOrBitLength !== 'number' ? assertOrBitLength : assertOnly

  const result = `0x${asHex(value, bitLength, assert)}`
  return isAddress(result, bitLength) ? result : assertError(value, assert, 'Resulting value is not an Address')
}
