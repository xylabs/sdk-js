import { getGlobal } from '@xylabs/platform'
import { Buffer } from 'buffer/'

type WithOptionalBuffer = { Buffer?: typeof Buffer }

export const bufferPolyfill = () => {
  const global = getGlobal<WithOptionalBuffer>()
  if (global && global.Buffer === undefined) {
    global.Buffer = Buffer
  }
}
