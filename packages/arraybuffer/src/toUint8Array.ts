import { toArrayBuffer } from './toArrayBuffer.ts'

export function toUint8Array(value: undefined, padLength?: number, base?: number): undefined
export function toUint8Array(value: ArrayBufferLike | bigint | string, padLength?: number, base?: number): Uint8Array
export function toUint8Array(value: ArrayBufferLike | bigint | string | undefined, padLength?: number, base?: number): Uint8Array | undefined
export function toUint8Array(value?: ArrayBufferLike | bigint | string, padLength?: number, base?: number): Uint8Array | undefined {
  const arrayBuffer = toArrayBuffer(value, padLength, base)
  return arrayBuffer ? new Uint8Array(arrayBuffer) : undefined
}
