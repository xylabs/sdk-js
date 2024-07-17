import { typeOf } from './typeOf.js'
import { TypeOfTypes } from './TypeOfTypes.js'

export const validateType = <T>(typeName: TypeOfTypes, value: T, optional = false): [T | undefined, Error[]] => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (typeOf(value)) {
    case typeName: {
      return [value, []]
    }
    default: {
      if (optional && typeOf(value) === 'undefined') {
        return [value, []]
      }
      return [undefined, [new Error(`value type is not '${typeName}:${typeof value}'`)]]
    }
  }
}
