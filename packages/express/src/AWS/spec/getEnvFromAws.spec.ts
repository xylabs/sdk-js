import '@xylabs/vitest-extended'

import {
  describe, expect, it,
} from 'vitest'

import { getEnvFromAws } from '../getEnvFromAws.ts'

const nonExistentSecret = 'does-not-exist'
const errorMessage = "Secrets Manager can't find the specified secret."

describe.skip('getEnvFromAws', () => {
  it('gets the ENV from AWS', async () => {
    await expect(async () => await getEnvFromAws(nonExistentSecret)).rejects.toThrow(errorMessage)
  })
})
