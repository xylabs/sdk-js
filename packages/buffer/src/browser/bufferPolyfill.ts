import { Buffer } from 'buffer/'

/** Polyfills `globalThis.Buffer` with the browser-compatible Buffer implementation if not already defined. */
export const bufferPolyfill = () => {
  if (globalThis.Buffer === undefined) {
    globalThis.Buffer = globalThis.Buffer ?? Buffer
  }
}
