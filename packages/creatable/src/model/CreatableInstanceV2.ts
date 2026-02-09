import type { EventData, EventEmitter } from '@xylabs/events'
import type { Promisable } from '@xylabs/promise'

import type { CreatableName } from './CreatableName.ts'
import type { CreatableParamsV2 } from './CreatableParamsV2.ts'

export interface CreatableInstanceV2<TParams extends CreatableParamsV2 = CreatableParamsV2,
  TEventData extends EventData = EventData> extends EventEmitter<TEventData> {
  createHandler: () => Promisable<void>
  eventData: TEventData
  name: CreatableName
  params: TParams
  start: () => Promise<boolean>
  stop: () => Promise<boolean>
}
