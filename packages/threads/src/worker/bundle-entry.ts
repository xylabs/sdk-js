/* eslint-disable @typescript-eslint/no-explicit-any */
import { expose } from './index'
export * from './index'

if (typeof globalThis !== 'undefined') {
  ;(globalThis as any).expose = expose
}
if (typeof globalThis !== 'undefined') {
  ;(globalThis as any).expose = expose
}
