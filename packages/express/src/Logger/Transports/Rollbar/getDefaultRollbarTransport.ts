import { assertEx } from '@xylabs/assert'
import Rollbar from 'rollbar'

import { RollbarTransport } from './RollbarTransport.ts'

/**
 * Creates a RollbarTransport using the ROLLBAR_ACCESS_TOKEN from the environment.
 * @param env The environment variables containing the Rollbar access token.
 * @returns A configured RollbarTransport instance.
 */
export const getDefaultRollbarTransport = (env: { [key: string]: string | undefined }): RollbarTransport => {
  const accessToken = assertEx(env.ROLLBAR_ACCESS_TOKEN, () => 'Missing ROLLBAR_ACCESS_TOKEN ENV VAR')
  const rollbar: Rollbar = new Rollbar({ accessToken })
  return new RollbarTransport({}, rollbar)
}
