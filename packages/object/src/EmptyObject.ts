/**
 * An empty object, which means that it does enforce the set of field names, defaulting to an empty set until
 * extended from, which then adds only those additional fields
 */

// import type { TypedKey } from '@xylabs/typeof'

export type EmptyObject<T extends object = object> = { [K in keyof T]?: never }

/* export type EmptyObject = Exclude<

  Record<TypedKey, never>,
  unknown[] | ((...args: unknown[]) => unknown)
> */

/*
const foo: EmptyObject = {}
const bar: EmptyObject = []
const baz: EmptyObject = () => null
const qux: EmptyObject = null

type x = EmptyObject & { test: boolean }
*/
