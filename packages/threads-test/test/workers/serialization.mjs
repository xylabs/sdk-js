/* eslint-disable import-x/no-internal-modules */
/* eslint-disable require-await */

import { expose, registerSerializer } from '@xylabs/threads/worker'
import { Foo, fooSerializer } from '../lib/serialization.ts'

registerSerializer(fooSerializer)

async function run(foo) {
  console.log('run', foo)
  const result = new Foo(foo.getValue() + foo.getValue())
  console.log('result', result)
  return result
}

expose(run)
