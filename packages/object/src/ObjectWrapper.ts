import type { EmptyObject } from './EmptyObject.ts'
import type { StringKeyObject } from './StringKeyObject.ts'

export abstract class ObjectWrapper<T extends EmptyObject = EmptyObject> {
  readonly obj: T
  constructor(obj: T) {
    this.obj = obj
  }

  protected get stringKeyObj() {
    return this.obj as StringKeyObject
  }
}
