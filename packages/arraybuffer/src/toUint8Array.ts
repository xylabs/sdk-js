import { toArrayBuffer } from './toArrayBuffer'

export function toUint8Array(value: undefined, padLength?: number, base?: number): undefined
export function toUint8Array(value: ArrayBuffer | string, padLength?: number, base?: number): Uint8Array
export function toUint8Array(value: ArrayBuffer | string | undefined, padLength?: number, base?: number): Uint8Array | undefined
export function toUint8Array(value?: ArrayBuffer | string, padLength?: number, base?: number): Uint8Array | undefined {
  const arrayBuffer = typeof value === 'string' ? toArrayBuffer(value, padLength, base) : value
  return arrayBuffer ? new Uint8Array(arrayBuffer) : undefined
}
