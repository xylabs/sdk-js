/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-explicit-any */

/// <reference types="./raw-loader" />

import AdditionWorkerNodeBundle from 'raw-loader!./dist/addition-worker.node/worker.js'
import AdditionWorkerWebBundle from 'raw-loader!./dist/addition-worker.web/worker.js'

import { BlobWorker, spawn } from '../../src/index'

const AdditionWorkerBundle = (process as any).browser ? AdditionWorkerWebBundle : AdditionWorkerNodeBundle
type AdditionWorker = (a: number, b: number) => number

async function test() {
  // We also want to test if referencing multiple different workers in a module
  // built using webpack works

  const add = await spawn<AdditionWorker>(BlobWorker.fromText(AdditionWorkerBundle))
  const result = await add(2, 3)

  if (result !== 5) {
    throw new Error('Unexpected result returned by addition worker: ' + result)
  }

  return 'test succeeded'
}

// eslint-disable-next-line import/no-default-export
export default test
