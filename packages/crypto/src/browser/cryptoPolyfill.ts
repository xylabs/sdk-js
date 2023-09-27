import { Crypto } from './Crypto'

type WithOptionalCrypto = { Crypto?: typeof Crypto }

const isBrowser = () => {
  return typeof window !== 'undefined' && typeof window?.document !== 'undefined'
}

const isWebworker = () => {
  return typeof self === 'object' && self.constructor?.name === 'DedicatedWorkerGlobalScope'
}

export const cryptoPolyfill = () => {
  const global = isBrowser() ? (window as unknown as WithOptionalCrypto) : isWebworker() ? (self as unknown as WithOptionalCrypto) : undefined
  if (global) {
    if (global.Crypto === undefined) {
      global.Crypto = Crypto
    } else {
      global.Crypto = { ...Crypto, ...global.Crypto }
    }
  }
}
