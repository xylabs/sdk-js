import { isHex } from '../hex/index.ts'
import type { Hash, HashBitLength } from './hash.ts'

export const isHash = (value: unknown, bitLength: HashBitLength = 256): value is Hash => {
  return isHex(value, { bitLength })
}
