import type { Logger } from '@xylabs/logger'
import type { Promisable } from '@xylabs/promise'

import type { AbstractCreatable } from './AbstractCreatable.ts'
import type {
  CreatableInstance, CreatableParams, Labels,
} from './model/index.ts'

export interface CreatableFactory<T extends CreatableInstance = CreatableInstance>
  extends Omit<Creatable<T>, 'create' | 'createHandler' | 'paramsHandler' | 'defaultLogger' | 'factory'> {

  create(
    this: CreatableFactory<T>,
    params?: Partial<T['params']>): Promise<T>
}

export interface Creatable<T extends CreatableInstance = CreatableInstance> {

  defaultLogger?: Logger

  new(key: unknown, params: Partial<CreatableParams>): T & AbstractCreatable<T['params']>

  create<T extends CreatableInstance>(
    this: Creatable<T>,
    params?: Partial<T['params']>): Promise<T>

  createHandler<T extends CreatableInstance>(
    this: Creatable<T>,
    instance: T
  ): Promisable<T>

  paramsHandler<T extends CreatableInstance>(
    this: Creatable<T>, params?: Partial<T['params']>): Promisable<T['params']>
}

export interface CreatableWithFactory<T extends CreatableInstance = CreatableInstance> extends Creatable<T> {
  factory<T extends CreatableInstance>(
    this: Creatable<T>,
    params?: Partial<T['params']>,
    labels?: Labels): CreatableFactory<T>
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

export function creatableFactory() {
  return <U extends CreatableFactory>(constructor: U) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    constructor
  }
}
