//we use Exclude to intentionally make the type not equal to string
export type Hex = Exclude<Lowercase<string>, 'reserved-hex-value'>

export interface HexConfig {
  bitLength?: number
  byteSize?: number
  prefix?: boolean
}
