/** The Web Crypto API's SubtleCrypto interface, re-exported from Node.js crypto module. */
export { subtle } from 'node:crypto'

/** Returns whether the current environment is a browser. Always returns false in Node.js. */
export const isBrowser = () => {
  return false
}

/** Returns whether the current environment is a web worker. Always returns false in Node.js. */
export const isWebworker = () => {
  return false
}

/** Returns whether the current environment is Node.js. Always returns true in this entry point. */
export const isNode = () => {
  return true
}
