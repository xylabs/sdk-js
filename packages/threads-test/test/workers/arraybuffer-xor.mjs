import { expose, Transfer } from '@xylabs/threads/worker'

function xor(buffer, value) {
  console.log('xor', buffer, value)
  const view = new Uint8Array(buffer.transferables[0])
  for (const [offset, byte] of buffer.transferables.entries()) view.set([byte ^ value], offset)
  console.log('view', view.buffer)
  return view.buffer
}

expose(xor)
