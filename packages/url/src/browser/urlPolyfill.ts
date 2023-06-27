import { BrowserUrl } from './Url'

type WithOptionalUrl = { Url?: typeof BrowserUrl }

const isBrowser = () => {
  return typeof window !== 'undefined' && typeof window?.document !== 'undefined'
}

const isWebworker = () => {
  return typeof self === 'object' && self.constructor?.name === 'DedicatedWorkerGlobalScope'
}

export const urlPolyfillBrowser = () => {
  const global = isBrowser() ? (window as unknown as WithOptionalUrl) : isWebworker() ? (self as unknown as WithOptionalUrl) : undefined
  if (global && global.Url === undefined) {
    global.Url = BrowserUrl
  }
}
