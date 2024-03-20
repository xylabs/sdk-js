import { TypedObject } from '@xylabs/promise'

import { AsObjectFactory } from './AsObjectFactory'
import { isObject } from './isObject'

export const asAnyObject = (() => AsObjectFactory.create<TypedObject>(<T extends TypedObject>(obj: unknown): obj is T => isObject(obj)))()
