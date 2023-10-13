import { getGlobal } from '@xylabs/platform'

import { Crypto } from './Crypto'

type WithOptionalCrypto = { Crypto?: typeof Crypto }

export const cryptoPolyfill = () => {
  const global = getGlobal<WithOptionalCrypto>()
  if (global) {
    if (global.Crypto === undefined) {
      global.Crypto = Crypto
    } else {
      global.Crypto = { ...Crypto, ...global.Crypto }
    }
  }
}
