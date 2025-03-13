/* eslint-disable import-x/no-internal-modules */
/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference lib="dom" />
// tslint:disable no-shadowed-variable

import type { AbstractedWorkerAPI } from '../types/worker.ts'

interface WorkerGlobalScope {
  addEventListener(eventName: string, listener: (event: Event) => void): void
  postMessage(message: any, transferables?: any[]): void
  removeEventListener(eventName: string, listener: (event: Event) => void): void
}

declare const self: WorkerGlobalScope
try {
  if (self === undefined) {
    ;(globalThis as any).self = globalThis
  }
} catch {
  ;(globalThis as any).self = globalThis
}

const isWorkerRuntime: AbstractedWorkerAPI['isWorkerRuntime'] = function isWorkerRuntime() {
  return self !== undefined && self['postMessage'] ? true : false
}

const postMessageToMaster: AbstractedWorkerAPI['postMessageToMaster'] = function postMessageToMaster(data) {
  // TODO: Warn that Transferables are not supported on first attempt to use feature
  self.postMessage(data)
}

let muxingHandlerSetUp = false
const messageHandlers = new Set<(data: any) => void>()

const subscribeToMasterMessages: AbstractedWorkerAPI['subscribeToMasterMessages'] = function subscribeToMasterMessages(onMessage) {
  if (!muxingHandlerSetUp) {
    // We have one multiplexing message handler as tiny-worker's
    // addEventListener() only allows you to set a single message handler
    self.addEventListener('message', ((event: MessageEvent) => {
      for (const handler of messageHandlers) handler(event.data)
    }) as EventListener)
    muxingHandlerSetUp = true
  }

  messageHandlers.add(onMessage)

  const unsubscribe = () => messageHandlers.delete(onMessage)
  return unsubscribe
}

export default {
  isWorkerRuntime,
  postMessageToMaster,
  subscribeToMasterMessages,
}
