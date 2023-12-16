import { isHex } from '../is'
import { HexConfig } from '../model'
import { bitsToNibbles } from '../nibble'

export const hexFromHexString = (value: string, config: HexConfig = {}): string => {
  const { prefix = false, byteSize = 8 } = config
  const nibbleBoundary = bitsToNibbles(byteSize)
  const unPadded = (value.startsWith('0x') ? value.slice(2) : value).toLowerCase()
  if (isHex(unPadded)) {
    const padded = unPadded.padStart(unPadded.length + (unPadded.length % nibbleBoundary), '0')
    return prefix ? `0x${padded}` : padded
  } else {
    throw new Error('Received string is not a value hex')
  }
}
