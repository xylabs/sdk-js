import type { Hex, HexConfig } from './model.ts'
import { bitsToNibbles } from './nibble.ts'
import { hexRegex, hexRegexWithPrefix } from './regex.ts'

export const isHex = (value: unknown, config?: HexConfig): value is Hex => {
  // Is it a string?
  if (typeof value !== 'string') return false

  const valueCharLength = config?.prefix ? value.length - 2 : value.length

  // If a bitLength specified, does it conform?
  if (config?.bitLength !== undefined && valueCharLength !== bitsToNibbles(config?.bitLength)) return false

  // Does it only has hex values?
  return config?.prefix ? hexRegexWithPrefix.test(value) : hexRegex.test(value)
}
