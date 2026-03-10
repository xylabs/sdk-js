import { toArrayBuffer } from './toArrayBuffer.ts'

/**
 * Converts a string, bigint, or ArrayBufferLike to a Uint8Array, with optional zero-padding.
 * @param value - The value to convert
 * @param padLength - Minimum byte length, left-padded with zeros if needed
 * @param base - Numeric base for string parsing (default 16)
 * @returns The resulting Uint8Array, or undefined if value is undefined
 */
export function toUint8Array(value: undefined, padLength?: number, base?: number): undefined
export function toUint8Array(value: ArrayBufferLike | bigint | string, padLength?: number, base?: number): Uint8Array
export function toUint8Array(value: ArrayBufferLike | bigint | string | undefined, padLength?: number, base?: number): Uint8Array | undefined
export function toUint8Array(value?: ArrayBufferLike | bigint | string, padLength?: number, base?: number): Uint8Array | undefined {
  const arrayBuffer = toArrayBuffer(value, padLength, base)
  return arrayBuffer ? new Uint8Array(arrayBuffer) : undefined
}
