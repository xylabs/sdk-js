/* eslint-disable import-x/no-internal-modules */
/* eslint-disable @typescript-eslint/no-explicit-any */
// tslint:disable no-shadowed-variable

import type { MessagePort, TransferListItem } from 'node:worker_threads'
import { parentPort as optionalParentPort } from 'node:worker_threads'

import { assertEx } from '@xylabs/assert'

import type { AbstractedWorkerAPI } from '../types/worker.ts'
import { createExpose } from './expose.ts'

const parentPort = assertEx(optionalParentPort, () => 'Invariant violation: MessagePort to parent is not available.')

function assertMessagePort(port: MessagePort | null | undefined): MessagePort {
  if (!port) {
    throw new Error('Invariant violation: MessagePort to parent is not available.')
  }
  return port
}

const isWorkerRuntime: AbstractedWorkerAPI['isWorkerRuntime'] = function isWorkerRuntime() {
  return true // isMainThread
}

const postMessageToMaster: AbstractedWorkerAPI['postMessageToMaster'] = function postMessageToMaster(data, transferList) {
  assertMessagePort(parentPort).postMessage(data, transferList as TransferListItem[])
}

const subscribeToMasterMessages: AbstractedWorkerAPI['subscribeToMasterMessages'] = function subscribeToMasterMessages(onMessage) {
  if (!parentPort) {
    throw new Error('Invariant violation: MessagePort to parent is not available.')
  }
  const messageHandler = (message: any) => {
    console.log('messageHandler', message)
    onMessage(message)
  }
  const unsubscribe = () => {
    assertMessagePort(parentPort).off('message', messageHandler)
  }
  assertMessagePort(parentPort).on('message', messageHandler)
  return unsubscribe
}

const addEventListener = parentPort?.on.bind(parentPort)
const postMessage = parentPort?.postMessage.bind(parentPort)
const removeEventListener = parentPort?.off.bind(parentPort)

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
