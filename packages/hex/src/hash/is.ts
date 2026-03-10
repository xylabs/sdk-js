import { isHex } from '../hex/index.ts'
import type { Hash, HashBitLength } from './hash.ts'

/**
 * Type guard that checks whether a value is a valid hash of the specified bit length.
 * @param value - The value to check
 * @param bitLength - The expected bit length of the hash (defaults to 256)
 * @returns True if the value is a valid Hash
 */
export const isHash = (value: unknown, bitLength: HashBitLength = 256): value is Hash => {
  return isHex(value, { bitLength })
}
