import { Crypto } from './Crypto.ts'

/** Polyfills `globalThis.Crypto` with the crypto-js implementation for browser environments. */
export const cryptoPolyfill = () => {
  globalThis.Crypto = globalThis.Crypto ?? Crypto
}
