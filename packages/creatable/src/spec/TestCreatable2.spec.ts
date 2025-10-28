import type { EventData } from '@xylabs/events'
import { Promisable } from '@xylabs/promise'
import {
  describe, expect, test,
} from 'vitest'

import {
  Creatable, creatable, creatableFactory,
} from '../Creatable.ts'
import { CreatableInstance, RequiredCreatableParams } from '../model/index.ts'
import { TestCreatable, TestCreatableParams } from './TestCreatable.spec.ts'

interface TestCreatableParams2 extends TestCreatableParams {
  testParam2: number
}

@creatable()
class TestCreatable2<TParams extends TestCreatableParams2 = TestCreatableParams2, TEventData extends EventData = EventData>
  extends TestCreatable<TParams, TEventData> {
  static override createHandler<T extends CreatableInstance>(
    this: Creatable<T>,
    instance: T,
  ): Promisable<T> {
    return instance
  }

  override paramsValidator(params: Partial<TParams & RequiredCreatableParams> = {}): TParams {
    const result: TestCreatableParams = {
      ...params, name: params.name ?? this.constructor.name, testParam: 'yo',
    }
    return result as TParams
  }
}

@creatableFactory()
class TestCreatable2a<TParams extends TestCreatableParams2 = TestCreatableParams2, TEventData extends EventData = EventData>
  extends TestCreatable<TParams, TEventData> {
  static override createHandler<T extends CreatableInstance>(
    this: Creatable<T>,
    instance: T,
  ): Promisable<T> {
    return instance
  }
}

// const factory = TestCreatable2.factory()

describe('TestCreatable2', () => {
  test('should create an instance with default params', async () => {
    const instance = await TestCreatable2.create()
    expect(instance).toBeDefined()
  })
  test('should create an instance with default params as factory', async () => {
    const instance = await TestCreatable2a.create()
    expect(instance).toBeDefined()
  })
  /* test('should create an instance with default params from factory', async () => {
    const instance = await factory.create()
    expect(instance).toBeDefined()
  }) */
})
