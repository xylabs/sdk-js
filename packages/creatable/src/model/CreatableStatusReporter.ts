import type { BaseClassName } from '@xylabs/base'

export type CreatableStatus = 'creating' | 'created' | 'starting' | 'started' | 'stopping' | 'stopped' | 'error'

export interface CreatableStatusReporter {
  report(name: BaseClassName, status: Exclude<CreatableStatus, 'error'>, progress?: number): void
  report(name: BaseClassName, status: Extract<CreatableStatus, 'error'>, error?: Error): void
}
