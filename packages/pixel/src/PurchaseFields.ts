import type { CommonFields } from './CommonFields.ts'

export interface PurchaseFields extends CommonFields {
  id: string
  name?: string
  price?: number
  value?: number
}
