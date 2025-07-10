import type { AnyObject } from '@xylabs/object-model'
import type { Promisable } from '@xylabs/promise'

import type { EmptyObject } from './EmptyObject.ts'
import { ObjectWrapper } from './ObjectWrapper.ts'

export interface Validator<T extends EmptyObject = AnyObject> {
  validate(payload: T): Promisable<Error[]>
}

export abstract class ValidatorBase<T extends EmptyObject = AnyObject> extends ObjectWrapper<Partial<T>> implements Validator<T> {
  abstract validate(payload: T): Promisable<Error[]>
}
