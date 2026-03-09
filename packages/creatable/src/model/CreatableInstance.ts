import type { EventData, EventEmitter } from '@xylabs/events'

import type { CreatableName, CreatableParams } from './CreatableParams.ts'

/** Represents a created instance with a managed lifecycle (start/stop) and event emission. */
export interface CreatableInstance<TParams extends CreatableParams = CreatableParams,
  TEventData extends EventData = EventData> extends EventEmitter<TEventData> {
  /** The event data type associated with this instance. */
  eventData: TEventData
  /** The name identifier for this instance. */
  name: CreatableName
  /** The parameters used to configure this instance. */
  params: TParams
  /** Starts the instance. Resolves to true if started successfully. */
  start: () => Promise<boolean>
  /** Stops the instance. Resolves to true if stopped successfully. */
  stop: () => Promise<boolean>
}
