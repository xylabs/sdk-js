import type { EventData } from '@xylabs/events'

import type { CreatableName, CreatableParams } from './CreatableParams.ts'

export interface CreatableInstance {
  eventData: EventData
  name: CreatableName
  params: CreatableParams
}
