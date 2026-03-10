import { typeOf } from './typeOf.ts'
import type { TypeOfTypes } from './TypeOfTypes.ts'

/**
 * Invokes the callback if the value matches the specified type, with an optional additional predicate.
 * @param typeName - The expected type name to match against.
 * @param value - The value to check.
 * @param trueFunc - The callback to invoke if the type matches.
 * @param isFunc - Optional additional predicate that must also return true.
 * @returns The result of trueFunc if the type matches (and isFunc passes), or undefined.
 */
export const ifTypeOf = <T, R>(typeName: TypeOfTypes, value: unknown, trueFunc: (value: T) => R, isFunc?: (value: T) => boolean) => {
  switch (typeOf(value)) {
    case typeName: {
      return !isFunc || isFunc(value as T) ? trueFunc(value as T) : undefined
    }
  }
}
