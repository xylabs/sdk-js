/* eslint-disable import/no-internal-modules */
import { expose } from '../../src/worker'

expose(function helloWorld() {
  return 'Hello World'
})
