import { isType } from './isType.ts'

export const isObject = <T>(value: T): value is T & object => {
  return isType(value, 'object')
}
