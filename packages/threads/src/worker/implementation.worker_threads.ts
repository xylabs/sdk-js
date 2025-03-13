/* eslint-disable import-x/no-internal-modules */
/* eslint-disable @typescript-eslint/no-explicit-any */
// tslint:disable no-shadowed-variable
import type { MessagePort } from 'node:worker_threads'

import type { AbstractedWorkerAPI } from '../types/worker.ts'
import WorkerThreads from '../worker_threads.ts'

function assertMessagePort(port: MessagePort | null | undefined): MessagePort {
  if (!port) {
    throw new Error('Invariant violation: MessagePort to parent is not available.')
  }
  return port
}

const isWorkerRuntime: AbstractedWorkerAPI['isWorkerRuntime'] = function isWorkerRuntime() {
  return !WorkerThreads().isMainThread
}

const postMessageToMaster: AbstractedWorkerAPI['postMessageToMaster'] = function postMessageToMaster(data, transferList) {
  assertMessagePort(WorkerThreads().parentPort).postMessage(data, transferList as any)
}

const subscribeToMasterMessages: AbstractedWorkerAPI['subscribeToMasterMessages'] = function subscribeToMasterMessages(onMessage) {
  const parentPort = WorkerThreads().parentPort

  if (!parentPort) {
    throw new Error('Invariant violation: MessagePort to parent is not available.')
  }
  const messageHandler = (message: any) => {
    onMessage(message)
  }
  const unsubscribe = () => {
    assertMessagePort(parentPort).off('message', messageHandler)
  }
  assertMessagePort(parentPort).on('message', messageHandler)
  return unsubscribe
}

function testImplementation() {
  // Will throw if `worker_threads` are not available
  WorkerThreads()
}

export default {
  isWorkerRuntime,
  postMessageToMaster,
  subscribeToMasterMessages,
  testImplementation,
}
