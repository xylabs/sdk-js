import { TypedObject } from '@xylabs/promise'

import { AsTypeFactory, TypeCheck } from './AsTypeFactory'

export const AsObjectFactory = {
  create: <T extends TypedObject>(typeCheck: TypeCheck<T>) => {
    return AsTypeFactory.create<T>(typeCheck)
  },
}
