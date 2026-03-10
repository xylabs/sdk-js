import type { AnyObject } from '@xylabs/object-model'
import type { Promisable } from '@xylabs/promise'

import type { EmptyObject } from './EmptyObject.ts'
import { ObjectWrapper } from './ObjectWrapper.ts'

/** Interface for validating objects and returning any errors found. */
export interface Validator<T extends EmptyObject = AnyObject> {
  validate(payload: T): Promisable<Error[]>
}

/** Abstract base class for validators that wraps a partial object and provides a validation method. */
export abstract class ValidatorBase<T extends EmptyObject = AnyObject> extends ObjectWrapper<Partial<T>> implements Validator<T> {
  abstract validate(payload: T): Promisable<Error[]>
}
