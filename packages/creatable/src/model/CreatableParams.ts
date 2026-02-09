import type { BaseEmitterParams } from '@xylabs/events'

import type { CreatableName } from './CreatableName.ts'
import type { CreatableStatus, CreatableStatusReporter } from './CreatableStatusReporter.ts'

export interface RequiredCreatableParams<TAdditionalStatus extends CreatableStatus | void = void> extends BaseEmitterParams {
  name?: CreatableName
  statusReporter?: CreatableStatusReporter<TAdditionalStatus>
}

export interface CreatableParams extends RequiredCreatableParams, BaseEmitterParams {}
