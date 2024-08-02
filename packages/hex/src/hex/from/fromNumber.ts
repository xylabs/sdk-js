import { Hex, HexConfig } from '../model.ts'
import { hexFromBigInt } from './fromBigInt.ts'

export const hexFromNumber = (value: number, config?: HexConfig): Hex => {
  return hexFromBigInt(BigInt(value), config)
}
