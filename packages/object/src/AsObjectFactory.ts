import type { TypeCheck } from '@xylabs/object-model'
import type { TypedObject } from '@xylabs/typeof'

import { AsTypeFactory } from './AsTypeFactory.ts'

export const AsObjectFactory = {
  create: <T extends TypedObject>(typeCheck: TypeCheck<T>) => {
    return AsTypeFactory.create<T>(typeCheck)
  },
  createOptional: <T extends TypedObject>(typeCheck: TypeCheck<T>) => {
    return AsTypeFactory.createOptional<T>(typeCheck)
  },
}
