/** A function type that accepts any arguments and returns unknown. */
export type AnyFunction = (...args: unknown[]) => unknown

/** A union of valid object key types. */
export type RecordKey = string | number | symbol

/** Type guard that checks whether a value is undefined. */
export function isUndefined(value: unknown): value is undefined
export function isUndefined<T>(value: T): value is Extract<T, undefined>
export function isUndefined(value: unknown): value is undefined {
  return value === undefined
}

/** Type guard that checks whether a value is not undefined. */
export function isDefined<T>(value: T): value is Exclude<T, undefined> {
  return !isUndefined(value)
}

/** Type guard that checks whether a value is null. */
export function isNull(value: unknown): value is null
export function isNull<T>(value: T): value is Extract<T, null>
export function isNull(value: unknown): value is null {
  return value === null
}

/** Type guard that checks whether a value is neither undefined nor null. */
export function isDefinedNotNull<T>(value: T): value is Exclude<T, undefined | null> {
  return !isUndefined(value) && !isNull(value)
}

/** Type guard that checks whether a value is undefined or null. */
export function isUndefinedOrNull(value: unknown): value is undefined | null
export function isUndefinedOrNull<T>(value: T): value is Extract<T, undefined | null>
export function isUndefinedOrNull(value: unknown): value is undefined | null {
  return isUndefined(value) || isNull(value)
}

/** Type guard that checks whether a value is a bigint. */
export function isBigInt(value: unknown): value is bigint
export function isBigInt<T extends bigint>(value: T): value is Extract<T, bigint>
export function isBigInt(value: unknown): value is bigint {
  return typeof value === 'bigint'
}

/** Type guard that checks whether a value is a string. */
export function isString(value: unknown): value is string
export function isString<T extends string>(value: T): value is Extract<T, string>
export function isString(value: unknown): value is string {
  return typeof value === 'string'
}

/** Type guard that checks whether a value is a number. */
export function isNumber(value: unknown): value is number
export function isNumber<T extends number>(value: T): value is Extract<T, number>
export function isNumber(value: unknown): value is number {
  return typeof value === 'number'
}

/** Type guard that checks whether a value is a plain object (not null and not an array). */
export function isObject(value: unknown): value is object
export function isObject<T extends object>(value: T): value is Extract<T, object>
export function isObject(value: unknown): value is object {
  return (typeof value === 'object') && (value !== null) && !Array.isArray(value)
}

/** Type guard that checks whether a value is an array. */
export function isArray(value: unknown): value is readonly unknown[]
export function isArray<T>(value: T): value is Extract<T, readonly unknown[]>
export function isArray(value: unknown): value is readonly unknown[] {
  return Array.isArray(value)
}

/** Type guard that checks whether a value is a function. */
export function isFunction(value: unknown): value is AnyFunction
export function isFunction<T extends AnyFunction>(value: T): value is Extract<T, AnyFunction>
export function isFunction(value: unknown): value is AnyFunction {
  return typeof value === 'function'
}

/** Type guard that checks whether a value is a symbol. */
export function isSymbol(value: unknown): value is symbol
export function isSymbol<T extends symbol>(value: T): value is Extract<T, symbol>
export function isSymbol(value: unknown): value is symbol {
  return typeof value === 'symbol'
}

/** Type guard that checks whether a value is an object with no own keys. */
export function isEmptyObject(value: unknown): value is {}
export function isEmptyObject<K extends RecordKey, V, T extends Record<K, V>>(value: T): value is Extract<T, Record<K, never>>
export function isEmptyObject(value: unknown): value is {} {
  return isObject(value) && Object.keys(value).length === 0
}

/** Type guard that checks whether a value is an empty string. */
export function isEmptyString(value: unknown): value is ''
export function isEmptyString<T extends string>(value: T): value is Extract<T, ''>
export function isEmptyString(value: unknown): value is '' {
  return isString(value) && value.length === 0
}

/** Type guard that checks whether a value is an empty array. */
export function isEmptyArray(value: unknown): value is []
export function isEmptyArray<T extends Array<unknown>>(value: T): value is Extract<T, Array<unknown>>
export function isEmptyArray(value: unknown): value is [] {
  return isArray(value) && value.length === 0
}

/** Type guard that checks whether a value is a non-empty array. */
export function isPopulatedArray(value: unknown): value is readonly unknown[]
export function isPopulatedArray<T extends Array<unknown>>(value: T): value is Extract<T, readonly unknown[]>
export function isPopulatedArray(value: unknown): value is readonly unknown[] {
  return isArray(value) && value.length > 0
}

/** Type guard that checks whether a value is empty (empty string, empty array, or empty object). */
export function isEmpty<T>(value: unknown): value is T
export function isEmpty<K extends RecordKey, V, T extends Record<K, V>>(value: T): value is Extract<T, Record<K, never>>
export function isEmpty<T extends Array<unknown>>(value: T): value is Extract<T, Array<never>>
export function isEmpty<T>(value: unknown): value is T {
  return isEmptyString(value) || isEmptyArray(value) || isEmptyObject(value)
}

/** Type guard that checks whether a value is falsy (0, null, undefined, false, '', or 0n). */
export function isFalsy<T>(value: T): value is Extract<T, 0 | null | undefined | false | '' | 0n>
export function isFalsy<T extends boolean>(value: T): value is Extract<T, false>
export function isFalsy<T extends number>(value: T): value is Extract<T, 0>
export function isFalsy<T extends bigint>(value: T): value is Extract<T, 0n>
export function isFalsy<T extends null>(value: T): value is Extract<T, null>
export function isFalsy<T extends undefined>(value: T): value is Extract<T, undefined>
export function isFalsy<T extends string>(value: T): value is Extract<T, ''>
export function isFalsy<T>(value: T): value is T {
  return !value
}

/** Type guard that checks whether a value is truthy (not 0, null, undefined, false, '', or 0n). */
export function isTruthy<T>(value: T): value is Exclude<T, 0 | null | undefined | false | '' | 0n>
export function isTruthy<T extends boolean>(value: T): value is Extract<T, true>
export function isTruthy<T extends number>(value: T): value is Extract<T, number>
export function isTruthy<T extends bigint>(value: T): value is Extract<T, bigint>
export function isTruthy<T extends null>(value: T): value is Extract<T, null>
export function isTruthy<T extends undefined>(value: T): value is Extract<T, undefined>
export function isTruthy<T extends string>(value: T): value is Extract<T, string>
export function isTruthy<T>(value: T): value is T {
  return !!value
}

/** Type guard that checks whether a value is a boolean. */
export function isBoolean(value: unknown): value is boolean
export function isBoolean<T extends boolean>(value: T): value is Extract<T, boolean>
export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean'
}

/** Type guard that checks whether a value is a string that can be parsed as a valid date. */
export function isDateString(value: unknown): value is string
export function isDateString<T>(value: T): value is Extract<T, string>
export function isDateString(value: unknown): value is string {
  return isString(value) && !Number.isNaN(Date.parse(value))
}

/** Type guard that checks whether a value is a Date instance. */
export function isDate(value: unknown): value is Date
export function isDate<T>(value: T): value is Extract<T, Date>
export function isDate(value: unknown): value is Date {
  return value instanceof Date
}

/** Type guard that checks whether a value is a RegExp instance. */
export function isRegExp(value: unknown): value is RegExp
export function isRegExp<T extends RegExp>(value: T): value is Extract<T, RegExp>
export function isRegExp(value: unknown): value is RegExp {
  return value instanceof RegExp
}

/** Type guard that checks whether a value is an Error instance. */
export function isError(value: unknown): value is Error
export function isError<T>(value: T): value is Extract<T, Error>
export function isError(value: unknown): value is Error {
  return value instanceof Error
}

/** Type guard that checks whether a value is a Promise instance. */
export function isPromise(value: unknown): value is Promise<unknown>
export function isPromise<T>(value: T): value is Extract<T, Promise<unknown>>
export function isPromise(value: unknown): value is Promise<unknown> {
  return value instanceof Promise
}

/** Type guard that checks whether a value is promise-like (has a `then` method). */
export function isPromiseLike(value: unknown): value is Promise<unknown>
export function isPromiseLike<T>(value: T): value is Extract<T, Promise<unknown>>
export function isPromiseLike(value: unknown): value is Promise<unknown> {
  return (
    typeof value === 'object'
    && value !== null
    && typeof (value as Record<string, unknown>).then === 'function'
  )
}

/** Type guard that checks whether a value is a Map instance. */
export function isMap(value: unknown): value is Map<unknown, unknown>
export function isMap<K, V, T extends Map<K, V>>(value: T): value is Extract<T, Map<K, V>>
export function isMap(value: unknown): value is Map<unknown, unknown> {
  return value instanceof Map
}

/** Type guard that checks whether a value is an ArrayBufferView (e.g., TypedArray or DataView). */
export function isArrayBufferView(value: unknown): value is ArrayBufferView
export function isArrayBufferView<T extends ArrayBufferView>(value: T): value is Extract<T, ArrayBufferView>
export function isArrayBufferView(value: unknown): value is ArrayBufferView {
  return ArrayBuffer.isView(value)
}

/** Type guard that checks whether a value is a Set instance. */
export function isSet(value: unknown): value is Set<unknown>
export function isSet<T extends Set<unknown>>(value: unknown | Set<T>): value is Extract<T, Set<unknown>>
export function isSet(value: unknown): value is Set<unknown> {
  return value instanceof Set
}

/** Type guard that checks whether a value is a WeakMap instance. */
export function isWeakMap(value: unknown): value is WeakMap<WeakKey, unknown>
export function isWeakMap<K extends WeakKey, V, T extends WeakMap<K, V>>(value: T): value is Extract<T, WeakMap<K, V>>
export function isWeakMap(value: unknown): value is WeakMap<WeakKey, unknown> {
  return value instanceof WeakMap
}

/** Type guard that checks whether a value is a WeakSet instance. */
export function isWeakSet(value: unknown): value is WeakSet<WeakKey>
export function isWeakSet<K extends WeakKey, T extends WeakSet<K>>(value: T): value is Extract<T, WeakSet<K>>
export function isWeakSet(value: unknown): value is WeakSet<WeakKey> {
  return value instanceof WeakSet
}

/** Type guard that checks whether a value is a DataView instance. */
export function isDataView(value: unknown): value is DataView
export function isDataView<T>(value: T): value is Extract<T, DataView>
export function isDataView(value: unknown): value is DataView {
  return value instanceof DataView
}

/** Type guard that checks whether a value is a Blob instance. */
export function isBlob(value: unknown): value is Blob
export function isBlob<T extends Blob>(value: T): value is Extract<T, Blob>
export function isBlob(value: unknown): value is Blob {
  return typeof Blob !== 'undefined' && value instanceof Blob
}

/** Type guard that checks whether a value is a File instance. */
export function isFile(value: unknown): value is File
export function isFile<T extends File>(value: T): value is Extract<T, File>
export function isFile(value: unknown): value is File {
  return typeof File !== 'undefined' && value instanceof File
}
