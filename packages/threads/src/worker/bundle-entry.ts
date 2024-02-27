/* eslint-disable @typescript-eslint/no-explicit-any */
import { expose } from './index'
export * from './index'

if (typeof global !== 'undefined') {
  ;(global as any).expose = expose
}
if (typeof self !== 'undefined') {
  ;(self as any).expose = expose
}
