import type { CommonFields } from './CommonFields.ts'

/** Fields for a view-content tracking event. */
export interface ViewContentFields extends CommonFields {
  name: string
  path: string
}
