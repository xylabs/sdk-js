/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line no-restricted-imports
import { Worker as WorkerImplementation } from './index.ts'

declare const window: any

if (typeof globalThis !== 'undefined') {
  ;(globalThis as any).Worker = WorkerImplementation
} else if (window !== undefined) {
  ;(window as any).Worker = WorkerImplementation
}
