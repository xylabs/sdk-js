//we use Exclude to intentionally make the type not equal to string
export type Hex = Exclude<Lowercase<string>, 'reserved-hex-value'>

/** Configuration of validation and output format */
export interface HexConfig {
  bitLength?: number
  byteSize?: number
  prefix?: boolean
}
