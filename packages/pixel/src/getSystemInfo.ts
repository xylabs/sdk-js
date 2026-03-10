import Bowser from 'bowser'

import type { UserEventSystem } from './Api/index.ts'

let systemInfo: UserEventSystem | undefined

/**
 * Returns parsed browser, OS, and engine information from the user agent string.
 * Results are cached after the first call.
 * @returns The parsed system info, or undefined if parsing fails
 */
export const getSystemInfo = () => {
  try {
    systemInfo = systemInfo || Bowser.getParser(globalThis.navigator.userAgent).getResult()
  } catch (ex) {
    // eslint-disable-next-line no-console
    console.log(`getSystemInfo Error: ${ex}`)
  }
  return systemInfo
}
