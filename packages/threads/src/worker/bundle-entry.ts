/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line no-restricted-imports
import { expose } from './index.ts'
// eslint-disable-next-line no-restricted-imports
export * from './index.ts'

if (typeof globalThis !== 'undefined') {
  ;(globalThis as any).expose = expose
}
if (typeof globalThis !== 'undefined') {
  ;(globalThis as any).expose = expose
}
