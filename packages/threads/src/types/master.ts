/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference lib="dom" />
// tslint:disable max-classes-per-file

// Cannot use `compilerOptions.esModuleInterop` and default import syntax
// See <https://github.com/microsoft/TypeScript/issues/28009>
import { Observable } from 'observable-fns'

import { ObservablePromise } from '../observable-promise'
import { $errors, $events, $terminate, $worker } from '../symbols'
import { TransferDescriptor } from '../transferable'

interface ObservableLikeSubscription {
  unsubscribe(): any
}
interface ObservableLike<T> {
  subscribe(onNext: (value: T) => any, onError?: (error: any) => any, onComplete?: () => any): ObservableLikeSubscription
  subscribe(listeners: { complete?(): any; error?(error: any): any; next?(value: T): any }): ObservableLikeSubscription
}

export type StripAsync<Type> =
  Type extends Promise<infer PromiseBaseType> ? PromiseBaseType
    : Type extends ObservableLike<infer ObservableBaseType> ? ObservableBaseType
      : Type

export type StripTransfer<Type> = Type extends TransferDescriptor<infer BaseType> ? BaseType : Type

export type ModuleMethods = { [methodName: string]: (...args: any) => any }

export type ProxyableArgs<Args extends any[]> =
  Args extends [arg0: infer Arg0, ...rest: infer RestArgs] ? [Arg0 extends Transferable ? Arg0 | TransferDescriptor<Arg0> : Arg0, ...RestArgs] : Args

export type ProxyableFunction<Args extends any[], ReturnType> =
  Args extends [] ? () => ObservablePromise<StripTransfer<StripAsync<ReturnType>>>
    : (...args: ProxyableArgs<Args>) => ObservablePromise<StripTransfer<StripAsync<ReturnType>>>

export type ModuleProxy<Methods extends ModuleMethods> = {
  [method in keyof Methods]: ProxyableFunction<Parameters<Methods[method]>, ReturnType<Methods[method]>>
}

export interface PrivateThreadProps {
  [$errors]: Observable<Error>
  [$events]: Observable<WorkerEvent>
  [$terminate]: () => Promise<void>
  [$worker]: Worker
}

export type FunctionThread<Args extends any[] = any[], ReturnType = any> = ProxyableFunction<Args, ReturnType> & PrivateThreadProps
export type ModuleThread<Methods extends ModuleMethods = any> = ModuleProxy<Methods> & PrivateThreadProps

// We have those extra interfaces to keep the general non-specific `Thread` type
// as an interface, so it's displayed concisely in any TypeScript compiler output.
interface AnyFunctionThread extends PrivateThreadProps {
  (...args: any[]): ObservablePromise<any>
}

// tslint:disable-next-line no-empty-interface
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface AnyModuleThread extends PrivateThreadProps {
  // Not specifying an index signature here as that would make `ModuleThread` incompatible
}

/** Worker thread. Either a `FunctionThread` or a `ModuleThread`. */
export type Thread = AnyFunctionThread | AnyModuleThread

export type TransferList = Transferable[]

/** Worker instance. Either a web worker or a node.js Worker provided by `worker_threads` or `tiny-worker`. */
export interface Worker extends EventTarget {
  postMessage(value: any, transferList?: TransferList): void
  /** In nodejs 10+ return type is Promise while with tiny-worker and in browser return type is void */
  terminate(callback?: (error?: Error, exitCode?: number) => void): void | Promise<number>
}
export interface ThreadsWorkerOptions extends WorkerOptions {
  /** Whether to apply CORS protection workaround. Defaults to true. */
  CORSWorkaround?: boolean
  /** Prefix for the path passed to the Worker constructor. Web worker only. */
  _baseURL?: string
  /** Resource limits passed on to Node worker_threads */
  resourceLimits?: {
    /** The size of a pre-allocated memory range used for generated code. */
    codeRangeSizeMb?: number
    /** The maximum size of the main heap in MB. */
    maxOldGenerationSizeMb?: number
    /** The maximum size of a heap space for recently created objects. */
    maxYoungGenerationSizeMb?: number
  }
  /** Data passed on to node.js worker_threads. */
  workerData?: any
}

/** Worker implementation. Either web worker or a node.js Worker class. */
export declare class WorkerImplementation extends EventTarget implements Worker {
  constructor(path: string, options?: ThreadsWorkerOptions)
  postMessage(value: any, transferList?: TransferList): void
  terminate(): void | Promise<number>
}

/** Class to spawn workers from a blob or source string. */
export declare class BlobWorker extends WorkerImplementation {
  constructor(blob: Blob, options?: ThreadsWorkerOptions)
  static fromText(source: string, options?: ThreadsWorkerOptions): WorkerImplementation
}

export interface ImplementationExport {
  blob: typeof BlobWorker
  default: typeof WorkerImplementation
}

/** Event as emitted by worker thread. Subscribe to using `Thread.events(thread)`. */
export enum WorkerEventType {
  internalError = 'internalError',
  message = 'message',
  termination = 'termination',
}

export interface WorkerInternalErrorEvent {
  error: Error
  type: WorkerEventType.internalError
}

export interface WorkerMessageEvent<Data> {
  data: Data
  type: WorkerEventType.message
}

export interface WorkerTerminationEvent {
  type: WorkerEventType.termination
}

export type WorkerEvent = WorkerInternalErrorEvent | WorkerMessageEvent<any> | WorkerTerminationEvent
