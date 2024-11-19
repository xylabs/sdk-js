import '@xylabs/vitest-extended'

import {
  describe, expect, it,
} from 'vitest'

import { canGetDefaultRollbarTransport } from '../canGetDefaultRollbarTransport.ts'

describe('canGetDefaultRollbarTransport', () => {
  it('returns true if the transport could be created', () => {
    const env = { ROLLBAR_ACCESS_TOKEN: 'something' }
    expect(canGetDefaultRollbarTransport(env)).toBeTrue()
  })
  it('returns false if the transport could not be crated', () => {
    const env = { ROLLBAR_ACCESS_TOKEN: undefined }
    expect(canGetDefaultRollbarTransport(env)).toBeFalse()
  })
})
