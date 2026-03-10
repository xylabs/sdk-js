import { isNumber } from '@xylabs/typeof'

import type { Hex, HexConfig } from '../hex.ts'
import { isHex } from '../is.ts'
import { bitsToNibbles } from '../nibble.ts'

/**
 * Normalizes a hex string by stripping an optional 0x prefix, lowercasing, and padding to byte/bit boundaries.
 * @param value - The hex string to normalize (with or without 0x prefix)
 * @param config - Configuration for prefix, byteSize, and bitLength padding
 * @returns The normalized Hex string
 */
export const hexFromHexString = (value: string, config: HexConfig = {}): Hex => {
  const {
    prefix = false, byteSize = 8, bitLength,
  } = config
  const nibbleBoundary = bitsToNibbles(byteSize)
  const unEvened = (value.startsWith('0x') ? value.slice(2) : value).toLowerCase()
  if (isHex(unEvened)) {
    const evenCharacters = unEvened.padStart(Math.ceil(unEvened.length / nibbleBoundary) * nibbleBoundary, '0')
    const padded = isNumber(bitLength) ? evenCharacters.padStart(bitLength / 4, '0') : evenCharacters
    return (prefix ? `0x${padded}` : padded).toLowerCase() as Hex
  } else {
    throw new Error('Received string is not a value hex')
  }
}
