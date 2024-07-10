import { getGlobal } from '@xylabs/platform'

import { Crypto } from './Crypto.js'

type WithOptionalCrypto = { Crypto?: typeof Crypto }

export const cryptoPolyfill = () => {
  const global = getGlobal<WithOptionalCrypto>()
  if (global) {
    global.Crypto = global.Crypto === undefined ? Crypto : { ...Crypto, ...global.Crypto }
  }
}
