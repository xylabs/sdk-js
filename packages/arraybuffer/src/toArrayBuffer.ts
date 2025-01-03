import { base16, base58 } from '@scure/base'
import { assertEx } from '@xylabs/assert'

const stringToUInt8Array = (value: string, base = 16): Uint8Array => {
  switch (base) {
    case 16: {
      return base16.decode((value.startsWith('0x') ? value.slice(2) : value).toUpperCase())
    }
    case 58: {
      return base58.decode(value)
    }
    default: {
      throw new Error(`Unsupported base [${base}]`)
    }
  }
}

export function toArrayBuffer(value: undefined, padLength?: number, base?: number): undefined
export function toArrayBuffer(value: ArrayBufferLike | bigint | string, padLength?: number, base?: number): ArrayBufferLike
export function toArrayBuffer(value: ArrayBufferLike | bigint | string | undefined, padLength?: number, base?: number): ArrayBufferLike | undefined
export function toArrayBuffer(value?: ArrayBufferLike | bigint | string, padLength?: number, base?: number): ArrayBufferLike | undefined {
  if (value === undefined) return undefined

  if (typeof value === 'bigint' && value < 0) {
    throw new Error(`negative bigint values are not supported: ${typeof value}`)
  }

  let result: Uint8Array | undefined
    = typeof value === 'string'
      ? stringToUInt8Array(value, base)
      : typeof value === 'bigint' ? stringToUInt8Array(value.toString(16)) : (new Uint8Array(value))

  if (result === undefined) {
    throw new Error(`toArrayBuffer - Unknown type: ${typeof value}`)
  }

  if (padLength && result.length < padLength) {
    result = new Uint8Array([...new Uint8Array(padLength - result.length), ...result])
    assertEx(result?.length <= padLength, () => 'Resulting length is greater than padLength')
  }

  return result.buffer
}
