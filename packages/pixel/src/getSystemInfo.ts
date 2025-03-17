import Bowser from 'bowser'

import type { UserEventSystem } from './Api/index.ts'

let systemInfo: UserEventSystem | undefined

export const getSystemInfo = () => {
  try {
    systemInfo = systemInfo || Bowser.getParser(globalThis.navigator.userAgent).getResult()
  } catch (ex) {
    console.log(`getSystemInfo Error: ${ex}`)
  }
  return systemInfo
}
