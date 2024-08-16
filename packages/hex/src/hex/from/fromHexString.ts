import { isHex } from '../is.ts'
import type { Hex, HexConfig } from '../model.ts'
import { bitsToNibbles } from '../nibble.ts'

export const hexFromHexString = (value: string, config: HexConfig = {}): Hex => {
  const { prefix = false, byteSize = 8 } = config
  const nibbleBoundary = bitsToNibbles(byteSize)
  const unPadded = (value.startsWith('0x') ? value.slice(2) : value).toLowerCase()
  if (isHex(unPadded)) {
    const padded = unPadded.padStart(unPadded.length + (unPadded.length % nibbleBoundary), '0')
    return (prefix ? `0x${padded}` : padded).toLowerCase() as Hex
  } else {
    throw new Error('Received string is not a value hex')
  }
}
