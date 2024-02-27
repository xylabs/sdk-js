/* eslint-disable import/no-internal-modules */
import { expose, Transfer } from '../../src/worker'

function xor(buffer: ArrayBuffer, value: number) {
  const view = new Uint8Array(buffer)
  for (const [offset, byte] of view.entries()) view.set([byte ^ value], offset)
  return Transfer(buffer)
}

expose(xor)
export type XorBuffer = typeof xor
