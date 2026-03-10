import type { EmptyObject } from './EmptyObject.ts'

/** Intersects T with TAdditional if TAdditional is an object, otherwise returns T unchanged. */
export type WithAdditional<T extends EmptyObject | void, TAdditional extends EmptyObject | void = void>
  = TAdditional extends EmptyObject ? T & TAdditional : T
