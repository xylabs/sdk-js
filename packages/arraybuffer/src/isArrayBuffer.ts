export const isArrayBuffer = (value: unknown): value is ArrayBuffer => {
  return value instanceof ArrayBuffer
}

export const isArrayBufferLike = (value: unknown): value is ArrayBufferLike => {
  return (
    value !== null
    && typeof value === 'object'
    && 'byteLength' in value
    && typeof (value as ArrayBufferLike).byteLength === 'number'
    && 'slice' in value
    && typeof (value as ArrayBufferLike).slice === 'function'
  )
}
