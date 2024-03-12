import { hexFrom } from './from'
import { HexConfig } from './model'

/** takes any value and tries our best to convert it to a hex string */
export const toHex = (
  /** Supported types are string, number, bigint, and ArrayBuffer */
  value: unknown,
  /** Configuration of output format and validation */
  config: HexConfig = {},
) => {
  const { prefix = false } = config
  return hexFrom(value, { prefix, ...config })
}
