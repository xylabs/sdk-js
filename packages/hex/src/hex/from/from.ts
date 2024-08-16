import type { Hex, HexConfig } from '../model.ts'
import { hexFromArrayBuffer } from './fromArrayBuffer.ts'
import { hexFromBigInt } from './fromBigInt.ts'
import { hexFromHexString } from './fromHexString.ts'
import { hexFromNumber } from './fromNumber.ts'

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
