/**
 * Annotation to decorate classes which implement static methods
 * @returns The decorated class requiring it to implement
 * the members of the the type as static properties/methods
 */
export function staticImplements<T>() {
  return <U extends T>(constructor: U) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    constructor
  }
}
