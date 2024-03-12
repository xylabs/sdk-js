import { Hex, HexConfig } from '../model'
import { bitsToNibbles } from '../nibble'
import { hexFromHexString } from './fromHexString'

/** Convert a bigint to a hex string */
export const hexFromBigInt = (
  /** The bigint to be converted */
  value: bigint,
  /** Configuration of output format and validation */
  config: HexConfig = {},
): Hex => {
  const { bitLength } = config
  const unPadded = value.toString(16)
  const padded = bitLength === undefined ? unPadded : unPadded.padStart(bitsToNibbles(bitLength), '0')
  return hexFromHexString(padded, config)
}
