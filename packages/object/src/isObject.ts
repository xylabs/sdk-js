import type { AnyObject } from './AnyObject.ts'
import { isType } from './isType.ts'

export const isObject = (value: unknown): value is AnyObject => {
  return isType(value, 'object')
}
