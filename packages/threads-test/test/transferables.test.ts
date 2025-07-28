/* eslint-disable import-x/no-internal-modules */
/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { expect, test } from 'vitest'

import {
  spawn, Thread, Worker,
} from '@xylabs/threads/master'
import { Transfer } from '@xylabs/threads'

const arrayBufferPlaceholder = Symbol('ArrayBufferPlaceholder')

test('can pass transferable objects on thread call', async () => {
  const testData = new ArrayBuffer(64)

  const worker = new Worker('./workers/arraybuffer-xor.mjs', { _baseURL: __dirname })

  const xorBuffer = await spawn(worker)
  const testTransfer = Transfer(testData)
  const returnedBuffer = await xorBuffer(testTransfer, 15)

  expect(returnedBuffer.byteLength).toBe(64)

  await Thread.terminate(xorBuffer)
})

test.todo('can pass transferable objects as observable values')
