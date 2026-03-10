import type { TypeCheck, TypeCheckConfig } from '@xylabs/object-model'
import {
  isObject, isTruthy,
  type ObjectTypeShape, type TypedObject,
} from '@xylabs/typeof'
import { isType } from '@xylabs/typeof'

/** Configuration options for object type checking. */
export interface ObjectTypeConfig extends TypeCheckConfig {}

/** Factory class for creating type-guard functions that validate objects against a given shape and optional additional checks. */
export class IsObjectFactory<T extends TypedObject> {
  /**
   * Creates a type-guard function that validates an object matches the given shape and passes additional checks.
   * @param shape - An optional map of property names to expected types.
   * @param additionalChecks - Optional extra type-check functions to run after shape validation.
   * @returns A type-guard function for type T.
   */
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
        // eslint-disable-next-line unicorn/no-array-reduce
        && (additionalChecks?.reduce((prev, check) => prev && check(obj, { log }), true) ?? true)
      )
    }
  }
}
