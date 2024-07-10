import { EmptyObject } from './EmptyObject.js'

export const removeFields = <T extends EmptyObject, K extends keyof T>(obj: T, fields: K[]): Omit<T, K> => {
  const clone = { ...obj }
  for (const field of fields) {
    delete clone[field]
  }
  return clone
}
