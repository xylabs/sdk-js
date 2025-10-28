import type { BaseClassName } from '@xylabs/base'

export type CreatableStatus = 'creating' | 'created' | 'starting' | 'started' | 'stopping' | 'stopped' | 'error'

export interface CreatableStatusReporter<T extends void | string = void> {
  report(name: BaseClassName, status: Exclude<T extends void ? CreatableStatus : CreatableStatus | T, 'error'>, progress: number): void
  report(name: BaseClassName, status: Extract<T extends void ? CreatableStatus : CreatableStatus | T, 'error'>, error: Error): void
  report(name: BaseClassName, status: T extends void ? CreatableStatus : CreatableStatus | T): void
}
