/* eslint-disable import-x/no-internal-modules */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-floating-promises */
import DebugLogger from 'debug'
import { Observable } from 'observable-fns'

import { deserialize } from '../common.ts'
import { createPromiseWithResolver } from '../promise.ts'
import {
  $errors, $events, $terminate, $worker,
} from '../symbols.ts'
import type {
  FunctionThread,
  ModuleThread,
  PrivateThreadProps,
  StripAsync,
  Worker as WorkerType,
  WorkerEvent,
  WorkerInternalErrorEvent,
  WorkerMessageEvent,
  WorkerTerminationEvent,
} from '../types/master.ts'
import { WorkerEventType } from '../types/master.ts'
import type { WorkerInitMessage, WorkerUncaughtErrorMessage } from '../types/messages.ts'
import type { WorkerFunction, WorkerModule } from '../types/worker.ts'
import { createProxyFunction, createProxyModule } from './invocation-proxy.ts'

type ArbitraryWorkerInterface = WorkerFunction & WorkerModule<string> & { somekeythatisneverusedinproductioncode123: 'magicmarker123' }
type ArbitraryThreadType = FunctionThread<any, any> & ModuleThread<any>

export type ExposedToThreadType<Exposed extends WorkerFunction | WorkerModule<any>> =
  Exposed extends ArbitraryWorkerInterface ? ArbitraryThreadType
    : Exposed extends WorkerFunction ? FunctionThread<Parameters<Exposed>, StripAsync<ReturnType<Exposed>>>
      : Exposed extends WorkerModule<any> ? ModuleThread<Exposed>
        : never

const debugMessages = DebugLogger('threads:master:messages')
const debugSpawn = DebugLogger('threads:master:spawn')
const debugThreadUtils = DebugLogger('threads:master:thread-utils')

const isInitMessage = (data: any): data is WorkerInitMessage => data && data.type === ('init' as const)
const isUncaughtErrorMessage = (data: any): data is WorkerUncaughtErrorMessage => data && data.type === ('uncaughtError' as const)

const initMessageTimeout
  = typeof process !== 'undefined' && process.env !== undefined && process.env.THREADS_WORKER_INIT_TIMEOUT
    ? Number.parseInt(process.env.THREADS_WORKER_INIT_TIMEOUT, 10)
    : 10_000

async function withTimeout<T>(promise: Promise<T>, timeoutInMs: number, errorMessage: string): Promise<T> {
  let timeoutHandle: any

  const timeout = new Promise<never>((resolve, reject) => {
    timeoutHandle = setTimeout(() => reject(new Error(errorMessage)), timeoutInMs)
  })
  const result = await Promise.race([promise, timeout])

  clearTimeout(timeoutHandle)
  return result
}

function receiveInitMessage(worker: WorkerType): Promise<WorkerInitMessage> {
  return new Promise((resolve, reject) => {
    const messageHandler = ((event: MessageEvent) => {
      debugMessages('Message from worker before finishing initialization:', event.data)
      if (isInitMessage(event.data)) {
        worker.removeEventListener('message', messageHandler)
        resolve(event.data)
      } else if (isUncaughtErrorMessage(event.data)) {
        worker.removeEventListener('message', messageHandler)
        reject(deserialize(event.data.error))
      }
    }) as EventListener
    worker.addEventListener('message', messageHandler)
  })
}

function createEventObservable(worker: WorkerType, workerTermination: Promise<any>): Observable<WorkerEvent> {
  return new Observable<WorkerEvent>((observer) => {
    const messageHandler = ((messageEvent: MessageEvent) => {
      const workerEvent: WorkerMessageEvent<any> = {
        data: messageEvent.data,
        type: WorkerEventType.message,
      }
      observer.next(workerEvent)
    }) as EventListener
    const rejectionHandler = ((errorEvent: PromiseRejectionEvent) => {
      debugThreadUtils('Unhandled promise rejection event in thread:', errorEvent)
      const workerEvent: WorkerInternalErrorEvent = {
        error: new Error(errorEvent.reason),
        type: WorkerEventType.internalError,
      }
      observer.next(workerEvent)
    }) as EventListener
    worker.addEventListener('message', messageHandler)
    worker.addEventListener('unhandledrejection', rejectionHandler)

    workerTermination.then(() => {
      const terminationEvent: WorkerTerminationEvent = { type: WorkerEventType.termination }
      worker.removeEventListener('message', messageHandler)
      worker.removeEventListener('unhandledrejection', rejectionHandler)
      observer.next(terminationEvent)
      observer.complete()
    })
  })
}

function createTerminator(worker: WorkerType): { terminate: () => Promise<void>; termination: Promise<void> } {
  const [termination, resolver] = createPromiseWithResolver<void>()
  const terminate = async () => {
    debugThreadUtils('Terminating worker')
    // Newer versions of worker_threads workers return a promise
    await worker.terminate()
    resolver()
  }
  return { terminate, termination }
}

function setPrivateThreadProps<T>(
  raw: T,
  worker: WorkerType,
  workerEvents: Observable<WorkerEvent>,
  terminate: () => Promise<void>,
): T & PrivateThreadProps {
  const workerErrors = workerEvents
    .filter(event => event.type === WorkerEventType.internalError)
    .map(errorEvent => (errorEvent as WorkerInternalErrorEvent).error)

  return Object.assign(raw as any, {
    [$errors]: workerErrors,
    [$events]: workerEvents,
    [$terminate]: terminate,
    [$worker]: worker,
  })
}

/**
 * Spawn a new thread. Takes a fresh worker instance, wraps it in a thin
 * abstraction layer to provide the transparent API and verifies that
 * the worker has initialized successfully.
 *
 * @param worker Instance of `Worker`. Either a web worker, `worker_threads` worker or `tiny-worker` worker.
 * @param [options]
 * @param [options.timeout] Init message timeout. Default: 10000 or set by environment variable.
 */
export async function spawn<Exposed extends WorkerFunction | WorkerModule<any> = ArbitraryWorkerInterface>(
  worker: WorkerType,
  options?: { timeout?: number },
): Promise<ExposedToThreadType<Exposed>> {
  debugSpawn('Initializing new thread')

  const timeout = options && options.timeout ? options.timeout : initMessageTimeout
  const initMessage = await withTimeout(
    receiveInitMessage(worker),
    timeout,
    `Timeout: Did not receive an init message from worker after ${timeout}ms. Make sure the worker calls expose().`,
  )
  const exposed = initMessage.exposed

  const { termination, terminate } = createTerminator(worker)
  const events = createEventObservable(worker, termination)

  if (exposed.type === 'function') {
    const proxy = createProxyFunction(worker)
    return setPrivateThreadProps(proxy, worker, events, terminate) as ExposedToThreadType<Exposed>
  } else if (exposed.type === 'module') {
    const proxy = createProxyModule(worker, exposed.methods)
    return setPrivateThreadProps(proxy, worker, events, terminate) as ExposedToThreadType<Exposed>
  } else {
    const type = (exposed as WorkerInitMessage['exposed']).type
    throw new Error(`Worker init message states unexpected type of expose(): ${type}`)
  }
}
