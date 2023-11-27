import { isArrayBuffer } from '@xylabs/arraybuffer'

import { AssertConfig, assertError } from './assert'

export const hexRegex = /^[0-9a-f]+$/i
export const hexRegexWithPrefix = /0x[0-9a-f]+$/i

export type Hex = string

export const hexFrom = (buffer: ArrayBuffer) => {
  return [...new Uint8Array(buffer)].map((x) => x.toString(16).padStart(2, '0')).join('')
}

//determine the number of octets for a given number of bits
export const bitsToOctets = (value: number): number => {
  const octets = value >> 2
  if (value !== octets << 2) throw Error('Bits for octets must multiple of 8')
  return octets
}

//determine the number of octets for a given number of bits
export const octetsToBits = (value: number): number => {
  return value << 2
}

//are the number of bit a round octet (factor of 8)?
export const isRoundOctet = (value: number) => {
  return (value >> 2) << 2 === value
}

export const isHex = (value: unknown, bitLength?: number): value is Hex => {
  //Is it a string?
  if (typeof value !== 'string') return false

  //If a bitLength specified, does it conform?
  if (bitLength !== undefined && value.length !== bitsToOctets(bitLength)) return false

  //Does it only has hex values?
  return hexRegex.test(value)
}

export const toHex = (buffer: ArrayBuffer) => {
  return [...new Uint8Array(buffer)].map((x) => x.toString(16).padStart(2, '0')).join('')
}

export function asHex(value: unknown): Hex | undefined
export function asHex(value: unknown, bitLength?: number): Hex | undefined
export function asHex(value: unknown, assert: AssertConfig): Hex
export function asHex(value: unknown, bitLength: number | undefined, assert?: AssertConfig): Hex
export function asHex(value: unknown, assertOrBitLength?: AssertConfig | number, assertOnly?: AssertConfig): Hex | undefined {
  const bitLength = typeof assertOrBitLength === 'number' ? assertOrBitLength : undefined
  const assert = typeof assertOrBitLength !== 'number' ? assertOrBitLength : assertOnly

  let stringValue: string | undefined = undefined

  switch (typeof value) {
    case 'string':
      //remove the leading 0x if it is there
      stringValue = hexRegexWithPrefix.test(value) ? value.substring(2) : value
      break
    case 'number':
      if (value === Math.floor(value)) {
        stringValue = value.toString(16)
      } else {
        return assertError(value, assert, 'Numbers must be whole')
      }
      break
    case 'bigint':
      stringValue = value.toString(16)
      break
    case 'object':
      if (isArrayBuffer(value)) {
        stringValue = hexFrom(value)
      } else {
        return assertError(value, assert, 'Unsupported object')
      }
      break
    default:
      return assertError(value, assert, `Unsupported type [${typeof value}]`)
  }

  //make it conform to the bit length if shorter
  if (stringValue && bitLength) {
    stringValue = stringValue.padStart(bitsToOctets(bitLength), '0')
  }

  return isHex(stringValue, bitLength) ? stringValue.toLowerCase() : assertError(value, assert, 'Unable to convert to Hash')
}
