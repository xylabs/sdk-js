import type { CreatableName } from './CreatableName.ts'

/** @deprecated use CreatableStatusReporterV2 instead */
export type StandardCreatableStatus = 'creating' | 'created' | 'starting' | 'started' | 'stopping' | 'stopped' | 'error'

/** @deprecated use CreatableStatusReporterV2 instead */
export type CreatableStatus<TAdditionalStatus extends void | string = void>
  = StandardCreatableStatus | (TAdditionalStatus extends void ? StandardCreatableStatus : TAdditionalStatus)

/** @deprecated use CreatableStatusReporterV2 instead */
export interface CreatableStatusReporter<TAdditionalStatus extends void | string = void> {
  report(name: CreatableName, status: Exclude<CreatableStatus<TAdditionalStatus>, 'error'>, progress: number): void
  report(name: CreatableName, status: Extract<CreatableStatus<TAdditionalStatus>, 'error'>, error: Error): void
  report(name: CreatableName, status: CreatableStatus<TAdditionalStatus>): void
}
