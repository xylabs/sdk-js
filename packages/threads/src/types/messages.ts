/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/member-ordering */

/** Serialized representation of an Error for transmission between threads. */
export interface SerializedError {
  __error_marker: '$$error'
  message: string
  name: string
  stack?: string
}

/////////////////////////////
// Messages sent by master:

/** Types of messages that the master thread can send to a worker. */
export enum MasterMessageType {
  cancel = 'cancel',
  run = 'run',
}

/** Message sent by the master to cancel a running job. */
export type MasterJobCancelMessage = {
  type: MasterMessageType.cancel
  uid: number
}

/** Message sent by the master to run a function in the worker. */
export type MasterJobRunMessage = {
  type: MasterMessageType.run
  uid: number
  method?: string
  args: any[]
}

////////////////////////////
// Messages sent by worker:

/** Types of messages that a worker thread can send to the master. */
export enum WorkerMessageType {
  error = 'error',
  init = 'init',
  result = 'result',
  running = 'running',
  uncaughtError = 'uncaughtError',
}

/** Message sent by a worker when an uncaught error occurs. */
export type WorkerUncaughtErrorMessage = {
  type: WorkerMessageType.uncaughtError
  error: {
    message: string
    name: string
    stack?: string
  }
}

/** Message sent by a worker after calling `expose()` to signal its API to the master. */
export type WorkerInitMessage = {
  type: WorkerMessageType.init
  exposed: { type: 'function' } | { type: 'module'; methods: string[] }
}

/** Message sent by a worker when a job encounters an error. */
export type WorkerJobErrorMessage = {
  type: WorkerMessageType.error
  uid: number
  error: SerializedError
}

/** Message sent by a worker containing a job's result value. */
export type WorkerJobResultMessage = {
  type: WorkerMessageType.result
  uid: number
  complete?: true
  payload?: any
}

/** Message sent by a worker when a job starts executing. */
export type WorkerJobStartMessage = {
  type: WorkerMessageType.running
  uid: number
  resultType: 'observable' | 'promise'
}
