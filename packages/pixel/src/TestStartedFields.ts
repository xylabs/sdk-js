import type { CommonFields } from './CommonFields.ts'

/** Fields for a test-started tracking event (e.g. A/B test). */
export interface TestStartedFields extends CommonFields {
  name: string
}
