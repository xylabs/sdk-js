import { setTimeoutEx } from '@xylabs/timer'

export const delay = (ms: number) => {
  return new Promise(resolve => setTimeoutEx(resolve, ms))
}
