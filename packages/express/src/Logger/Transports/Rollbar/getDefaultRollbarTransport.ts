import { assertEx } from '@xylabs/assert'
import Rollbar from 'rollbar'

import { RollbarTransport } from './RollbarTransport.ts'

export const getDefaultRollbarTransport = (env: { [key: string]: string | undefined }): RollbarTransport => {
  const accessToken = assertEx(env.ROLLBAR_ACCESS_TOKEN, () => 'Missing ROLLBAR_ACCESS_TOKEN ENV VAR')
  const rollbar: Rollbar = new Rollbar({ accessToken })
  return new RollbarTransport({}, rollbar)
}
