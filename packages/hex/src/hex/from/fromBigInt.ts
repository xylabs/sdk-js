import type { Hex, HexConfig } from '../hex.ts'
import { hexFromHexString } from './fromHexString.ts'

/** Convert a bigint to a hex string */
export const hexFromBigInt = (
  /** The bigint to be converted */
  value: bigint,
  /** Configuration of output format and validation */
  config: HexConfig = {},
): Hex => {
  const unPadded = value.toString(16)
  return hexFromHexString(unPadded, config)
}
