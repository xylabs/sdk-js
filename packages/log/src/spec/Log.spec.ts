/* eslint-disable sonarjs/deprecation */
import {
  describe, expect, test,
} from 'vitest'

import { Log } from '../Log.ts'

describe('Log', () => {
  test('checking happy path', () => {
    const log = new Log({ devMode: false })
    expect(log).toBeDefined()
  })
})
