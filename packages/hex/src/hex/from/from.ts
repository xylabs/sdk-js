import { isArrayBuffer } from '@xylabs/arraybuffer'

import { Hex, HexConfig } from '../model'
import { hexFromArrayBuffer } from './fromArrayBuffer'
import { hexFromBigInt } from './fromBigInt'
import { hexFromHexString } from './fromHexString'
import { hexFromNumber } from './fromNumber'

/** Takes unknown value and tries our best to convert it to a hex string */
export const hexFrom = (
  /** Supported types are string, number, bigint, and ArrayBuffer */
  value: unknown,
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
      if (isArrayBuffer(value)) {
        return hexFromArrayBuffer(value, config)
      } else {
        throw new Error('Invalid type: object !== ArrayBuffer')
      }
    }
    default: {
      throw new Error(`Invalid type: ${typeof value}`)
    }
  }
}
