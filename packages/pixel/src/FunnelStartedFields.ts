import type { CommonFields } from './CommonFields.ts'

/** Fields for a funnel-started tracking event. */
export interface FunnelStartedFields extends CommonFields {
  name: string
}
