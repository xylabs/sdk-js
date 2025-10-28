import type { BaseClassName } from '@xylabs/base'
import type { BaseEmitterParams } from '@xylabs/events'

import type { CreatableStatus, CreatableStatusReporter } from './CreatableStatusReporter.ts'

export type CreatableName = Exclude<string, 'creatable-name-reserved-32546239486'> & BaseClassName

export interface RequiredCreatableParams<TAdditionalStatus extends CreatableStatus | void = void> extends BaseEmitterParams {
  name?: CreatableName
  statusReporter?: CreatableStatusReporter<TAdditionalStatus>
}

export interface CreatableParams extends RequiredCreatableParams, BaseEmitterParams {}
