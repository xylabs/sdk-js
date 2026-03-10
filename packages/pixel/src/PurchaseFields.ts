import type { CommonFields } from './CommonFields.ts'

/** Fields for a purchase tracking event. */
export interface PurchaseFields extends CommonFields {
  id: string
  name?: string
  price?: number
  value?: number
}
