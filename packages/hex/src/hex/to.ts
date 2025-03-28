import { hexFrom } from './from/index.ts'
import type { HexConfig } from './model.ts'

/** takes any value and tries our best to convert it to a hex string */
export const toHex = (
  /** Supported types are string, number, bigint, and ArrayBuffer */
  value: string | number | bigint | ArrayBufferLike,
  /** Configuration of output format and validation */
  config: HexConfig = {},
) => {
  const { prefix = false } = config
  return hexFrom(value, { prefix, ...config })
}
