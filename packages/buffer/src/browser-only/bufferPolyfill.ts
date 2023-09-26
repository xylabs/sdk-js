import { Buffer } from 'buffer/'

type WithOptionalBuffer = { Buffer?: typeof Buffer }

const isBrowser = () => {
  return typeof window !== 'undefined' && typeof window?.document !== 'undefined'
}

const isWebworker = () => {
  return typeof self === 'object' && self.constructor?.name === 'DedicatedWorkerGlobalScope'
}

export const bufferPolyfill = () => {
  const global = isBrowser() ? (window as unknown as WithOptionalBuffer) : isWebworker() ? (self as unknown as WithOptionalBuffer) : undefined
  if (global && global.Buffer === undefined) {
    global.Buffer = Buffer
  }
}
