import { EmptyObject } from './EmptyObject.js'
import { StringKeyObject } from './StringKeyObject.js'

export abstract class ObjectWrapper<T extends EmptyObject = EmptyObject> {
  readonly obj: T
  constructor(obj: T) {
    this.obj = obj
  }
  protected get stringKeyObj() {
    return this.obj as StringKeyObject
  }
}
