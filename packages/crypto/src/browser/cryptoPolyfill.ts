import { Crypto } from './Crypto.ts'

export const cryptoPolyfill = () => {
  globalThis.Crypto = globalThis.Crypto ?? Crypto
}
