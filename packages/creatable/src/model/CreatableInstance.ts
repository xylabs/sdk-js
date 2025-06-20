import type { EmptyObject } from '@xylabs/object'

import type { CreatableName, CreatableParams } from './CreatableParams.ts'

export interface CreatableInstanceFields<TParams extends EmptyObject | void = void> {
  name: CreatableName
  params: CreatableParams<TParams>
}

export type CreatableInstance<T extends EmptyObject | void = void, TParams extends EmptyObject | void = void>
  = T extends EmptyObject ? T & CreatableInstanceFields<TParams> : CreatableInstanceFields<TParams>
