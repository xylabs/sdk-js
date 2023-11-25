import { AssertConfig, assertError } from './assert'
import { asHex, Hex, isHex, octetsToBits } from './hex'

export type HashBitLength = 32 | 64 | 128 | 256 | 512 | 1024 | 2048 | 4096
export const HashBitLength: HashBitLength[] = [32, 64, 128, 256, 512, 1024, 2048, 4096]

export const isHashBitLength = (value: unknown): value is HashBitLength => {
  return typeof value === 'number' && HashBitLength.includes(value as HashBitLength)
}

export type Hash = Hex
export const isHash = (value: unknown, bitLength: HashBitLength = 256): value is Hash => {
  if (!isHex(value, bitLength)) return false

  const hex = asHex(value, bitLength)
  if (!hex) return false

  if (!isHashBitLength(octetsToBits(hex.length))) return false

  return true
}

export function asHash(value: unknown): Hash | undefined
export function asHash(value: unknown, assert: AssertConfig): Hash
export function asHash(value: unknown, bitLength?: HashBitLength): Hash | undefined
export function asHash(value: unknown, bitLength: HashBitLength | undefined, assert: AssertConfig): Hash
export function asHash(value: unknown, assertOrBitLength?: AssertConfig | HashBitLength, assertOnly?: AssertConfig): Hash | undefined {
  const bitLength: HashBitLength = typeof assertOrBitLength === 'number' ? assertOrBitLength : 256
  const assert = typeof assertOrBitLength !== 'number' ? assertOrBitLength : assertOnly

  const result = asHex(value, bitLength, assert)
  return isHash(result, bitLength) ? result : assertError(value, assert, 'Resulting value is not a Hash')
}
