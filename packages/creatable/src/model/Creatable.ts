import type { Promisable } from '@xylabs/promise'

import type { AbstractCreatable } from '../AbstractCreatable.ts'
import type { CreatableInstance } from './CreatableInstance.ts'
import type { CreatableParams } from './CreatableParams.ts'

export interface CreatableFactory<T extends CreatableInstance = CreatableInstance> {
  create(
    params?: Partial<T['params']>): Promise<T>
}

export interface Creatable<T extends CreatableInstance = CreatableInstance> extends CreatableFactory<T> {

  new(key: unknown, params: Partial<CreatableParams>): T & AbstractCreatable<T['params']>

  create<T extends CreatableInstance>(
    this: Creatable<T>,
    params?: Partial<T['params']>): Promise<T>

  createHandler<T extends CreatableInstance>(
    this: Creatable<T>,
    instance: T
  ): Promisable<T>

  factory<T extends CreatableInstance> (this: Creatable<T>, params?: Partial<T['params']>): CreatableFactory<T>

  paramsHandler<T extends CreatableInstance>(
    this: Creatable<T>, params?: Partial<T['params']>): Promisable<Partial<T['params']>>
}

/**
 * Class annotation to be used to decorate Modules which support
 * an asynchronous creation pattern
 * @returns The decorated Module requiring it implement the members
 * of the CreatableModule as statics properties/methods
 */
export function creatable<T extends CreatableInstance>() {
  return <U extends Creatable<T>>(constructor: U) => {
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
