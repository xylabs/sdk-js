import { isString } from '@xylabs/typeof'

import { hexFromHexString } from './from/index.ts'

/**
 * Checks whether a hex string represents a zero value.
 * @param value - The hex string to check
 * @returns True if zero, false if non-zero, or undefined if the input is not a string
 */
export const isHexZero = (value?: string) => {
  return isString(value) ? BigInt(hexFromHexString(value, { prefix: true })) === 0n : undefined
}
