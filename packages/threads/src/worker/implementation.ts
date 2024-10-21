/* eslint-disable import-x/no-internal-modules */
// tslint:disable no-var-requires
/*
 * This file is only a stub to make './implementation' resolve to the right module.
 */

import type { AbstractedWorkerAPI } from '../types/worker'
import WebWorkerImplementation from './implementation.browser'
import WorkerThreadsImplementation from './implementation.worker_threads'

const runningInNode = typeof process !== 'undefined' && (process.arch as string) !== 'browser' && 'pid' in process

function selectNodeImplementation(): AbstractedWorkerAPI {
  try {
    WorkerThreadsImplementation.testImplementation()
    return WorkerThreadsImplementation
  } catch {
    throw new Error('No worker implementation available in this environment')
  }
}

export default runningInNode ? selectNodeImplementation() : WebWorkerImplementation
