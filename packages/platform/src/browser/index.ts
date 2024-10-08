import type { subtle as subtleType } from 'node:crypto'

export const isBrowser = () => {
  return !isWebworker() && globalThis.constructor?.name === 'Window'
}

export const isWebworker = () => {
  return typeof globalThis === 'object' && globalThis.constructor?.name === 'DedicatedWorkerGlobalScope'
}

export const subtle = globalThis.crypto.subtle as typeof subtleType
