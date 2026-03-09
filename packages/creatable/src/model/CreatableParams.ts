import type { BaseClassName } from '@xylabs/base'
import type { BaseEmitterParams } from '@xylabs/events'

import type { CreatableStatus, CreatableStatusReporter } from './CreatableStatusReporter.ts'

/** A branded string type used as the name identifier for creatables. */
export type CreatableName = Exclude<string, 'creatable-name-reserved-32546239486'> & BaseClassName

/** The minimum required parameters for constructing a creatable. */
export interface RequiredCreatableParams<TAdditionalStatus extends CreatableStatus | void = void> extends BaseEmitterParams {
  /** Optional name identifying this creatable instance. */
  name?: CreatableName
  /** Optional reporter for broadcasting status changes. */
  statusReporter?: CreatableStatusReporter<TAdditionalStatus>
}

/** Parameters for creating a creatable instance, combining required params with emitter params. */
export interface CreatableParams extends RequiredCreatableParams, BaseEmitterParams {}
