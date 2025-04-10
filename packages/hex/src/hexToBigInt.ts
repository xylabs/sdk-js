import { type Hex, hexFromHexString } from './hex/index.ts'

export function hexToBigInt(hex: Hex): bigint {
  return BigInt(hexFromHexString(hex, { prefix: true }))
}
