import type { EventData } from '@xylabs/events'
import { Promisable } from '@xylabs/promise'

import type { CreatableFactory, CreatableInstance } from './model/index.ts'
import { Creatable, creatable } from './model/index.ts'
import { TestCreatable, TestCreatableParams } from './TestCreatable.ts'

interface TestCreatableParams2 extends TestCreatableParams {
  testParam2: number
}

@creatable()
export class TestCreatable2<TParams extends TestCreatableParams2 = TestCreatableParams2, TEventData extends EventData = EventData>
  extends TestCreatable<TParams, TEventData> {
  static override createHandler<T extends CreatableInstance>(
    this: Creatable<T>,
    instance: T,
  ): Promisable<T> {
    return instance
  }

  override paramsValidator(params: Partial<TParams> = {}): TParams {
    const result: TestCreatableParams = {
      ...params, name: params.name ?? this.constructor.name, testParam: 'yo',
    }
    return result as TParams
  }
}

export const buildTestFactories2 = () => {
  const factories: CreatableFactory[] = [
    TestCreatable,
    TestCreatable.factory(),
  ]
  return factories
}
