/**
 * An empty object, which means that it does enforce the set of field names, defaulting to an empty set until
 * extended from, which then adds only those additional fields
 */

export type EmptyObject<T extends object = object> = Exclude<{ [K in keyof T]?: never }, unknown[] | ((...args: unknown[]) => unknown) | null>

/* export type EmptyObjectExperimental = Exclude<

  Record<TypedKey, unknown>,
  unknown[] | ((...args: unknown[]) => unknown) | null
> */

/*
const foo: EmptyObjectExperimental = {}
const bar: EmptyObjectExperimental = []
const baz: EmptyObjectExperimental = () => null
const qux: EmptyObjectExperimental = null

type x = EmptyObjectExperimental & { test: boolean }

const y: x = { test: true, arie: 1 }

export type AnyObject = EmptyObjectExperimental & Partial<Record<TypedKey, unknown>>

export abstract class ValidatorBase<T extends EmptyObjectExperimental = AnyObject> {
  abstract validate(payload: T): Promise<Error[]>
}
*/
