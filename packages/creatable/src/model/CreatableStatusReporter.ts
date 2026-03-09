import type { BaseClassName } from '@xylabs/base'

/** The standard lifecycle statuses a creatable can transition through. */
export type StandardCreatableStatus = 'creating' | 'created' | 'starting' | 'started' | 'stopping' | 'stopped' | 'error'

/** A creatable's status, optionally extended with additional custom status values. */
export type CreatableStatus<TAdditionalStatus extends void | string = void>
  = StandardCreatableStatus | (TAdditionalStatus extends void ? StandardCreatableStatus : TAdditionalStatus)

/** Reports status changes for a creatable, supporting progress tracking and error reporting. */
export interface CreatableStatusReporter<TAdditionalStatus extends void | string = void> {
  /** Report a non-error status with a numeric progress value. */
  report(name: BaseClassName, status: Exclude<CreatableStatus<TAdditionalStatus>, 'error'>, progress: number): void
  /** Report an error status with the associated Error. */
  report(name: BaseClassName, status: Extract<CreatableStatus<TAdditionalStatus>, 'error'>, error: Error): void
  /** Report a status change without progress or error details. */
  report(name: BaseClassName, status: CreatableStatus<TAdditionalStatus>): void
}
