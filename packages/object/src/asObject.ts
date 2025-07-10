import type { AnyObject } from '@xylabs/object-model'

import { AsObjectFactory } from './AsObjectFactory.ts'
import { isObject } from './isObject.ts'

export const asAnyObject = (() => AsObjectFactory.create<AnyObject>(<T extends AnyObject>(obj: unknown): obj is T => isObject(obj)))()
