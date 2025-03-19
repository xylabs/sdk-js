/* eslint-disable require-await */

import { expose } from '../../dist/esm/worker'

expose(async function add(a, b) {
  return a + b
})
