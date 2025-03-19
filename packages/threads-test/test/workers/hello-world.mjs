import { expose } from '@xylabs/threads/worker'

console.log('Hello World Worker - Starting')

expose(function helloWorld() {
  return 'Hello World'
})
