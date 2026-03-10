import type { CommonFields } from './CommonFields.ts'

/** Fields for a user click tracking event. */
export interface UserClickFields extends CommonFields {
  elementName: string
  elementType: string
  intent?: string
  placement?: string
}
