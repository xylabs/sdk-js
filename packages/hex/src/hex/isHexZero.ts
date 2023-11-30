import { hexFromHexString } from './from'

export const isHexZero = (value: string) => {
  return BigInt(hexFromHexString(value, { prefix: true })) === 0n
}
