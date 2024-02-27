/* eslint-disable import/no-internal-modules */
import { expose } from '../../src/worker'

expose(function hello(text: string) {
  return `Hello, ${text}`
})
