import type { TypedObject } from '@xylabs/promise'

import type { TypeCheck, TypeCheckConfig } from './AsTypeFactory.ts'
import type { ObjectTypeShape } from './isType.ts'
import { isType } from './isType.ts'

export interface ObjectTypeConfig extends TypeCheckConfig {}

export class IsObjectFactory<T extends TypedObject> {
  create(shape?: ObjectTypeShape, additionalChecks?: TypeCheck<TypedObject>[]): TypeCheck<T> {
    return (obj, { log } = {}): obj is T => {
      if (!obj || typeof obj !== 'object') {
        return false
      }
      return (
        // do primary check
        Object.entries(shape ?? {}).filter(([key, type]) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const result = isType((obj as any)[key], type)
          if (!result && log) {
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
