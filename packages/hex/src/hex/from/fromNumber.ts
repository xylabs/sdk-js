import { Hex, HexConfig } from '../model.js'
import { hexFromBigInt } from './fromBigInt.js'

export const hexFromNumber = (value: number, config?: HexConfig): Hex => {
  return hexFromBigInt(BigInt(value), config)
}
