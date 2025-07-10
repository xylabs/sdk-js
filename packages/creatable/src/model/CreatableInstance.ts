import type { EventData, EventEmitter } from '@xylabs/events'

import type { CreatableName, CreatableParams } from './CreatableParams.ts'

export interface CreatableInstance<TParams extends CreatableParams = CreatableParams,
  TEventData extends EventData = EventData> extends EventEmitter<TEventData> {
  eventData: TEventData
  name: CreatableName
  params: TParams
}
