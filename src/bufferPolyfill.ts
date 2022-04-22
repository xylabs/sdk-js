import { Buffer } from './Buffer'

//make sure we have a global Buffer object if in browser
/** @deprecated use Buffer from @xylabs/sdk-js npm package instead */
export const bufferPolyfill = () => {
  if (window !== undefined) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const global = window as any
    if (global.Buffer === undefined) {
      global.Buffer = Buffer
    }
  }
}
