export { subtle } from 'node:crypto'

export const isBrowser = () => {
  return window?.document !== undefined
}

export const isWebworker = () => {
  return typeof self === 'object' && self.constructor?.name === 'DedicatedWorkerGlobalScope'
}

export const getGlobal = <T extends object>() => (isBrowser() ? (window as unknown as T) : isWebworker() ? (self as unknown as T) : globalThis)
