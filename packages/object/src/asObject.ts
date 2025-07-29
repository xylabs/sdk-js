import type { AnyObject } from '@xylabs/object-model'
import { isObject } from '@xylabs/typeof'

import { AsObjectFactory } from './AsObjectFactory.ts'

export const asAnyObject = (() => AsObjectFactory.create<AnyObject>(<T extends AnyObject>(obj: unknown): obj is T => isObject(obj)))()
