/* eslint-disable @stylistic/max-len */
/* eslint-disable import-x/no-internal-modules */
// tslint:disable max-classes-per-file

import type { ImplementationExport, ThreadsWorkerOptions } from '../types/master'
import { getBundleURL } from './get-bundle-url.browser'

export const defaultPoolSize = typeof navigator !== 'undefined' && navigator.hardwareConcurrency ? navigator.hardwareConcurrency : 4

const isAbsoluteURL = (value: string) => /^[A-Za-z][\d+.A-Za-z\-]*:/.test(value)

function createSourceBlobURL(code: string): string {
  const blob = new Blob([code], { type: 'application/javascript' })
  return URL.createObjectURL(blob)
}

function selectWorkerImplementation(): ImplementationExport {
  if (typeof Worker === 'undefined') {
    // Might happen on Safari, for instance
    // The idea is to only fail if the constructor is actually used
    return class NoWebWorker {
      constructor() {
        throw new Error(
          "No web worker implementation available. You might have tried to spawn a worker within a worker in a browser that doesn't support workers in workers.",
        )
      }
    } as unknown as ImplementationExport
  }

  class WebWorker extends Worker {
    constructor(url: string | URL, options?: ThreadsWorkerOptions) {
      if (typeof url === 'string' && options && options._baseURL) {
        url = new URL(url, options._baseURL)
      } else if (typeof url === 'string' && !isAbsoluteURL(url) && /^file:\/\//i.test(getBundleURL())) {
        url = new URL(url, getBundleURL().replace(/\/[^/]+$/, '/'))
        if (options?.CORSWorkaround ?? true) {
          url = createSourceBlobURL(`importScripts(${JSON.stringify(url)});`)
        }
      }
      if (
        typeof url === 'string'
        && isAbsoluteURL(url) // Create source code blob loading JS file via `importScripts()`
        // to circumvent worker CORS restrictions
        && (options?.CORSWorkaround ?? true)
      ) {
        url = createSourceBlobURL(`importScripts(${JSON.stringify(url)});`)
      }
      super(url, options)
    }
  }

  class BlobWorker extends WebWorker {
    constructor(blob: Blob, options?: ThreadsWorkerOptions) {
      const url = window.URL.createObjectURL(blob)
      super(url, options)
    }

    static fromText(source: string, options?: ThreadsWorkerOptions): WebWorker {
      const blob = new window.Blob([source], { type: 'text/javascript' })
      return new BlobWorker(blob, options)
    }
  }

  return {
    blob: BlobWorker,
    default: WebWorker,
  }
}

let implementation: ImplementationExport

export function getWorkerImplementation(): ImplementationExport {
  if (!implementation) {
    implementation = selectWorkerImplementation()
  }
  return implementation
}

export function isWorkerRuntime() {
  const isWindowContext = typeof self !== 'undefined' && typeof Window !== 'undefined' && self instanceof Window
  return typeof self !== 'undefined' && self['postMessage'] && !isWindowContext ? true : false
}
