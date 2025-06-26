import type { EmptyObject } from './EmptyObject.ts'

export type WithAdditional<T extends EmptyObject | void, TAdditional extends EmptyObject | void = void>
  = TAdditional extends EmptyObject ? T & TAdditional : T
