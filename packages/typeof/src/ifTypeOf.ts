import { typeOf } from './typeOf.ts'
import type { TypeOfTypes } from './TypeOfTypes.ts'

export const ifTypeOf = <T, R>(typeName: TypeOfTypes, value: unknown, trueFunc: (value: T) => R, isFunc?: (value: T) => boolean) => {
  switch (typeOf(value)) {
    case typeName: {
      return !isFunc || isFunc(value as T) ? trueFunc(value as T) : undefined
    }
  }
}
