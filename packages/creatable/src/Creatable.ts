import type { Logger } from '@xylabs/logger'
import type { Promisable } from '@xylabs/promise'

import type { AbstractCreatable } from './AbstractCreatable.ts'
import type {
  CreatableInstance, CreatableParams, Labels,
  RequiredCreatableParams,
} from './model/index.ts'

/**
 * A factory interface for creating instances of a Creatable with pre-configured parameters.
 * Unlike the full Creatable, this only exposes the `create` method.
 */
export interface CreatableFactory<T extends CreatableInstance = CreatableInstance>
  extends Omit<Creatable<T>, 'create' | 'createHandler' | 'paramsHandler' | 'defaultLogger' | 'factory'> {

  /** Creates a new instance, merging the provided params with the factory's defaults. */
  create(
    this: CreatableFactory<T>,
    params?: Partial<T['params']>): Promise<T>
}

/**
 * Static interface for classes that support asynchronous creation.
 * Provides the `create`, `createHandler`, and `paramsHandler` static methods
 * used to construct instances through the creatable lifecycle.
 */
export interface Creatable<T extends CreatableInstance = CreatableInstance> {

  /** Optional default logger shared across instances created by this class. */
  defaultLogger?: Logger

  /** Constructs a new raw instance. Should not be called directly; use `create` instead. */
  new(key: unknown, params: Partial<CreatableParams>): T & AbstractCreatable<T['params']>

  /** Asynchronously creates and initializes a new instance with the given params. */
  create<T extends CreatableInstance>(
    this: Creatable<T>,
    params?: Partial<T['params']>): Promise<T>

  /** Hook called after construction to perform additional initialization on the instance. */
  createHandler<T extends CreatableInstance>(
    this: Creatable<T>,
    instance: T
  ): Promisable<T>

  /** Hook called to validate and transform params before instance construction. */
  paramsHandler<T extends CreatableInstance>(
    this: Creatable<T>, params?: Partial<T['params']>): Promisable<T['params'] & RequiredCreatableParams>
}

/** Extends Creatable with a `factory` method that produces pre-configured CreatableFactory instances. */
export interface CreatableWithFactory<T extends CreatableInstance = CreatableInstance> extends Creatable<T> {
  /** Creates a factory with the given default params and labels. */
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
