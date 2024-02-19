import { isArrayBuffer } from '@xylabs/arraybuffer'

import { Hex, HexConfig } from '../model'
import { bitsToNibbles } from '../nibble'
import { hexFromHexString } from './fromHexString'

export const hexFromArrayBuffer = (buffer: ArrayBuffer, config?: HexConfig): Hex => {
  const unPadded = [...new Uint8Array(buffer)].map((x) => x.toString(16).padStart(2, '0')).join('')
  return hexFromHexString(unPadded, config)
}

export const hexFromBigInt = (value: bigint, config: HexConfig = {}): Hex => {
  const { bitLength } = config
  const unPadded = value.toString(16)
  const padded = bitLength === undefined ? unPadded : unPadded.padStart(bitsToNibbles(bitLength), '0')
  return hexFromHexString(padded, config)
}

export const hexFromNumber = (value: number, config?: HexConfig): Hex => {
  return hexFromBigInt(BigInt(value), config)
}

export const hexFrom = (value: unknown, config?: HexConfig): Hex => {
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
