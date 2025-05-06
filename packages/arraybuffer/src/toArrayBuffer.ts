import { assertEx } from '@xylabs/assert'
import type { Hex } from '@xylabs/hex'
import { toHex } from '@xylabs/hex'
import { isUndefined } from '@xylabs/typeof'

function hexToArrayBuffer(value: Hex): Uint8Array {
  if (value.length % 2 !== 0) {
    throw new Error('Invalid hex value')
  }

  const length = value.length / 2
  const result = new Uint8Array(new ArrayBuffer(length))

  for (let i = 0; i < length; i++) {
    const byte = value.slice(i * 2, i * 2 + 2)
    result[i] = Number.parseInt(byte, 16)
  }

  return result
}

function stringToArrayBuffer(value: string, base = 16): Uint8Array {
  switch (base) {
    case 16: {
      return hexToArrayBuffer(toHex((value.startsWith('0x') ? value.slice(2) : value).toUpperCase()))
    }
    default: {
      throw new Error(`Unsupported base [${base}]`)
    }
  }
}

export function toArrayBuffer(value: undefined, padLength?: number, base?: number): undefined
export function toArrayBuffer(value: ArrayBufferLike | bigint | string, padLength?: number, base?: number): ArrayBufferLike
export function toArrayBuffer(value: ArrayBufferLike | bigint | string | undefined, padLength?: number, base?: number): ArrayBufferLike | undefined
export function toArrayBuffer(value?: ArrayBufferLike | bigint | string, padLength = 0, base?: number): ArrayBufferLike | undefined {
  if (isUndefined(value)) return undefined

  if (typeof value === 'bigint' && value < 0) {
    throw new Error(`negative bigint values are not supported: ${typeof value}`)
  }

  let result: Uint8Array | undefined
    = typeof value === 'string'
      ? stringToArrayBuffer(value, base)
      : typeof value === 'bigint' ? stringToArrayBuffer(value.toString(16)) : (new Uint8Array(value))

  if (result === undefined) {
    throw new Error(`toArrayBuffer - Unknown type: ${typeof value}`)
  }

  if (result.length < padLength) {
    result = new Uint8Array([...new Uint8Array(padLength - result.length), ...result])
    assertEx(result?.length <= padLength, () => 'Resulting length is greater than padLength')
  }

  return result.buffer
}
