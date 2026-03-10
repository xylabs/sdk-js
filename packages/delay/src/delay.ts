import { setTimeoutEx } from '@xylabs/timer'

/**
 * Returns a promise that resolves after the specified number of milliseconds.
 * @param ms - The number of milliseconds to delay.
 * @returns A promise that resolves after the delay.
 */
export const delay = (ms: number) => {
  return new Promise(resolve => setTimeoutEx(resolve, ms))
}
