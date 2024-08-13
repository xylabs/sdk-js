/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable import-x/no-internal-modules */
/* eslint-disable unicorn/no-process-exit */
/* eslint-disable unicorn/prefer-logical-operator-over-ternary */
/* eslint-disable unicorn/prefer-regexp-test */

/* eslint-disable unicorn/prefer-add-event-listener */
/* eslint-disable unicorn/prefer-event-target */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable unicorn/text-encoding-identifier-case */
/// <reference lib="dom" />

import { EventEmitter } from 'node:events'
import { cpus } from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import getCallsites, { CallSite } from 'callsites-3-1-0'

import { ImplementationExport, ThreadsWorkerOptions, WorkerImplementation } from '../types/master'

interface WorkerGlobalScope {
  addEventListener(eventName: string, listener: (event: Event) => void): void
  postMessage(message: any, transferables?: any[]): void
  removeEventListener(eventName: string, listener: (event: Event) => void): void
}

declare const __non_webpack_require__: typeof require
declare const self: WorkerGlobalScope

type WorkerEventName = 'error' | 'message'

let tsNodeAvailable: boolean | undefined

export const defaultPoolSize = cpus().length

function detectTsNode() {
  if (typeof __non_webpack_require__ === 'function') {
    // Webpack build: => No ts-node required or possible
    return false
  }
  if (tsNodeAvailable) {
    return tsNodeAvailable
  }

  try {
    eval('require').resolve('ts-node')
    tsNodeAvailable = true
  } catch (error) {
    if (error && error.code === 'MODULE_NOT_FOUND') {
      tsNodeAvailable = false
    } else {
      // Re-throw
      throw error
    }
  }
  return tsNodeAvailable
}

function createTsNodeModule(scriptPath: string) {
  return `
    require("ts-node/register/transpile-only");
    require(${JSON.stringify(scriptPath)});
  `
}

function rebaseScriptPath(scriptPath: string, ignoreRegex: RegExp) {
  const parentCallSite = getCallsites().find((callsite: CallSite) => {
    const filename = callsite.getFileName()
    return Boolean(
      filename && !filename.match(ignoreRegex) && !/[/\\]master[/\\]implementation/.test(filename) && !/^internal\/process/.test(filename),
    )
  })

  const rawCallerPath = parentCallSite ? parentCallSite.getFileName() : null
  let callerPath = rawCallerPath ? rawCallerPath : null
  if (callerPath && callerPath.startsWith('file:')) {
    callerPath = fileURLToPath(callerPath)
  }
  return callerPath ? path.join(path.dirname(callerPath), scriptPath) : scriptPath
}

function resolveScriptPath(scriptPath: string, baseURL?: string | undefined) {
  const makeRelative = (filePath: string) => {
    // eval() hack is also webpack-related
    return path.isAbsolute(filePath) ? filePath : path.join(baseURL || eval('__dirname'), filePath)
  }

  return typeof __non_webpack_require__ === 'function'
    ? __non_webpack_require__.resolve(makeRelative(scriptPath))
    : eval('require').resolve(makeRelative(rebaseScriptPath(scriptPath, /[/\\]worker_threads[/\\]/)))
}

function initWorkerThreadsWorker(): ImplementationExport {
  // Webpack hack
  const NativeWorker
    = typeof __non_webpack_require__ === 'function' ? __non_webpack_require__('worker_threads').Worker : eval('require')('worker_threads').Worker

  let allWorkers: Array<typeof NativeWorker> = []

  class Worker extends NativeWorker {
    private mappedEventListeners: WeakMap<EventListener, EventListener>

    constructor(scriptPath: string, options?: ThreadsWorkerOptions & { fromSource: boolean }) {
      const resolvedScriptPath = options && options.fromSource ? null : resolveScriptPath(scriptPath, (options || {})._baseURL)

      if (!resolvedScriptPath) {
        // `options.fromSource` is true
        const sourceCode = scriptPath
        super(sourceCode, { ...options, eval: true })
      } else if (/\.tsx?$/i.test(resolvedScriptPath) && detectTsNode()) {
        super(createTsNodeModule(resolvedScriptPath), { ...options, eval: true })
      } else if (/\.asar[/\\]/.test(resolvedScriptPath)) {
        // See <https://github.com/andywer/threads-plugin/issues/17>
        super(resolvedScriptPath.replace(/\.asar([/\\])/, '.asar.unpacked$1'), options)
      } else {
        super(resolvedScriptPath, options)
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

      if (!resolvedScriptPath) {
        // `options.fromSource` is true
        const sourceCode = scriptPath
        super(new Function(sourceCode), [], { esm: true })
      } else if (/\.tsx?$/i.test(resolvedScriptPath) && detectTsNode()) {
        super(new Function(createTsNodeModule(resolveScriptPath(scriptPath))), [], { esm: true })
      } else if (/\.asar[/\\]/.test(resolvedScriptPath)) {
        // See <https://github.com/andywer/threads-plugin/issues/17>
        super(resolvedScriptPath.replace(/\.asar([/\\])/, '.asar.unpacked$1'), [], { esm: true })
      } else {
        super(resolvedScriptPath, [], { esm: true })
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
  } catch {
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
    return self !== undefined && self['postMessage'] ? true : false
  } else {
    // Webpack hack
    const isMainThread
      = typeof __non_webpack_require__ === 'function'
        ? __non_webpack_require__('worker_threads').isMainThread
        : eval('require')('worker_threads').isMainThread
    return !isMainThread
  }
}
