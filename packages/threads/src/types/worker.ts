/// <reference lib="webworker" />
/* eslint-disable @typescript-eslint/no-explicit-any */
type UnsubscribeFn = () => void

/** Abstraction layer for the worker runtime API, used by `expose()` to communicate with the master thread. */
export interface AbstractedWorkerAPI {
  isWorkerRuntime(): boolean
  postMessageToMaster(message: any, transferList?: Transferable[]): void
  subscribeToMasterMessages(onMessage: (data: any) => void): UnsubscribeFn
}

/** A function that can be exposed from a worker thread. */
export type WorkerFunction = ((...args: any[]) => any) | (() => any)

/** An object whose values are functions, representing a module exposed from a worker thread. */
export type WorkerModule<Keys extends string> = {
  [key in Keys]: WorkerFunction
}
