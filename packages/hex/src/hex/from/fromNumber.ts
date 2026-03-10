import type { Hex, HexConfig } from '../hex.ts'
import { hexFromBigInt } from './fromBigInt.ts'

/**
 * Converts a number to a hex string by converting to BigInt first.
 * @param value - The number to convert
 * @param config - Optional hex output configuration
 * @returns The hex string representation
 */
export const hexFromNumber = (value: number, config?: HexConfig): Hex => {
  return hexFromBigInt(BigInt(value), config)
}
