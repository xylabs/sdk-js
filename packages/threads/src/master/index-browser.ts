/* eslint-disable import-x/no-internal-modules */
import type { BlobWorker as BlobWorkerClass, Worker as WorkerType } from '../types/master.ts'
import * as BrowserImplementation from './implementation.browser.ts'

export type { FunctionThread, ModuleThread } from '../types/master.ts'
export { Pool } from './pool-node.ts'
export { spawn } from './spawn.ts'
export { Thread } from './thread.ts'

export type BlobWorker = typeof BlobWorkerClass
export type Worker = WorkerType

/** Separate class to spawn workers from source code blobs or strings. */
export const BlobWorker = BrowserImplementation.getWorkerImplementation().blob

/** Worker implementation. Either web worker or a node.js Worker class. */
export const Worker = BrowserImplementation.getWorkerImplementation().default

export { isWorkerRuntime } from './implementation.browser.ts'
