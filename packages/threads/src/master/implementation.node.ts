/* eslint-disable unicorn/prefer-add-event-listener */
/* eslint-disable unicorn/prefer-event-target */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable unicorn/text-encoding-identifier-case */

import { cpus } from 'node:os'
import path from 'node:path'
import { cwd } from 'node:process'
import { isMainThread, Worker as NativeWorker } from 'node:worker_threads'

import type {
  ImplementationExport, ThreadsWorkerOptions, WorkerImplementation,
// eslint-disable-next-line import-x/no-internal-modules
} from '../types/master.ts'

/** Default thread pool size based on the number of CPU cores. */
export const defaultPoolSize = cpus().length

function resolveScriptPath(scriptPath: string, baseURL?: string | undefined) {
  const makeAbsolute = (filePath: string) => {
    return path.isAbsolute(filePath) ? filePath : path.join(baseURL ?? cwd(), filePath)
  }

  const absolutePath = makeAbsolute(scriptPath)
  return absolutePath
}

function initWorkerThreadsWorker(): ImplementationExport {
  let allWorkers: Array<NativeWorker> = []

  class Worker extends NativeWorker {
    private mappedEventListeners: WeakMap<EventListener, EventListener>

    constructor(scriptPath: string, options?: ThreadsWorkerOptions & { fromSource: boolean }) {
      const resolvedScriptPath = options && options.fromSource ? null : resolveScriptPath(scriptPath, (options ?? {})._baseURL)
      if (resolvedScriptPath) {
        super(resolvedScriptPath, options)
      } else {
        // `options.fromSource` is true
        const sourceCode = scriptPath
        super(sourceCode, { ...options, eval: true })
      }

      this.mappedEventListeners = new WeakMap()
      allWorkers.push(this)
    }

    addEventListener(eventName: string, rawListener: EventListener) {
      const listener = (message: any) => {
        rawListener({ data: message } as any)
      }
      this.mappedEventListeners.set(rawListener, listener)
      this.on(eventName, listener)
    }

    removeEventListener(eventName: string, rawListener: EventListener) {
      const listener = this.mappedEventListeners.get(rawListener) || rawListener
      this.off(eventName, listener)
    }
  }

  const terminateWorkersAndMaster = () => {
    // we should terminate all workers and then gracefully shutdown self process
    Promise.all(allWorkers.map(worker => worker.terminate())).then(
      () => process.exit(0),
      () => process.exit(1),
    )
    allWorkers = []
  }

  // Take care to not leave orphaned processes behind. See #147.
  process.on('SIGINT', () => terminateWorkersAndMaster())
  process.on('SIGTERM', () => terminateWorkersAndMaster())

  class BlobWorker extends Worker {
    constructor(blob: Uint8Array, options?: ThreadsWorkerOptions) {
      super(Buffer.from(blob).toString('utf-8'), { ...options, fromSource: true })
    }

    static fromText(source: string, options?: ThreadsWorkerOptions): WorkerImplementation {
      return new Worker(source, { ...options, fromSource: true }) as any
    }
  }

  return {
    blob: BlobWorker as any,
    default: Worker as any,
  }
}

let implementation: ImplementationExport

/**
 * Get the Node.js-specific worker implementation using `worker_threads`, lazily initializing it on first call.
 * @returns The platform-specific worker implementation export.
 */
export function getWorkerImplementation(): ImplementationExport {
  if (!implementation) {
    implementation = initWorkerThreadsWorker()
  }
  return implementation
}

/**
 * Check whether the current code is running inside a Node.js worker thread.
 * @returns True if running in a worker thread (not the main thread), false otherwise.
 */
export function isWorkerRuntime() {
  return !isMainThread
}
