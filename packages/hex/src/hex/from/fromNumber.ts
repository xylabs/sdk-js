import { Hex, HexConfig } from '../model'
import { hexFromBigInt } from './fromBigInt'

export const hexFromNumber = (value: number, config?: HexConfig): Hex => {
  return hexFromBigInt(BigInt(value), config)
}
