import { HexRegEx, HexRegExWithPrefix } from '../HexRegEx.ts'
import type { Hex, HexConfig } from './hex.ts'
import { bitsToNibbles } from './nibble.ts'

/**
 * Type guard that checks whether a value is a valid hex string.
 * @param value - The value to check
 * @param config - Optional configuration for prefix and bit length validation
 * @returns True if the value is a valid Hex string
 */
export const isHex = (value: unknown, config?: HexConfig): value is Hex => {
  // Is it a string?
  if (typeof value !== 'string') return false

  const valueCharLength = config?.prefix ? value.length - 2 : value.length

  // If a bitLength specified, does it conform?
  if (config?.bitLength !== undefined && valueCharLength !== bitsToNibbles(config?.bitLength)) return false

  // Does it only has hex values?
  return config?.prefix ? HexRegExWithPrefix.test(value) : HexRegEx.test(value)
}
