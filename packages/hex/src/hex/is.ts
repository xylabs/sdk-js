import { HexRegEx, HexRegExWithPrefix } from '../HexRegEx.ts'
import type { Hex, HexConfig } from './model.ts'
import { bitsToNibbles } from './nibble.ts'

export const isHex = (value: unknown, config?: HexConfig): value is Hex => {
  // Is it a string?
  if (typeof value !== 'string') return false

  const valueCharLength = config?.prefix ? value.length - 2 : value.length

  // If a bitLength specified, does it conform?
  if (config?.bitLength !== undefined && valueCharLength !== bitsToNibbles(config?.bitLength)) return false

  // Does it only has hex values?
  return config?.prefix ? HexRegExWithPrefix.test(value) : HexRegEx.test(value)
}
