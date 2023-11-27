import { AssertConfig, assertError } from './assert'
import { Hex, hexFromHexString, isHex } from './hex'

export type HashBitLength = 32 | 64 | 128 | 256 | 512 | 1024 | 2048 | 4096
export const HashBitLength: HashBitLength[] = [32, 64, 128, 256, 512, 1024, 2048, 4096]

export const isHashBitLength = (value: unknown): value is HashBitLength => {
  return typeof value === 'number' && HashBitLength.includes(value as HashBitLength)
}

export type Hash = Hex
export const isHash = (value: unknown, bitLength: HashBitLength = 256): value is Hash => {
  return isHex(value, bitLength)
}

export function asHash(value: unknown): Hash | undefined
export function asHash(value: unknown, assert: AssertConfig): Hash
export function asHash(value: unknown, assert?: AssertConfig): Hash | undefined {
  let stringValue: string | undefined = undefined

  switch (typeof value) {
    case 'string':
      stringValue = hexFromHexString(value)
      break
    default:
      return assert ? assertError(value, assert, `Unsupported type [${typeof value}]`) : undefined
  }
  return isHash(stringValue) ? stringValue : assertError(value, assert, `Value is not a Hash [${value}]`)
}
