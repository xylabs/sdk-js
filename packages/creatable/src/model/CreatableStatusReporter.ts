import type { BaseClassName } from '@xylabs/base'

export type StandardCreatableStatus = 'creating' | 'created' | 'starting' | 'started' | 'stopping' | 'stopped' | 'error'
export type CreatableStatus<TAdditionalStatus extends void | string = void>
  = StandardCreatableStatus | (TAdditionalStatus extends void ? StandardCreatableStatus : TAdditionalStatus)

export interface CreatableStatusReporter<TAdditionalStatus extends void | string = void> {
  report(name: BaseClassName, status: Exclude<CreatableStatus<TAdditionalStatus>, 'error'>, progress: number): void
  report(name: BaseClassName, status: Extract<CreatableStatus<TAdditionalStatus>, 'error'>, error: Error): void
  report(name: BaseClassName, status: CreatableStatus<TAdditionalStatus>): void
}
