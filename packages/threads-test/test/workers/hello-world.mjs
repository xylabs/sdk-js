import { expose } from '@xylabs/threads/worker'

expose(function helloWorld() {
  return 'Hello World'
})
