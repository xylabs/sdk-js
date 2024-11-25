import { toArrayBuffer } from './toArrayBuffer.ts'

export function toUint8Array(value: undefined, padLength?: number, base?: number): undefined
export function toUint8Array(value: ArrayBufferLike | string, padLength?: number, base?: number): Uint8Array
export function toUint8Array(value: ArrayBufferLike | string | undefined, padLength?: number, base?: number): Uint8Array | undefined
export function toUint8Array(value?: ArrayBufferLike | string, padLength?: number, base?: number): Uint8Array | undefined {
  const arrayBuffer = typeof value === 'string' ? toArrayBuffer(value, padLength, base) : value
  return arrayBuffer ? new Uint8Array(arrayBuffer) : undefined
}
