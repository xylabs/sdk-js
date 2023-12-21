import { hexFromHexString } from './from'

export const isHexZero = (value?: string) => {
  return value ? BigInt(hexFromHexString(value, { prefix: true })) === 0n : undefined
}
