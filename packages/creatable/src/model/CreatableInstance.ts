import type { EventData } from '@xylabs/events'
import type { EmptyObject } from '@xylabs/object'

import type { CreatableName, CreatableParams } from './CreatableParams.ts'

export interface CreatableInstanceFields<TParams extends EmptyObject | void = void, TEventData extends EventData = EventData> {
  eventData: TEventData
  name: CreatableName
  params: CreatableParams<TParams>
}

export type CreatableInstance<T extends EmptyObject | void = void, TParams extends EmptyObject | void = void, TEventData extends EventData = EventData>
  = T extends EmptyObject ? T & CreatableInstanceFields<TParams, TEventData> : CreatableInstanceFields<TParams, TEventData>
