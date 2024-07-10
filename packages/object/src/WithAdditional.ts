import { EmptyObject } from './EmptyObject.js'

export type WithAdditional<T extends EmptyObject | void, TAdditional extends EmptyObject | void = void> =
  TAdditional extends EmptyObject ? T & TAdditional : T
