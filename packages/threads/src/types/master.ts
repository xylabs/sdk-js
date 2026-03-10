/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference lib="dom" />
// tslint:disable max-classes-per-file

// Cannot use `compilerOptions.esModuleInterop` and default import syntax
// See <https://github.com/microsoft/TypeScript/issues/28009>
import type { Observable } from 'observable-fns'

import type { ObservablePromise } from '../observable-promise.ts'
import type {
  $errors, $events, $terminate, $worker,
} from '../symbols.ts'
import type { TransferDescriptor } from '../transferable.ts'

interface ObservableLikeSubscription {
  unsubscribe(): any
}
interface ObservableLike<T> {
  subscribe(onNext: (value: T) => any, onError?: (error: any) => any, onComplete?: () => any): ObservableLikeSubscription
  subscribe(listeners: { complete?(): any; error?(error: any): any; next?(value: T): any }): ObservableLikeSubscription
}

/** Unwraps `Promise<T>` or `ObservableLike<T>` to their inner type `T`. */
export type StripAsync<Type> =
  Type extends Promise<infer PromiseBaseType> ? PromiseBaseType
    : Type extends ObservableLike<infer ObservableBaseType> ? ObservableBaseType
      : Type

type StripTransfer<Type> = Type extends TransferDescriptor<infer BaseType> ? BaseType : Type

/** An object whose keys are method names and values are functions, representing a worker module's methods. */
export type ModuleMethods = { [methodName: string]: (...args: any) => any }

type ProxyableArgs<Args extends any[]> =
  Args extends [arg0: infer Arg0, ...rest: infer RestArgs] ? [Arg0 extends Transferable ? Arg0 | TransferDescriptor<Arg0> : Arg0, ...RestArgs] : Args

/** A function proxied from a worker thread, returning an `ObservablePromise` of the unwrapped result. */
export type ProxyableFunction<Args extends any[], ReturnType> =
  Args extends [] ? () => ObservablePromise<StripTransfer<StripAsync<ReturnType>>>
    : (...args: ProxyableArgs<Args>) => ObservablePromise<StripTransfer<StripAsync<ReturnType>>>

/** Proxy object mapping a worker module's methods to their proxied counterparts. */
export type ModuleProxy<Methods extends ModuleMethods> = {
  [method in keyof Methods]: ProxyableFunction<Parameters<Methods[method]>, ReturnType<Methods[method]>>
}

/** Internal symbol-keyed properties attached to every spawned thread. */
export interface PrivateThreadProps {
  [$errors]: Observable<Error>
  [$events]: Observable<WorkerEvent>
  [$terminate]: () => Promise<void>
  [$worker]: Worker
}

/** A thread wrapping a single exposed function. */
export type FunctionThread<Args extends any[] = any[], ReturnType = any> = ProxyableFunction<Args, ReturnType> & PrivateThreadProps
/** A thread wrapping an exposed module of functions. */
export type ModuleThread<Methods extends ModuleMethods = any> = ModuleProxy<Methods> & PrivateThreadProps

// We have those extra interfaces to keep the general non-specific `Thread` type
// as an interface, so it's displayed concisely in any TypeScript compiler output.
interface AnyFunctionThread extends PrivateThreadProps {
  (...args: any[]): ObservablePromise<any>
}

// tslint:disable-next-line no-empty-interface
interface AnyModuleThread extends PrivateThreadProps {
  // Not specifying an index signature here as that would make `ModuleThread` incompatible
}

/** Worker thread. Either a `FunctionThread` or a `ModuleThread`. */
export type Thread = AnyFunctionThread | AnyModuleThread

/** List of `Transferable` objects to be transferred with a message. */
export type TransferList = Transferable[]

/** Worker instance. Either a web worker or a node.js Worker provided by `worker_threads`. */
export interface Worker extends EventTarget {
  postMessage(value: any, transferList?: TransferList): void
  /** In nodejs return type is Promise while in browser return type is void */
  terminate(callback?: (error?: Error, exitCode?: number) => void): void | Promise<number>
}
/** Options for configuring a worker thread, extending the standard `WorkerOptions`. */
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

/** Export shape for platform-specific worker implementations. */
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

/** Event indicating an internal error occurred in the worker. */
export interface WorkerInternalErrorEvent {
  error: Error
  type: WorkerEventType.internalError
}

/** Event containing a message received from the worker. */
export interface WorkerMessageEvent<Data> {
  data: Data
  type: WorkerEventType.message
}

/** Event indicating the worker has been terminated. */
export interface WorkerTerminationEvent {
  type: WorkerEventType.termination
}

/** Union of all possible worker event types. */
export type WorkerEvent = WorkerInternalErrorEvent | WorkerMessageEvent<any> | WorkerTerminationEvent
