import type { CommonFields } from './CommonFields.ts'

export interface UserClickFields extends CommonFields {
  elementName: string
  elementType: string
  intent?: string
  placement?: string
}
