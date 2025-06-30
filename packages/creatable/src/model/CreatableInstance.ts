import type { EventData } from '@xylabs/events'

import type { CreatableName, CreatableParams } from './CreatableParams.ts'

export interface CreatableInstance<TParams extends CreatableParams = CreatableParams, TEventData extends EventData = EventData> {
  eventData: TEventData
  name: CreatableName
  params: TParams
}
