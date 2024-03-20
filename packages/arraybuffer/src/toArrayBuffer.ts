import { base16, base58 } from '@scure/base'
import { assertEx } from '@xylabs/assert'
import { ifTypeOf } from '@xylabs/typeof'

const stringToArrayBuffer = (value: string, base = 16) => {
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
export function toArrayBuffer(value: ArrayBuffer | string, padLength?: number, base?: number): Uint8Array
export function toArrayBuffer(value: ArrayBuffer | string | undefined, padLength?: number, base?: number): Uint8Array | undefined
export function toArrayBuffer(value?: ArrayBuffer | string, padLength?: number, base?: number): Uint8Array | undefined {
  if (value === undefined) return undefined

  let result: Uint8Array | undefined =
    ifTypeOf<string, Uint8Array>('string', value as string, (value) => stringToArrayBuffer(value, base)) ?? (value as Uint8Array)

  if (result === undefined) {
    throw new Error(`toArrayBuffer - Unknown type: ${typeof value}`)
  }

  if (padLength && result.length < padLength) {
    result = new Uint8Array([...new Uint8Array(padLength - result.length), ...result])
    assertEx(result?.length <= padLength, () => 'Resulting length is greater than padLength')
  }

  return result
}
