import { type Creatable, type CreatableFactory } from './Creatable.ts'
import type {
  CreatableInstance, Labels, WithOptionalLabels,
} from './model/index.ts'

/**
 * A concrete factory that wraps a Creatable class with default parameters and labels.
 * Instances are created by merging caller-provided params over the factory defaults.
 */
export class Factory<T extends CreatableInstance = CreatableInstance> implements CreatableFactory<T> {
  /** The Creatable class this factory delegates creation to. */
  creatable: Creatable<T>

  /** Default parameters merged into every `create` call. */
  defaultParams?: Partial<T['params']>

  /** Labels identifying resources created by this factory. */
  labels?: Labels

  constructor(
    creatable: Creatable<T>,
    params?: Partial<T['params']>,
    labels: Labels = {},
  ) {
    this.creatable = creatable
    this.defaultParams = params
    this.labels = Object.assign({}, (creatable as WithOptionalLabels).labels ?? {}, labels ?? {})
  }

  /**
   * Creates a new Factory instance with the given default params and labels.
   * @param creatableModule - The Creatable class to wrap
   * @param params - Default parameters for new instances
   * @param labels - Labels to assign to created instances
   */
  static withParams<T extends CreatableInstance>(
    creatableModule: Creatable<T>,
    params?: Partial<T['params']>,
    labels: Labels = {},
  ) {
    return new Factory<T>(creatableModule, params, labels)
  }

  /**
   * Creates a new instance, merging the provided params over the factory defaults.
   * @param params - Optional parameters to override the factory defaults
   */
  create(params?: Partial<T['params']>): Promise<T> {
    const mergedParams: T['params'] = {
      ...this.defaultParams,
      ...params,
    } as T['params']
    return this.creatable.create<T>(mergedParams)
  }
}
