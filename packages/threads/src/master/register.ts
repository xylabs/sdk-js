/* eslint-disable @typescript-eslint/no-explicit-any */
import { Worker as WorkerImplementation } from './index'

declare const window: any

if (typeof globalThis !== 'undefined') {
  ;(globalThis as any).Worker = WorkerImplementation
} else if (window !== undefined) {
  ;(window as any).Worker = WorkerImplementation
}
