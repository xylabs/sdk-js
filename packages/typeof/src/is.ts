export function isUndefined(value: unknown): value is undefined {
  return value === undefined
}

export function isNull(value: unknown): value is null {
  return value === null
}

export function isUndefinedOrNull(value: unknown): value is undefined | null {
  return isUndefined(value) || isNull(value)
}

export function isBigInt(value: unknown): value is bigint {
  return typeof value === 'bigint'
}

export function isString(value: unknown): value is string {
  return typeof value === 'string'
}

export function isNumber(value: unknown): value is number {
  return typeof value === 'number'
}

export function isObject(value: unknown): value is object
export function isObject<T extends object>(value: unknown): value is T
export function isObject<T extends object>(value: T): value is T
export function isObject(value: unknown): value is object {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

export function isArray(value: unknown): value is []
export function isArray<T extends []>(value: unknown): value is T
export function isArray<T extends []>(value: T): value is T
export function isArray(value: unknown): value is [] {
  return Array.isArray(value)
}

export function isFunction(value: unknown): value is () => void {
  return typeof value === 'function'
}

export function isSymbol(value: unknown): value is symbol {
  return typeof value === 'symbol'
}

export function isEmptyObject(value: unknown): value is {} {
  return isObject(value) && Object.keys(value).length === 0
}

export function isEmptyString(value: unknown): value is '' {
  return isString(value) && value.length === 0
}

export function isEmptyArray(value: unknown): value is []
export function isEmptyArray<T extends []>(value: unknown): value is T
export function isEmptyArray<T extends []>(value: T): value is T
export function isEmptyArray(value: unknown): value is [] {
  return isArray(value) && value.length === 0
}

export function isPopulatedArray(value: unknown): value is []
export function isPopulatedArray<T extends []>(value: unknown): value is T
export function isPopulatedArray<T extends []>(value: T): value is T
export function isPopulatedArray(value: unknown): value is [] {
  return isArray(value) && value.length > 0
}

export function isEmpty(value: unknown): value is (undefined | null | '' | [] | {}) {
  return isEmptyString(value) || isEmptyArray(value) || isEmptyObject(value)
}

export function isFalsy(value: unknown): value is false {
  return !value
}

export function isTruthy(value: unknown): value is true {
  return !!value
}

export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean'
}

export function isDateString(value: unknown): value is string {
  return isString(value) && !Number.isNaN(Date.parse(value))
}

export function isDate(value: unknown): value is Date {
  return value instanceof Date
}

export function isRegExp(value: unknown): value is RegExp {
  return value instanceof RegExp
}

export function isError(value: unknown): value is Error {
  return value instanceof Error
}

export function isPromise(value: unknown): value is Promise<unknown>
export function isPromise<T extends Promise<unknown>>(value: unknown): value is T
export function isPromise<T extends Promise<unknown>>(value: T): value is T
export function isPromise(value: unknown): value is Promise<unknown> {
  return value instanceof Promise
}

export function isMap(value: unknown): value is Map<unknown, unknown>
export function isMap<K, V>(value: unknown): value is Map<K, V>
export function isMap<K, V>(value: Map<K, V>): value is Map<K, V>
export function isMap(value: unknown): value is Map<unknown, unknown> {
  return value instanceof Map
}
