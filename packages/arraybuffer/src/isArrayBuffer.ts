export function isArrayBuffer(value: unknown): value is ArrayBuffer
export function isArrayBuffer<T extends ArrayBuffer>(value: T): value is Extract<T, ArrayBuffer>
export function isArrayBuffer(value: unknown): value is ArrayBuffer {
  return value instanceof ArrayBuffer
}

export function isArrayBufferLike(value: unknown): value is ArrayBufferLike
export function isArrayBufferLike<T extends ArrayBufferLike>(value: T): value is Extract<T, ArrayBufferLike>
export function isArrayBufferLike(value: unknown): value is ArrayBufferLike {
  return (
    value !== null
    && typeof value === 'object'
    && 'byteLength' in value
    && typeof (value as ArrayBufferLike).byteLength === 'number'
    && 'slice' in value
    && typeof (value as ArrayBufferLike).slice === 'function'
  )
}
