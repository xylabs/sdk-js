import { isString } from '@xylabs/typeof'

import { hexFromHexString } from './from/index.ts'

export const isHexZero = (value?: string) => {
  return isString(value) ? BigInt(hexFromHexString(value, { prefix: true })) === 0n : undefined
}
