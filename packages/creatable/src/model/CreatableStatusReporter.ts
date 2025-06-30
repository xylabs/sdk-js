import type { BaseClassName } from '@xylabs/base'

export type CreatableStatus = 'creating' | 'created' | 'starting' | 'started' | 'stopping' | 'stopped' | 'error'

export interface CreatableStatusReporter<T extends CreatableStatus = CreatableStatus> {
  report(name: BaseClassName, status: Exclude<T, 'error'>, progress?: number): void
  report(name: BaseClassName, status: Extract<T, 'error'>, error?: Error): void
}
