import type { EmptyObject } from './EmptyObject.ts'
import type { StringKeyObject } from './StringKeyObject.ts'

/** Abstract base class that wraps an object and provides typed access to it. */
export abstract class ObjectWrapper<T extends EmptyObject = EmptyObject> {
  readonly obj: T
  constructor(obj: T) {
    this.obj = obj
  }

  protected get stringKeyObj() {
    return this.obj as StringKeyObject
  }
}
