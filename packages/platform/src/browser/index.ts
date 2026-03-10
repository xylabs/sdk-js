import type { subtle as subtleType } from 'node:crypto'

/** Returns whether the current environment is a browser window (not a web worker). */
export const isBrowser = () => {
  return !isWebworker() && globalThis.constructor?.name === 'Window'
}

/** Returns whether the current environment is a dedicated web worker. */
export const isWebworker = () => {
  return typeof globalThis === 'object' && globalThis.constructor?.name === 'DedicatedWorkerGlobalScope'
}

/** Returns whether the current environment is Node.js. Always returns false in the browser entry point. */
export const isNode = () => {
  return false
}

/** The Web Crypto API's SubtleCrypto interface, sourced from the browser's globalThis.crypto. */
export const subtle = globalThis.crypto.subtle as typeof subtleType
