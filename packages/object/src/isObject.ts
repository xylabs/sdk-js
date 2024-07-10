import { AnyObject } from './AnyObject.js'
import { isType } from './isType.js'

export const isObject = (value: unknown): value is AnyObject => {
  return isType(value, 'object')
}
