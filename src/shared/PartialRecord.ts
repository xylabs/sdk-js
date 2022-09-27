/* eslint-disable @typescript-eslint/no-explicit-any */

/** @deprecated use Partial<Record<>> instead */
export type PartialRecord<K extends keyof any, T> = {
  [P in K]?: T
}
