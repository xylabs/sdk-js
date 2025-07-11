/* eslint-disable import-x/no-internal-modules */

/// <reference lib="dom" />
// tslint:disable no-shadowed-variable

import type { AbstractedWorkerAPI } from '../types/worker.ts'
import { createExpose } from './expose.ts'
import type { WorkerGlobalScope } from './WorkerGlobalScope.ts'

declare const self: WorkerGlobalScope

const isWorkerRuntime: AbstractedWorkerAPI['isWorkerRuntime'] = function isWorkerRuntime() {
  const isWindowContext = self !== undefined && typeof Window !== 'undefined' && self instanceof Window
  return self !== undefined && self['postMessage'] && !isWindowContext ? true : false
}

const postMessageToMaster: AbstractedWorkerAPI['postMessageToMaster'] = function postMessageToMaster(data, transferList?) {
  self.postMessage(data, transferList)
}

const subscribeToMasterMessages: AbstractedWorkerAPI['subscribeToMasterMessages'] = function subscribeToMasterMessages(onMessage) {
  const messageHandler = (messageEvent: MessageEvent) => {
    onMessage(messageEvent.data)
  }
  const unsubscribe = () => {
    self.removeEventListener('message', messageHandler as EventListener)
  }
  self.addEventListener('message', messageHandler as EventListener)
  return unsubscribe
}

const addEventListener = self.addEventListener.bind(this)
const postMessage = self.postMessage.bind(this)
const removeEventListener = self.removeEventListener.bind(this)

export {
  addEventListener,
  postMessage,
  removeEventListener,
}

const expose = createExpose({
  isWorkerRuntime, postMessageToMaster, subscribeToMasterMessages,
}, {
  addEventListener, postMessage, removeEventListener,
})

export {
  isWorkerRuntime,
  postMessageToMaster,
  subscribeToMasterMessages,
}

export { registerSerializer } from '../common.ts'
export { Transfer } from '../transferable.ts'
export { expose }
