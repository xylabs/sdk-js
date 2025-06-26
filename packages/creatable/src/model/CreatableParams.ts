import type { BaseClassName } from '@xylabs/base'
import type { BaseEmitterParams } from '@xylabs/events'
import type { EmptyObject } from '@xylabs/object'

import type { CreatableStatusReporter } from './CreatableStatusReporter.ts'

export type CreatableName = Exclude<string, 'creatable-name-reserved-32546239486'> & BaseClassName

export type CreatableParamsFields = {
  name: CreatableName
  statusReporter?: CreatableStatusReporter
}

export type CreatableParams<TAdditionalParams extends EmptyObject | void = void>
  = BaseEmitterParams<TAdditionalParams extends EmptyObject ? CreatableParamsFields & TAdditionalParams : CreatableParamsFields>
