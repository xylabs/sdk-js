import type { Logger } from '@xylabs/logger'
import type { EmptyObject } from '@xylabs/object'

import type { AbstractCreatable } from './AbstractCreatable.ts'
import type { CreatableInstance } from './CreatableInstance.ts'
import type { CreatableParams } from './CreatableParams.ts'

/*
export interface CreatableFactory<T extends EmptyObject | void = void,
  TParams extends EmptyObject | void = void> {
  create(params?: CreatableParams<TParams>): Promise<CreatableInstance<T>>
}
*/

export interface Creatable<T extends EmptyObject | void = void, TParams extends EmptyObject | void = void> {

  defaultLogger?: Logger

  new (params: Partial<CreatableParams<TParams>>): CreatableInstance<T> & AbstractCreatable<TParams>

  create<T extends EmptyObject | void = void, TParams extends EmptyObject | void = void>(
    this: Creatable<T, TParams>,
    params: Partial<CreatableParams<TParams>>): Promise<CreatableInstance<T>>

  /*
  factory<T extends EmptyObject | void = void,
    TParams extends EmptyObject | void = void> (this: Creatable<T, TParams>, params: Partial<CreatableParams<TParams>>): CreatableFactory<T, TParams>
  */
}

/**
 * Class annotation to be used to decorate Modules which support
 * an asynchronous creation pattern
 * @returns The decorated Module requiring it implement the members
 * of the CreatableModule as statics properties/methods
 */
export function creatable<TInstance extends EmptyObject | void = void, TParams extends EmptyObject | void = void>() {
  return <U extends Creatable<TInstance, TParams>>(constructor: U) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    constructor
  }
}

/**
 * Class annotation to be used to decorate Modules which support
 * an asynchronous creation factory pattern
 * @returns The decorated Module requiring it implement the members
 * of the CreatableModule as statics properties/methods
 */

/*
export function creatableFactory() {
  return <U extends CreatableFactory>(constructor: U) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    constructor
  }
}
*/
