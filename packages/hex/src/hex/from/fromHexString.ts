import { isDefined, isNumber } from '@xylabs/typeof'

import type { Hex, HexConfig } from '../hex.ts'
import { isHex } from '../is.ts'
import { bitsToNibbles } from '../nibble.ts'

export const hexFromHexString = (value: string, config: HexConfig = {}): Hex => {
  const {
    prefix = false, byteSize = 8, bitLength,
  } = config
  const bitLengthNibbles = isNumber(bitLength) ? bitsToNibbles(bitLength) : undefined
  const nibbleBoundary = bitsToNibbles(byteSize)
  const unEvened = (value.startsWith('0x') ? value.slice(2) : value).toLowerCase()
  if (isHex(unEvened)) {
    const evenCharacters = bitLengthNibbles === undefined
      ? unEvened.padStart(unEvened.length + (unEvened.length % nibbleBoundary), '0')
      : unEvened
    const padded = isDefined(bitLengthNibbles) ? evenCharacters.padStart(bitLengthNibbles, '0') : evenCharacters
    return (prefix ? `0x${padded}` : padded).toLowerCase() as Hex
  } else {
    throw new Error('Received string is not a value hex')
  }
}
