import { isHex } from '../is.ts'
import type { Hex, HexConfig } from '../model.ts'
import { bitsToNibbles } from '../nibble.ts'

export const hexFromHexString = (value: string, config: HexConfig = {}): Hex => {
  const {
    prefix = false, byteSize = 8, bitLength,
  } = config
  const nibbleBoundary = bitsToNibbles(byteSize)
  const unEvened = (value.startsWith('0x') ? value.slice(2) : value).toLowerCase()
  if (isHex(unEvened)) {
    const evenCharacters = unEvened.padStart(unEvened.length + (unEvened.length % nibbleBoundary), '0')
    const padded = bitLength ? evenCharacters.padStart(bitLength / 4, '0') : evenCharacters
    return (prefix ? `0x${padded}` : padded).toLowerCase() as Hex
  } else {
    throw new Error('Received string is not a value hex')
  }
}
