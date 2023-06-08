import { BrowserBuffer } from './Buffer'

type WithOptionalBuffer = { Buffer?: typeof BrowserBuffer }

const isBrowser = () => {
  return typeof window !== 'undefined' && typeof window?.document !== 'undefined'
}

const isWebworker = () => {
  return typeof self === 'object' && self.constructor?.name === 'DedicatedWorkerGlobalScope'
}

export const bufferPolyfillBrowser = () => {
  const global = isBrowser() ? (window as unknown as WithOptionalBuffer) : isWebworker() ? (self as unknown as WithOptionalBuffer) : undefined
  if (global && global.Buffer === undefined) {
    global.Buffer = BrowserBuffer
  }
}
