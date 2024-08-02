import { Hex, HexConfig } from '../model.ts'
import { hexFromHexString } from './fromHexString.ts'

/** Convert an ArrayBuffer to a hex string */
export const hexFromArrayBuffer = (
  /** The buffer to be converted */
  buffer: ArrayBuffer,
  /** Configuration of output format and validation */
  config?: HexConfig,
): Hex => {
  const unPadded = [...new Uint8Array(buffer)].map(x => x.toString(16).padStart(2, '0')).join('')
  return hexFromHexString(unPadded, config)
}
