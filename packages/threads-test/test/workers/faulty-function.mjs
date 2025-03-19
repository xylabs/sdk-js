import { expose } from '@xylabs/threads/worker'

expose(function fail() {
  throw new Error('I am supposed to fail.')
})
