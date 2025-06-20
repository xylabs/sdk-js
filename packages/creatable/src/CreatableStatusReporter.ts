import type { BaseClassName } from '@xylabs/base'

export type CreatableStatus = 'creating' | 'created' | 'starting' | 'started' | 'stopping' | 'stopped'

export interface CreatableStatusReporter {
  report: (name: BaseClassName, status: CreatableStatus, progress?: number) => void
}
