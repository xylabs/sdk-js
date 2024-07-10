import { Hex, HexConfig } from '../model.js'
import { hexFromArrayBuffer } from './fromArrayBuffer.js'
import { hexFromBigInt } from './fromBigInt.js'
import { hexFromHexString } from './fromHexString.js'
import { hexFromNumber } from './fromNumber.js'

/** Takes unknown value and tries our best to convert it to a hex string */
export const hexFrom = (
  /** Supported types are string, number, bigint, and ArrayBuffer */
  value: string | number | bigint | ArrayBuffer,
  /** Configuration of output format and validation */
  config?: HexConfig,
): Hex => {
  switch (typeof value) {
    case 'string': {
      return hexFromHexString(value, config)
    }
    case 'bigint': {
      return hexFromBigInt(value, config)
    }
    case 'number': {
      return hexFromNumber(value, config)
    }
    case 'object': {
      return hexFromArrayBuffer(value, config)
    }
    default: {
      throw new Error(`Invalid type: ${typeof value}`)
    }
  }
}
