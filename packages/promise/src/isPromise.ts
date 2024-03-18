export interface PromiseType {
  then: () => unknown
}

export const isPromise = (value: unknown) => {
  if (typeof value === 'object' && !Array.isArray(value)) {
    return typeof (value as PromiseType).then === 'function'
  }
  return false
}
