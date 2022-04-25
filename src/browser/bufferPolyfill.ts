import { BrowserBuffer } from './Buffer'

export const bufferPolyfillBrowser = () => {
  if (window !== undefined) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const global = window as any
    if (global.Buffer === undefined) {
      global.Buffer = BrowserBuffer
    }
  }
}
