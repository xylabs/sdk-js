import type { Logger } from '@xylabs/logger'
import type { Promisable } from '@xylabs/promise'

import type {
  CreatableInstanceV2, CreatableParamsV2, Labels,
} from './model/index.ts'

export interface CreatableFactoryV2<T extends CreatableInstanceV2 = CreatableInstanceV2>
  extends Omit<CreatableV2<T>, 'create' | 'createHandler' | 'paramsHandler' | 'defaultLogger' | 'factory'> {

  create(
    this: CreatableFactoryV2<T>,
    params: T['params']): Promise<T>
}

export interface CreatableV2<T extends CreatableInstanceV2 = CreatableInstanceV2> {

  defaultLogger?: Logger

  new(key: unknown, params: CreatableParamsV2): T

  create<T extends CreatableInstanceV2>(
    this: CreatableV2<T>,
    params: T['params']): Promise<T>

  createHandler<T extends CreatableInstanceV2>(
    this: CreatableV2<T>,
    instance: T
  ): Promisable<T>

  paramsHandler<T extends CreatableInstanceV2>(
    this: CreatableV2<T>, params: Partial<T['params']>): Promisable<T['params']>
}

export interface CreatableWithFactoryV2<T extends CreatableInstanceV2 = CreatableInstanceV2> extends CreatableV2<T> {
  factory<T extends CreatableInstanceV2>(
    this: CreatableV2<T>,
    params: T['params'],
    labels?: Labels): CreatableFactoryV2<T>
}

/**
 * Class annotation to be used to decorate Modules which support
 * an asynchronous creation pattern
 * @returns The decorated Module requiring it implement the members
 * of the CreatableModule as statics properties/methods
 */
export function creatableV2<T extends CreatableInstanceV2>() {
  return <U extends CreatableV2<T>>(constructor: U) => {
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

export function creatableFactoryV2() {
  return <U extends CreatableFactoryV2>(constructor: U) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    constructor
  }
}
