import type { Logger } from '@xylabs/logger'
import type { EmptyObject } from '@xylabs/object'

import type { CreatableParams } from './AbstractCreatable.ts'
import type { BaseClassName } from './Base.ts'

export type CreatableName = Exclude<string, 'creatable-name-reserved-32546239486'> & BaseClassName

export interface CreatableInstanceFields {
  name: CreatableName
}

export type CreatableInstance<T extends EmptyObject | void = void> = T extends EmptyObject ? T & CreatableInstanceFields : CreatableInstanceFields

export interface CreatableFactory<T extends EmptyObject | void = void,
  TParams extends EmptyObject | void = void> {
  create(params?: CreatableParams<TParams>): Promise<CreatableInstance<T>>
}

export interface Creatable<T extends EmptyObject | void = void, TParams extends EmptyObject | void = void> {

  defaultLogger?: Logger

  new (params: CreatableParams<TParams>): CreatableInstance<T>

  create<T extends EmptyObject | void = void, TParams extends EmptyObject | void = void>(
    this: Creatable<T, TParams>,
    params: CreatableParams<TParams>): Promise<CreatableInstance<T>>

  factory<T extends EmptyObject | void = void,
    TParams extends EmptyObject | void = void> (this: Creatable<T, TParams>, params: CreatableParams<TParams>): CreatableFactory<T, TParams>
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
export function creatableFactory() {
  return <U extends CreatableFactory>(constructor: U) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    constructor
  }
}
