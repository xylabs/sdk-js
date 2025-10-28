import type { EventData } from '@xylabs/events'
import { Promisable } from '@xylabs/promise'
import {
  describe, expect, test,
} from 'vitest'

import { AbstractCreatable } from '../AbstractCreatable.ts'
import { Creatable, creatable } from '../Creatable.ts'
import {
  CreatableInstance, CreatableParams, RequiredCreatableParams,
} from '../model/index.ts'

export interface TestCreatableParams extends CreatableParams {
  testParam: string
}

@creatable()
export class TestCreatable<TParams extends TestCreatableParams = TestCreatableParams, TEventData extends EventData = EventData>
  extends AbstractCreatable<TParams, TEventData> {
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

describe('TestCreatable', () => {
  test('should create an instance with default params', async () => {
    const instance = await TestCreatable.create()
    expect(instance).toBeDefined()
  })
})
