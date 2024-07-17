import { typeOf } from './typeOf.js'
import { TypeOfTypes } from './TypeOfTypes.js'

export const ifTypeOf = <T, R>(typeName: TypeOfTypes, value: unknown, trueFunc: (value: T) => R, isFunc?: (value: T) => boolean) => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (typeOf(value)) {
    case typeName: {
      return !isFunc || isFunc(value as T) ? trueFunc(value as T) : undefined
    }
  }
}
