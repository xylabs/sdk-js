import { expose } from '../../src/worker'

expose(function fail() {
  throw new Error('I am supposed to fail.')
})
