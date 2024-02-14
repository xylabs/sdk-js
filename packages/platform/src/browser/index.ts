import type { subtle as subtleType } from 'node:crypto'

export const isBrowser = () => {
  return !isWebworker() && window && window.document !== undefined
}

export const isWebworker = () => {
  return typeof self === 'object' && self.constructor?.name === 'DedicatedWorkerGlobalScope'
}

export const getGlobal = <T extends object>() => (isWebworker() ? (self as unknown as T) : isBrowser() ? (window as unknown as T) : globalThis)

export const subtle = getGlobal<Window>().crypto.subtle as typeof subtleType
