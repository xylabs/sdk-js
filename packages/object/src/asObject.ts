import { AnyObject } from './AnyObject.js'
import { AsObjectFactory } from './AsObjectFactory.js'
import { isObject } from './isObject.js'

export const asAnyObject = (() => AsObjectFactory.create<AnyObject>(<T extends AnyObject>(obj: unknown): obj is T => isObject(obj)))()
