/* eslint-disable max-statements */
import {
  describe, expect, it,
} from 'vitest'

import {
  isArray,
  isArrayBuffer,
  isArrayBufferView,
  isBigInt,
  isBlob,
  isBoolean,
  isDataView,
  isDate,
  isDateString,
  isDefined,
  isDefinedNotNull,
  isEmpty,
  isEmptyArray,
  isEmptyObject,
  isEmptyString,
  isError,
  isFalsy,
  isFile,
  isFunction,
  isMap,
  isNull,
  isNumber,
  isObject,
  isPopulatedArray,
  isPromise,
  isPromiseLike,
  isRegExp,
  isSet,
  isString,
  isSymbol,
  isTruthy,
  isUndefined,
  isUndefinedOrNull,
  isWeakMap,
  isWeakSet,
} from '../is.ts'

const Undefined = undefined

describe('is.ts type guards', () => {
  describe('isUndefined', () => {
    it('correctly identifies undefined values', () => {
      expect(isUndefined(Undefined)).toBe(true)
      expect(isUndefined(void 0)).toBe(true)

      expect(isUndefined(null)).toBe(false)
      expect(isUndefined(0)).toBe(false)
      expect(isUndefined('')).toBe(false)
      expect(isUndefined(false)).toBe(false)
      expect(isUndefined({})).toBe(false)
    })
  })

  describe('isDefined', () => {
    it('correctly identifies defined values', () => {
      expect(isDefined(null)).toBe(true)
      expect(isDefined(0)).toBe(true)
      expect(isDefined('')).toBe(true)
      expect(isDefined(false)).toBe(true)
      expect(isDefined({})).toBe(true)

      expect(isDefined(Undefined)).toBe(false)
      expect(isDefined(void 0)).toBe(false)
    })
  })

  describe('isNull', () => {
    it('correctly identifies null values', () => {
      expect(isNull(null)).toBe(true)

      expect(isNull(Undefined)).toBe(false)
      expect(isNull(0)).toBe(false)
      expect(isNull('')).toBe(false)
      expect(isNull(false)).toBe(false)
      expect(isNull({})).toBe(false)
    })
  })

  describe('isDefinedNotNull', () => {
    it('correctly identifies values that are neither undefined nor null', () => {
      expect(isDefinedNotNull(0)).toBe(true)
      expect(isDefinedNotNull('')).toBe(true)
      expect(isDefinedNotNull(false)).toBe(true)
      expect(isDefinedNotNull({})).toBe(true)

      expect(isDefinedNotNull(Undefined)).toBe(false)
      expect(isDefinedNotNull(null)).toBe(false)
    })
  })

  describe('isUndefinedOrNull', () => {
    it('correctly identifies undefined or null values', () => {
      expect(isUndefinedOrNull(Undefined)).toBe(true)
      expect(isUndefinedOrNull(null)).toBe(true)

      expect(isUndefinedOrNull(0)).toBe(false)
      expect(isUndefinedOrNull('')).toBe(false)
      expect(isUndefinedOrNull(false)).toBe(false)
      expect(isUndefinedOrNull({})).toBe(false)
    })
  })

  describe('isBigInt', () => {
    it('correctly identifies BigInt values', () => {
      expect(isBigInt(BigInt(123))).toBe(true)
      expect(isBigInt(123n)).toBe(true)

      expect(isBigInt(123)).toBe(false)
      expect(isBigInt('123')).toBe(false)
      expect(isBigInt(null)).toBe(false)
      expect(isBigInt(Undefined)).toBe(false)
    })
  })

  describe('isString', () => {
    it('correctly identifies string values', () => {
      expect(isString('')).toBe(true)
      expect(isString('hello')).toBe(true)
      expect(isString(String('test'))).toBe(true)

      expect(isString(123)).toBe(false)
      expect(isString(null)).toBe(false)
      expect(isString(Undefined)).toBe(false)
    })
  })

  describe('isNumber', () => {
    it('correctly identifies number values', () => {
      expect(isNumber(0)).toBe(true)
      expect(isNumber(123)).toBe(true)
      expect(isNumber(-456)).toBe(true)
      expect(isNumber(Number.NaN)).toBe(true)
      expect(isNumber(Infinity)).toBe(true)

      expect(isNumber('123')).toBe(false)
      expect(isNumber(null)).toBe(false)
      expect(isNumber(Undefined)).toBe(false)
      expect(isNumber(123n)).toBe(false)
    })
  })

  describe('isObject', () => {
    it('correctly identifies object values', () => {
      expect(isObject({})).toBe(true)
      expect(isObject({ key: 'value' })).toBe(true)
      expect(isObject(new Date())).toBe(true)
      expect(isObject(new Map())).toBe(true)

      expect(isObject([])).toBe(false) // Arrays are not objects for this function
      expect(isObject(null)).toBe(false)
      expect(isObject(Undefined)).toBe(false)
      expect(isObject('object')).toBe(false)
      expect(isObject(123)).toBe(false)
    })
  })

  describe('isArray', () => {
    it('correctly identifies array values', () => {
      expect(isArray([])).toBe(true)
      expect(isArray([1, 2, 3])).toBe(true)
      expect(isArray(Array.from({ length: 5 }))).toBe(true)

      expect(isArray({})).toBe(false)
      expect(isArray('array')).toBe(false)
      expect(isArray(null)).toBe(false)
      expect(isArray(Undefined)).toBe(false)
    })
  })

  describe('isFunction', () => {
    it('correctly identifies function values', () => {
      expect(isFunction(() => {})).toBe(true)
      expect(isFunction(function () {})).toBe(true)
      expect(isFunction(Date)).toBe(true)

      expect(isFunction({})).toBe(false)
      expect(isFunction('function')).toBe(false)
      expect(isFunction(null)).toBe(false)
      expect(isFunction(Undefined)).toBe(false)
    })
  })

  describe('isSymbol', () => {
    it('correctly identifies symbol values', () => {
      expect(isSymbol(Symbol())).toBe(true)
      expect(isSymbol(Symbol('test'))).toBe(true)

      expect(isSymbol('symbol')).toBe(false)
      expect(isSymbol(null)).toBe(false)
      expect(isSymbol(Undefined)).toBe(false)
      expect(isSymbol({})).toBe(false)
    })
  })

  describe('isEmptyObject', () => {
    it('correctly identifies empty object values', () => {
      expect(isEmptyObject({})).toBe(true)
      expect(isEmptyObject(Object.create(null))).toBe(true)

      expect(isEmptyObject({ key: 'value' })).toBe(false)
      expect(isEmptyObject([])).toBe(false)
      expect(isEmptyObject(null)).toBe(false)
      expect(isEmptyObject(Undefined)).toBe(false)
    })
  })

  describe('isEmptyString', () => {
    it('correctly identifies empty string values', () => {
      expect(isEmptyString('')).toBe(true)

      expect(isEmptyString(' ')).toBe(false)
      expect(isEmptyString('hello')).toBe(false)
      expect(isEmptyString(null)).toBe(false)
      expect(isEmptyString(Undefined)).toBe(false)
    })
  })

  describe('isEmptyArray', () => {
    it('correctly identifies empty array values', () => {
      expect(isEmptyArray([])).toBe(true)
      expect(isEmptyArray([])).toBe(true)

      expect(isEmptyArray([1, 2, 3])).toBe(false)
      expect(isEmptyArray({})).toBe(false)
      expect(isEmptyArray(null)).toBe(false)
      expect(isEmptyArray(Undefined)).toBe(false)
    })
  })

  describe('isPopulatedArray', () => {
    it('correctly identifies populated array values', () => {
      expect(isPopulatedArray([1, 2, 3])).toBe(true)
      expect(isPopulatedArray(['test'])).toBe(true)

      expect(isPopulatedArray([])).toBe(false)
      expect(isPopulatedArray({})).toBe(false)
      expect(isPopulatedArray(null)).toBe(false)
      expect(isPopulatedArray(Undefined)).toBe(false)
    })
  })

  describe('isEmpty', () => {
    it('correctly identifies empty values', () => {
      expect(isEmpty('')).toBe(true)
      expect(isEmpty([])).toBe(true)
      expect(isEmpty({})).toBe(true)

      expect(isEmpty('hello')).toBe(false)
      expect(isEmpty([1, 2])).toBe(false)
      expect(isEmpty({ key: 'value' })).toBe(false)
      expect(isEmpty(0)).toBe(false)
      expect(isEmpty(null)).toBe(false)
      expect(isEmpty(Undefined)).toBe(false)
    })
  })

  describe('isFalsy', () => {
    it('correctly identifies falsy values', () => {
      expect(isFalsy(false)).toBe(true)
      expect(isFalsy(0)).toBe(true)
      expect(isFalsy('')).toBe(true)
      expect(isFalsy(null)).toBe(true)
      expect(isFalsy(Undefined)).toBe(true)
      expect(isFalsy(Number.NaN)).toBe(true)
      expect(isFalsy(0n)).toBe(true)

      expect(isFalsy(true)).toBe(false)
      expect(isFalsy(1)).toBe(false)
      expect(isFalsy('hello')).toBe(false)
      expect(isFalsy({})).toBe(false)
      expect(isFalsy([])).toBe(false)
    })
  })

  describe('isTruthy', () => {
    it('correctly identifies truthy values', () => {
      expect(isTruthy(true)).toBe(true)
      expect(isTruthy(1)).toBe(true)
      expect(isTruthy('hello')).toBe(true)
      expect(isTruthy({})).toBe(true)
      expect(isTruthy([])).toBe(true)

      expect(isTruthy(false)).toBe(false)
      expect(isTruthy(0)).toBe(false)
      expect(isTruthy('')).toBe(false)
      expect(isTruthy(null)).toBe(false)
      expect(isTruthy(Undefined)).toBe(false)
    })
  })

  describe('isBoolean', () => {
    it('correctly identifies boolean values', () => {
      expect(isBoolean(true)).toBe(true)
      expect(isBoolean(false)).toBe(true)
      expect(isBoolean(Boolean(1))).toBe(true)

      expect(isBoolean(0)).toBe(false)
      expect(isBoolean(1)).toBe(false)
      expect(isBoolean('true')).toBe(false)
      expect(isBoolean(null)).toBe(false)
      expect(isBoolean(Undefined)).toBe(false)
    })
  })

  describe('isDateString', () => {
    it('correctly identifies date string values', () => {
      expect(isDateString('2023-01-01')).toBe(true)
      expect(isDateString('01/01/2023')).toBe(true)
      expect(isDateString('January 1, 2023')).toBe(true)
      expect(isDateString('2023-01-01T00:00:00Z')).toBe(true)

      expect(isDateString('not a date')).toBe(false)
      expect(isDateString('')).toBe(false)
      expect(isDateString(null)).toBe(false)
      expect(isDateString(Undefined)).toBe(false)
      expect(isDateString(new Date())).toBe(false)
    })
  })

  describe('isDate', () => {
    it('correctly identifies Date objects', () => {
      expect(isDate(new Date())).toBe(true)
      expect(isDate(new Date(2023, 0, 1))).toBe(true)

      expect(isDate('2023-01-01')).toBe(false)
      expect(isDate(Date.now())).toBe(false)
      expect(isDate(null)).toBe(false)
      expect(isDate(Undefined)).toBe(false)
    })
  })

  describe('isRegExp', () => {
    it('correctly identifies RegExp objects', () => {
      expect(isRegExp(/test/)).toBe(true)
      expect(isRegExp(new RegExp('test'))).toBe(true)

      expect(isRegExp('/test/')).toBe(false)
      expect(isRegExp('test')).toBe(false)
      expect(isRegExp(null)).toBe(false)
      expect(isRegExp(Undefined)).toBe(false)
    })
  })

  describe('isError', () => {
    it('correctly identifies Error objects', () => {
      expect(isError(new Error('Test'))).toBe(true)
      expect(isError(new TypeError('Test'))).toBe(true)
      expect(isError(new SyntaxError('Test'))).toBe(true)

      expect(isError('error')).toBe(false)
      expect(isError({ message: 'Error' })).toBe(false)
      expect(isError(null)).toBe(false)
      expect(isError(Undefined)).toBe(false)
    })
  })

  describe('isPromise', () => {
    it('correctly identifies Promise objects', () => {
      expect(isPromise(Promise.resolve())).toBe(true)
      expect(isPromise(new Promise(() => {}))).toBe(true)

      // eslint-disable-next-line unicorn/no-thenable
      expect(isPromise({ then: () => {}, catch: () => {} })).toBe(false) // Not a real Promise instance
      expect(isPromise({})).toBe(false)
      expect(isPromise(null)).toBe(false)
      expect(isPromise(Undefined)).toBe(false)
    })
  })

  describe('isPromiseLike', () => {
    it('correctly identifies Promise-like objects', () => {
      expect(isPromiseLike(Promise.resolve())).toBe(true)
      expect(isPromiseLike(new Promise(() => {}))).toBe(true)
      // eslint-disable-next-line unicorn/no-thenable
      expect(isPromiseLike({ then: () => {} })).toBe(true) // Thenable

      expect(isPromiseLike({})).toBe(false)
      // eslint-disable-next-line unicorn/no-thenable
      expect(isPromiseLike({ then: 5 })).toBe(false) // 'then' must be a function
      expect(isPromiseLike(null)).toBe(false)
      expect(isPromiseLike(Undefined)).toBe(false)
    })
  })

  describe('isMap', () => {
    it('correctly identifies Map objects', () => {
      expect(isMap(new Map())).toBe(true)
      expect(isMap(new Map([['key', 'value']]))).toBe(true)

      expect(isMap({})).toBe(false)
      expect(isMap(new Set())).toBe(false)
      expect(isMap(null)).toBe(false)
      expect(isMap(Undefined)).toBe(false)
    })
  })

  describe('isArrayBufferView', () => {
    it('correctly identifies ArrayBufferView objects', () => {
      expect(isArrayBufferView(new Uint8Array())).toBe(true)
      expect(isArrayBufferView(new Int32Array())).toBe(true)
      expect(isArrayBufferView(new Float64Array())).toBe(true)
      expect(isArrayBufferView(new DataView(new ArrayBuffer(10)))).toBe(true)

      expect(isArrayBufferView(new ArrayBuffer(10))).toBe(false)
      expect(isArrayBufferView({})).toBe(false)
      expect(isArrayBufferView(null)).toBe(false)
      expect(isArrayBufferView(Undefined)).toBe(false)
    })
  })

  describe('isSet', () => {
    it('correctly identifies Set objects', () => {
      expect(isSet(new Set())).toBe(true)
      expect(isSet(new Set([1, 2, 3]))).toBe(true)

      expect(isSet({})).toBe(false)
      expect(isSet(new Map())).toBe(false)
      expect(isSet(null)).toBe(false)
      expect(isSet(Undefined)).toBe(false)
    })
  })

  describe('isWeakMap', () => {
    it('correctly identifies WeakMap objects', () => {
      expect(isWeakMap(new WeakMap())).toBe(true)

      const obj = {}
      const wm = new WeakMap()
      wm.set(obj, 'value')
      expect(isWeakMap(wm)).toBe(true)

      expect(isWeakMap(new Map())).toBe(false)
      expect(isWeakMap({})).toBe(false)
      expect(isWeakMap(null)).toBe(false)
      expect(isWeakMap(Undefined)).toBe(false)
    })
  })

  describe('isWeakSet', () => {
    it('correctly identifies WeakSet objects', () => {
      expect(isWeakSet(new WeakSet())).toBe(true)

      const obj = {}
      const ws = new WeakSet()
      ws.add(obj)
      expect(isWeakSet(ws)).toBe(true)

      expect(isWeakSet(new Set())).toBe(false)
      expect(isWeakSet({})).toBe(false)
      expect(isWeakSet(null)).toBe(false)
      expect(isWeakSet(Undefined)).toBe(false)
    })
  })

  describe('isArrayBuffer', () => {
    it('correctly identifies ArrayBuffer objects', () => {
      expect(isArrayBuffer(new ArrayBuffer(10))).toBe(true)

      expect(isArrayBuffer(new Uint8Array())).toBe(false)
      expect(isArrayBuffer({})).toBe(false)
      expect(isArrayBuffer(null)).toBe(false)
      expect(isArrayBuffer(Undefined)).toBe(false)
    })
  })

  describe('isDataView', () => {
    it('correctly identifies DataView objects', () => {
      const buffer = new ArrayBuffer(10)
      expect(isDataView(new DataView(buffer))).toBe(true)

      expect(isDataView(buffer)).toBe(false)
      expect(isDataView(new Uint8Array(buffer))).toBe(false)
      expect(isDataView({})).toBe(false)
      expect(isDataView(null)).toBe(false)
      expect(isDataView(Undefined)).toBe(false)
    })
  })

  describe('isBlob', () => {
    it('correctly identifies Blob objects', () => {
      // In a browser environment:
      if (typeof Blob === 'undefined') {
        // In Node.js without Blob:
        expect(isBlob({})).toBe(false)
        expect(isBlob(null)).toBe(false)
        expect(isBlob(Undefined)).toBe(false)
      } else {
        expect(isBlob(new Blob(['content']))).toBe(true)

        expect(isBlob({})).toBe(false)
        expect(isBlob(null)).toBe(false)
        expect(isBlob(Undefined)).toBe(false)
      }
    })
  })

  describe('isFile', () => {
    it('correctly identifies File objects', () => {
      // In a browser environment:
      if (typeof File === 'undefined') {
        // In Node.js without File:
        expect(isFile({})).toBe(false)
        expect(isFile(null)).toBe(false)
        expect(isFile(Undefined)).toBe(false)
      } else {
        expect(isFile(new File(['content'], 'filename.txt'))).toBe(true)

        expect(isFile({})).toBe(false)
        expect(isFile(null)).toBe(false)
        expect(isFile(Undefined)).toBe(false)
      }
    })
  })
})
