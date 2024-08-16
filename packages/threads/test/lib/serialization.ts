/* eslint-disable @typescript-eslint/no-explicit-any */

import type { JsonSerializable, SerializerImplementation } from '../../src/index'

export class Foo<T> {
  private readonly value: T

  constructor(value: T) {
    this.value = value
  }

  getValue() {
    return this.value
  }
}

interface SerializedFoo<T extends JsonSerializable> {
  __type: '$$foo'
  val: T
}

const isSerializedFoo = (thing: any): thing is SerializedFoo<JsonSerializable> =>
  thing && typeof thing === 'object' && '__type' in thing && thing.__type === '$$foo'

export const fooSerializer: SerializerImplementation = {
  deserialize(serialized, fallback) {
    return isSerializedFoo(serialized) ? new Foo(serialized.val) : fallback(serialized)
  },

  serialize(data, fallback) {
    return data instanceof Foo
      ? {
          __type: '$$foo',
          val: data.getValue(),
        }
      : fallback(data)
  },
}
