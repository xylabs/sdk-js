import type { TypedObject } from '@xylabs/promise'

import type { TypeCheck } from './AsTypeFactory.ts'
import { AsTypeFactory } from './AsTypeFactory.ts'

export const AsObjectFactory = {
  create: <T extends TypedObject>(typeCheck: TypeCheck<T>) => {
    return AsTypeFactory.create<T>(typeCheck)
  },
}
