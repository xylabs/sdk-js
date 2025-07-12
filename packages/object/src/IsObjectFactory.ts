import type { TypeCheck, TypeCheckConfig } from '@xylabs/object-model'
import {
  isObject, isTruthy,
  type ObjectTypeShape, type TypedObject,
} from '@xylabs/typeof'

import { isType } from './isType.ts'

export interface ObjectTypeConfig extends TypeCheckConfig {}

export class IsObjectFactory<T extends TypedObject> {
  create(shape?: ObjectTypeShape, additionalChecks?: TypeCheck<TypedObject>[]): TypeCheck<T> {
    return (obj: unknown, config?: TypeCheckConfig | number): obj is T => {
      if (!isObject(obj)) {
        return false
      }
      const log = (typeof config === 'object') ? config.log : undefined
      return (
        // do primary check
        Object.entries(shape ?? {}).filter(([key, type]) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const result = isType((obj as any)[key], type)
          if (!result && isTruthy(log)) {
            const logger = typeof log === 'object' ? log : console
            logger.warn(`isType Failed: ${key}: ${type}`)
          }
          return !result
        }).length === 0
        // perform additional checks
        && (additionalChecks?.reduce((prev, check) => prev && check(obj, { log }), true) ?? true)
      )
    }
  }
}
