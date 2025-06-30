import type { BaseClassName } from '@xylabs/base'

import type { CreatableStatusReporter } from './CreatableStatusReporter.ts'

export type CreatableName = Exclude<string, 'creatable-name-reserved-32546239486'> & BaseClassName

export interface CreatableParams {
  name: CreatableName
  statusReporter?: CreatableStatusReporter
}
