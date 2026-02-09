import type { CreatableFactoryV2, CreatableV2 } from './CreatableV2.ts'
import type {
  CreatableInstanceV2, Labels, WithOptionalLabels,
} from './model/index.ts'

export class FactoryV2<T extends CreatableInstanceV2 = CreatableInstanceV2> implements CreatableFactoryV2<T> {
  creatable: CreatableV2<T>

  defaultParams?: Partial<T['params']>

  labels?: Labels

  constructor(
    creatable: CreatableV2<T>,
    params?: Partial<T['params']>,
    labels: Labels = {},
  ) {
    this.creatable = creatable
    this.defaultParams = params
    this.labels = Object.assign({}, (creatable as WithOptionalLabels).labels ?? {}, labels ?? {})
  }

  static withParams<T extends CreatableInstanceV2>(
    creatableModule: CreatableV2<T>,
    params?: Partial<T['params']>,
    labels: Labels = {},
  ) {
    return new FactoryV2<T>(creatableModule, params, labels)
  }

  create(params?: Partial<T['params']>): Promise<T> {
    const mergedParams: T['params'] = {
      ...this.defaultParams,
      ...params,
    } as T['params']
    return this.creatable.create<T>(mergedParams)
  }
}
