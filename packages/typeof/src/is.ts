export type AnyFunction = (...args: unknown[]) => unknown

export function isUndefined<T>(value: T): value is Extract<T, undefined> {
  return value === undefined
}

export function isDefined<T>(value: T): value is Exclude<T, undefined> {
  return !isUndefined(value)
}

export function isNull<T>(value: T): value is Extract<T, null> {
  return value === null
}

export function isDefinedNotNull<T>(value: T): value is Exclude<T, undefined | null> {
  return !isUndefined(value) && !isNull(value)
}

export function isUndefinedOrNull<T>(value: T): value is Extract<T, undefined | null> {
  return isUndefined(value) || isNull(value)
}

export function isBigInt<T>(value: T): value is Extract<T, bigint> {
  return typeof value === 'bigint'
}

export function isString<T>(value: T): value is Extract<T, string> {
  return typeof value === 'string'
}

export function isNumber<T>(value: unknown): value is Extract<T, number> {
  return typeof value === 'number'
}

export function isObject(value: unknown): value is object
export function isObject<T extends object>(value: T): value is Extract<T, object>
export function isObject(value: unknown): value is object {
  return (typeof value === 'object') && (value !== null) && !Array.isArray(value)
}

export function isArray<T>(value: T): value is Extract<T, Array<unknown>> {
  return Array.isArray(value)
}

export function isFunction<T>(value: T): value is Extract<T, AnyFunction> {
  return typeof value === 'function'
}

export function isSymbol(value: unknown): value is symbol {
  return typeof value === 'symbol'
}

export function isEmptyObject<T, K extends string | number | symbol>(value: T | Record<K, unknown>): value is Extract<T, Record<K, never>> {
  return isObject(value) && Object.keys(value).length === 0
}

export function isEmptyString<T>(value: T): value is Extract<T, ''> {
  return isString(value) && value.length === 0
}

export function isEmptyArray<T>(value: T): value is Extract<T, Array<unknown>> {
  return isArray(value) && value.length === 0
}

export function isPopulatedArray<T>(value: T): value is Extract<T, Array<unknown>> {
  return isArray(value) && value.length > 0
}

export function isEmpty<
  T,
  K extends string | number | symbol = keyof Extract<T, object>,
>(
  value: T | Record<K, unknown> | Array<unknown>,
): value is Extract<T, '' | Array<unknown> | Record<K, never>> {
  return isEmptyString(value) || isEmptyArray(value) || isEmptyObject(value)
}

export function isFalsy<T>(value: T): value is Extract<T, false | 0 | '' | null | undefined> {
  return !value
}

export function isTruthy<T>(value: unknown): value is Extract<T, true | number | string | object | symbol | AnyFunction | []> {
  return !!value
}

export function isBoolean<T>(value: T): value is Extract<T, boolean> {
  return typeof value === 'boolean'
}

export function isDateString<T>(value: T): value is Extract<T, string> {
  return isString(value) && !Number.isNaN(Date.parse(value))
}

export function isDate<T>(value: T): value is Extract<T, Date> {
  return value instanceof Date
}

export function isRegExp<T>(value: T): value is Extract<T, RegExp> {
  return value instanceof RegExp
}

export function isError<T>(value: T): value is Extract<T, Error> {
  return value instanceof Error
}

export function isPromise<T>(value: T): value is Extract<T, Promise<unknown>> {
  return value instanceof Promise
}

export function isPromiseLike<T>(value: T): value is Extract<T, Promise<unknown>> {
  return (
    typeof value === 'object'
    && value !== null
    && typeof (value as Record<string, unknown>).then === 'function'
  )
}

export function isMap<K, V>(value: unknown | Map<K, V>): value is Map<K, V> {
  return value instanceof Map
}

// excludes classes not a class
export function isPlainObject<T>(value: T): value is Extract<T, object> {
  return isObject(value) && value.constructor === Object
}

export function isArrayBufferView<T>(value: T): value is Extract<T, ArrayBufferView> {
  return ArrayBuffer.isView(value)
}

export function isSet<T>(value: unknown | Set<T>): value is Extract<T, Set<T>> {
  return value instanceof Set
}

export function isWeakMap<K extends WeakKey, V>(value: unknown | WeakMap<K, V>): value is WeakMap<K, V> {
  return value instanceof WeakMap
}

export function isWeakSet<K extends WeakKey>(value: unknown | WeakSet<K>): value is WeakSet<K> {
  return value instanceof WeakSet
}

export function isArrayBuffer<T>(value: T): value is Extract<T, ArrayBuffer> {
  return value instanceof ArrayBuffer
}

export function isDataView<T>(value: T): value is Extract<T, DataView> {
  return value instanceof DataView
}

export function isBlob<T>(value: T): value is Extract<T, Blob> {
  return typeof Blob !== 'undefined' && value instanceof Blob
}

export function isFile<T>(value: T): value is Extract<T, File> {
  return typeof File !== 'undefined' && value instanceof File
}
