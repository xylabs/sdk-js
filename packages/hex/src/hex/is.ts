import { Hex } from './model'
import { bitsToNibbles } from './nibble'
import { hexRegex } from './regex'

export const isHex = (value: unknown, bitLength?: number): value is Hex => {
  //Is it a string?
  if (typeof value !== 'string') return false

  //If a bitLength specified, does it conform?
  if (bitLength !== undefined && value.length !== bitsToNibbles(bitLength)) return false

  //Does it only has hex values?
  return hexRegex.test(value)
}
