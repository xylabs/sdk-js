/* eslint-disable require-await */
/* eslint-disable import/no-internal-modules */
import { expose } from '../../dist-esm/worker'

expose(async function add(a, b) {
  return a + b
})
