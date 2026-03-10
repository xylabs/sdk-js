import { type Hex, hexFromHexString } from './hex/index.ts'

/**
 * Converts a Hex string to a BigInt.
 * @param hex - The hex string to convert
 * @returns The BigInt representation of the hex value
 */
export function hexToBigInt(hex: Hex): bigint {
  return BigInt(hexFromHexString(hex, { prefix: true }))
}
