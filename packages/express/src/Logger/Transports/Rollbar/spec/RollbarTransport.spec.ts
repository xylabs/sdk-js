import '@xylabs/vitest-extended'

import Rollbar from 'rollbar'
import {
  beforeEach,
  describe, expect, it,
  vi,
} from 'vitest'
import type { MockProxy } from 'vitest-mock-extended'
import { mock } from 'vitest-mock-extended'

import { RollbarTransport } from '../RollbarTransport.ts'

const accessToken = process.env.ROLLBAR_ACCESS_TOKEN
const unitTestSentinelLoggingString = 'error log from unit test'

describe('RollbarTransport', () => {
  let rollbar: MockProxy<Rollbar> | Rollbar
  let sut: RollbarTransport
  beforeEach(() => {
    rollbar = accessToken ? new Rollbar({ accessToken, environment: 'development' }) : mock<Rollbar>()
    sut = new RollbarTransport({}, rollbar)
  })
  it('logs', () => {
    expect(sut).toBeObject()
    const nextMock = vi.fn()
    sut.log({ message: unitTestSentinelLoggingString }, nextMock)
    expect(nextMock).toHaveBeenCalledOnce()
  })
})
