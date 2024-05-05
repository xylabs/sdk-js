import { TypedObject } from '@xylabs/promise'

import { AsTypeFactory, TypeCheck } from './AsTypeFactory'

export const AsObjectFactory = {
  create: <T extends TypedObject, E = void>(typeCheck: TypeCheck<T, E>) => {
    return AsTypeFactory.create<T, E>(typeCheck)
  },
}
