/* eslint-disable no-restricted-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { expose } from './index.ts'
export * from './index.ts'

if (typeof globalThis !== 'undefined') {
  ;(globalThis as any).expose = expose
}
