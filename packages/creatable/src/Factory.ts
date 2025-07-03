import { type Creatable, type CreatableFactory } from './Creatable.ts'
import type {
  CreatableInstance, Labels, WithOptionalLabels,
} from './model/index.ts'

export class Factory<T extends CreatableInstance = CreatableInstance> implements CreatableFactory<T> {
  creatable: Creatable<T>

  defaultParams?: Partial<T['params']>

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

  static withParams<T extends CreatableInstance>(
    creatableModule: Creatable<T>,
    params?: Partial<T['params']>,
    labels: Labels = {},
  ) {
    return new Factory<T>(creatableModule, params, labels)
  }

  create(params?: Partial<T['params']>): Promise<T> {
    const mergedParams: T['params'] = {
      ...this.defaultParams,
      ...params,
    } as T['params']
    return this.creatable.create<T>(mergedParams)
  }

  factory<T extends CreatableInstance>(this: Factory<T>, params?: Partial<T['params']>, labels: Labels = {}): CreatableFactory<T> {
    return new Factory<T>(this.creatable, params, labels)
  }
}
