import { BrowserCrypto } from './Crypto'

type WithOptionalCrypto = { Crypto?: typeof BrowserCrypto }

const isBrowser = () => {
  return typeof window !== 'undefined' && typeof window?.document !== 'undefined'
}

const isWebworker = () => {
  return typeof self === 'object' && self.constructor?.name === 'DedicatedWorkerGlobalScope'
}

export const cryptoPolyfillBrowser = () => {
  const global = isBrowser() ? (window as unknown as WithOptionalCrypto) : isWebworker() ? (self as unknown as WithOptionalCrypto) : undefined
  if (global) {
    if (global.Crypto === undefined) {
      global.Crypto = BrowserCrypto
    } else {
      global.Crypto = { ...BrowserCrypto, ...global.Crypto }
    }
  }
}
