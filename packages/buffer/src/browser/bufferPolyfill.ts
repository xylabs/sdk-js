import { Buffer } from 'buffer/'

export const bufferPolyfill = () => {
  if (globalThis.Buffer === undefined) {
    globalThis.Buffer = globalThis.Buffer ?? Buffer
  }
}
