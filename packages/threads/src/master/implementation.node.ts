/* eslint-disable @typescript-eslint/no-require-imports */

/* eslint-disable unicorn/prefer-add-event-listener */
/* eslint-disable unicorn/prefer-event-target */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable unicorn/text-encoding-identifier-case */

import { EventEmitter } from 'node:events'
import { cpus } from 'node:os'
import path from 'node:path'
import { cwd } from 'node:process'
import { Worker as NativeWorker } from 'node:worker_threads'

import type {
  ImplementationExport, ThreadsWorkerOptions, WorkerImplementation,
// eslint-disable-next-line import-x/no-internal-modules
} from '../types/master.ts'

declare const __non_webpack_require__: typeof require

type WorkerEventName = 'error' | 'message'

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

function initTinyWorker(): ImplementationExport {
  const TinyWorker = require('tiny-worker')

  let allWorkers: Array<typeof TinyWorker> = []

  class Worker extends TinyWorker {
    private emitter: EventEmitter

    constructor(scriptPath: string, options?: ThreadsWorkerOptions & { fromSource?: boolean }) {
      // Need to apply a work-around for Windows or it will choke upon the absolute path
      // (`Error [ERR_INVALID_PROTOCOL]: Protocol 'c:' not supported`)
      const resolvedScriptPath
        = options && options.fromSource
          ? null
          : process.platform === 'win32'
            ? `file:///${resolveScriptPath(scriptPath).replaceAll('\\', '/')}`
            : resolveScriptPath(scriptPath)

      if (resolvedScriptPath) {
        super(resolvedScriptPath, [], { esm: true })
      } else {
        // `options.fromSource` is true
        const sourceCode = scriptPath
        super(new Function(sourceCode), [], { esm: true })
      }

      allWorkers.push(this)

      this.emitter = new EventEmitter()
      this.onerror = (error: Error) => this.emitter.emit('error', error)
      this.onmessage = (message: MessageEvent) => this.emitter.emit('message', message)
    }

    addEventListener(eventName: WorkerEventName, listener: EventListener) {
      this.emitter.addListener(eventName, listener)
    }

    removeEventListener(eventName: WorkerEventName, listener: EventListener) {
      this.emitter.removeListener(eventName, listener)
    }

    terminate() {
      allWorkers = allWorkers.filter(worker => worker !== this)
      return super.terminate()
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

  // Take care to not leave orphaned processes behind
  // See <https://github.com/avoidwork/tiny-worker#faq>
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
let isTinyWorker: boolean

function selectWorkerImplementation(): ImplementationExport {
  try {
    isTinyWorker = false
    return initWorkerThreadsWorker()
  } catch (ex) {
    console.error(ex)
    // tslint:disable-next-line no-console
    console.debug('Node worker_threads not available. Trying to fall back to tiny-worker polyfill...')
    isTinyWorker = true
    return initTinyWorker()
  }
}

export function getWorkerImplementation(): ImplementationExport {
  if (!implementation) {
    implementation = selectWorkerImplementation()
  }
  return implementation
}

export function isWorkerRuntime() {
  if (isTinyWorker) {
    return globalThis !== undefined && self['postMessage'] ? true : false
  } else {
    // Webpack hack
    const isMainThread
      = typeof __non_webpack_require__ === 'function'
        ? __non_webpack_require__('worker_threads').isMainThread
        : eval('require')('worker_threads').isMainThread
    return !isMainThread
  }
}
