import type { Hex, HexConfig } from '../hex.ts'
import { hexFromBigInt } from './fromBigInt.ts'

export const hexFromNumber = (value: number, config?: HexConfig): Hex => {
  return hexFromBigInt(BigInt(value), config)
}
