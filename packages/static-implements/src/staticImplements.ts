/**
 * Annotation to be used to decorate classes which support
 * an asynchronous creation pattern
 * @returns The decorated Module requiring it implement the members
 * of the CreatableModule as statics properties/methods
 */
export function staticImplements<T>() {
  return <U extends T>(constructor: U) => {
    constructor
  }
}
