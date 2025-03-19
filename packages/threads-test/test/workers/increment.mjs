import { expose } from '@xylabs/threads/worker'

let counter = 0

expose(function increment(by = 1) {
  counter += by
  return counter
})
