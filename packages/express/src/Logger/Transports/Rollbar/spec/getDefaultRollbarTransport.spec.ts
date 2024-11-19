import '@xylabs/vitest-extended'

import {
  describe, expect, it,
} from 'vitest'

import { getDefaultRollbarTransport } from '../getDefaultRollbarTransport.ts'

describe('getDefaultRollbarTransport', () => {
  it('returns the transport', () => {
    const env = { ROLLBAR_ACCESS_TOKEN: 'something' }
    const transport = getDefaultRollbarTransport(env)
    expect(transport).toBeObject()
    expect(transport.log).toBeFunction()
  })
})
