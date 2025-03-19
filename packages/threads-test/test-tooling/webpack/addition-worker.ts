import { expose, isWorkerRuntime } from '../../src/worker'

if (!isWorkerRuntime()) {
  throw new Error('isWorkerRuntime() says we are not in a worker.')
}

expose(function add(a: number, b: number) {
  return a + b
})
