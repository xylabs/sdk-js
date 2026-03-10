import type { AnyObject } from '@xylabs/object-model'
import { isObject } from '@xylabs/typeof'

import { AsObjectFactory } from './AsObjectFactory.ts'

/** Type-narrowing function that casts a value to AnyObject if it is a plain object, or returns undefined. */
export const asAnyObject = (() => AsObjectFactory.create<AnyObject>(<T extends AnyObject>(obj: unknown): obj is T => isObject(obj)))()
