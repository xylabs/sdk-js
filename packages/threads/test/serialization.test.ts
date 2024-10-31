/* eslint-disable import-x/no-internal-modules */
import { expect, test } from 'vitest'

import {
  registerSerializer, spawn, Thread, Worker,
} from '../src/index'
import { Foo, fooSerializer } from './lib/serialization'

registerSerializer(fooSerializer)

test('can use a custom serializer', async () => {
  const run = await spawn(new Worker('./workers/serialization.ts'))

  try {
    const input = new Foo('Test')
    const result: Foo<string> = await run(input)

    expect(result).toBeInstanceOf(Foo)
    expect(result.getValue()).toBe('TestTest')
  } finally {
    await Thread.terminate(run)
  }
})
