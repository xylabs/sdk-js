import type { subtle as subtleType } from 'crypto'

export const isBrowser = () => {
  return typeof window !== 'undefined' && typeof window?.document !== 'undefined'
}

export const isWebworker = () => {
  return typeof self === 'object' && self.constructor?.name === 'DedicatedWorkerGlobalScope'
}

export const getGlobal = <T extends object>() => (isBrowser() ? (window as unknown as T) : isWebworker() ? (self as unknown as T) : globalThis)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const subtle = (getGlobal() as any).subtle as typeof subtleType
