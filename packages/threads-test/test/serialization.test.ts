import { expect, test } from 'vitest'

import {
  spawn, Thread, Worker,
} from '@xylabs/threads/master'
import { Foo, fooSerializer } from './lib/serialization.ts'
import { registerSerializer } from '../../threads/dist/types/index-browser.ts'

registerSerializer(fooSerializer)

test('can use a custom serializer', async () => {
  const run = await spawn(new Worker('./workers/serialization.mjs', { _baseURL: __dirname }))

  try {
    const input = new Foo('Test')
    const result: Foo<string> = await run(input)

    expect(result).toBeInstanceOf(Foo)
    expect(result.getValue()).toBe('TestTest')
  } finally {
    await Thread.terminate(run)
  }
})
