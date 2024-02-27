/* eslint-disable require-await */
/* eslint-disable import/no-internal-modules */
import { expose, registerSerializer } from '../../src/worker'
import { Foo, fooSerializer } from '../lib/serialization'

registerSerializer(fooSerializer)

async function run(foo: Foo<string>) {
  return new Foo(foo.getValue() + foo.getValue())
}

expose(run)
