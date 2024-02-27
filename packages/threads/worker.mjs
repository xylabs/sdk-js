/* eslint-disable import/no-internal-modules */
import * as WorkerContext from './dist/worker/index.js'

export const expose = WorkerContext.expose
export const registerSerializer = WorkerContext.registerSerializer
export const Transfer = WorkerContext.Transfer
export const isWorkerRuntime = WorkerContext.isWorkerRuntime
