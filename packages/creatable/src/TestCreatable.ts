import type { EventData } from '@xylabs/events'

import { AbstractCreatable } from './AbstractCreatable.ts'
import { creatable } from './Creatable.ts'
import type { CreatableParams } from './model/index.ts'

// This is here to check types
@creatable()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class TestCreatable<TParams extends CreatableParams = CreatableParams, TEventData extends EventData = EventData>
  extends AbstractCreatable<TParams, TEventData> {
  protected override paramsHandler(params?: Partial<CreatableParams<TParams>> | undefined): CreatableParams<TParams> {
    return params as CreatableParams<TParams>
  }
}
