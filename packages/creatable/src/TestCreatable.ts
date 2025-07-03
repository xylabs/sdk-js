import type { EventData } from '@xylabs/events'
import { Promisable } from '@xylabs/promise'

import { AbstractCreatable } from './AbstractCreatable.ts'
import type {
  CreatableFactory, CreatableInstance, CreatableParams,
} from './model/index.ts'
import { Creatable, creatable } from './model/index.ts'

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

  override paramsValidator(params: Partial<TParams> = {}): TParams {
    const result: TestCreatableParams = {
      ...params, name: params.name ?? this.constructor.name, testParam: 'yo',
    }
    return result as TParams
  }
}

export const buildTestFactories = () => {
  const factories: CreatableFactory[] = [
    TestCreatable,
    TestCreatable.factory(),
  ]
  return factories
}
