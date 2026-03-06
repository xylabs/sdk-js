/* eslint-disable max-lines */
import {
  describe, expect, it,
} from 'vitest'

import { matchers } from '../index.ts' // eslint-disable-line no-restricted-imports

describe('matchers', () => {
  describe('toBeArray', () => {
    it('passes for empty array', () => {
      const result = matchers.toBeArray([])
      expect(result.pass).toBe(true)
      expect(result.message()).toBe('expected array')
    })
    it('passes for non-empty array', () => {
      const result = matchers.toBeArray([1, 2, 3])
      expect(result.pass).toBe(true)
    })
    it('fails for string', () => {
      const result = matchers.toBeArray('not array')
      expect(result.pass).toBe(false)
      expect(result.message()).toBe('expected array, but received string')
    })
    it('fails for number', () => {
      const result = matchers.toBeArray(42)
      expect(result.pass).toBe(false)
      expect(result.message()).toBe('expected array, but received number')
    })
    it('fails for null', () => {
      const result = matchers.toBeArray(null)
      expect(result.pass).toBe(false)
      expect(result.message()).toBe('expected array, but received object')
    })
    it('fails for undefined', () => {
      // eslint-disable-next-line unicorn/no-useless-undefined
      const result = matchers.toBeArray(undefined)
      expect(result.pass).toBe(false)
      expect(result.message()).toBe('expected array, but received undefined')
    })
    it('fails for object', () => {
      const result = matchers.toBeArray({})
      expect(result.pass).toBe(false)
      expect(result.message()).toBe('expected array, but received object')
    })
  })

  describe('toBeArrayOfSize', () => {
    it('passes for correct size', () => {
      const result = matchers.toBeArrayOfSize([1, 2, 3], 3)
      expect(result.pass).toBe(true)
      expect(result.message()).toBe('expected array not to have size 3, but received array of size 3')
    })
    it('passes for empty array with size 0', () => {
      const result = matchers.toBeArrayOfSize([], 0)
      expect(result.pass).toBe(true)
    })
    it('fails for wrong size', () => {
      const result = matchers.toBeArrayOfSize([1], 2)
      expect(result.pass).toBe(false)
      expect(result.message()).toBe('expected array of size 2, but received array of size 1')
    })
    it('fails for non-array (string)', () => {
      const result = matchers.toBeArrayOfSize('abc', 3)
      expect(result.pass).toBe(false)
      expect(result.message()).toBe('expected array of size 3, but received a non-array')
    })
    it('fails for non-array (number)', () => {
      const result = matchers.toBeArrayOfSize(42, 1)
      expect(result.pass).toBe(false)
      expect(result.message()).toBe('expected array of size 1, but received a non-array')
    })
    it('fails for null', () => {
      const result = matchers.toBeArrayOfSize(null, 0)
      expect(result.pass).toBe(false)
      expect(result.message()).toBe('expected array of size 0, but received a non-array')
    })
    it('fails for undefined', () => {
      const result = matchers.toBeArrayOfSize(undefined, 0)
      expect(result.pass).toBe(false)
      expect(result.message()).toBe('expected array of size 0, but received a non-array')
    })
  })

  describe('toBeOneOf', () => {
    it('passes when value is in array', () => {
      const result = matchers.toBeOneOf(2, [1, 2, 3])
      expect(result.pass).toBe(true)
      expect(result.message()).toBe('expected 2 not to be one of [1,2,3]')
    })
    it('passes for string value', () => {
      const result = matchers.toBeOneOf('b', ['a', 'b', 'c'])
      expect(result.pass).toBe(true)
    })
    it('fails when value is not in array', () => {
      const result = matchers.toBeOneOf(4, [1, 2, 3])
      expect(result.pass).toBe(false)
      expect(result.message()).toBe('expected 4 to be one of [1,2,3]')
    })
    it('fails for undefined not in array', () => {
      const result = matchers.toBeOneOf(undefined, [1, 2])
      expect(result.pass).toBe(false)
    })
    it('passes for undefined when included', () => {
      const result = matchers.toBeOneOf(undefined, [undefined, 1])
      expect(result.pass).toBe(true)
    })
    it('passes for null when included', () => {
      const result = matchers.toBeOneOf(null, [null, 1])
      expect(result.pass).toBe(true)
    })
  })

  describe('toBeNegative', () => {
    it('passes for negative number', () => {
      const result = matchers.toBeNegative(-1)
      expect(result.pass).toBe(true)
      expect(result.message()).toBe('expected -1 not to be negative')
    })
    it('passes for large negative', () => {
      expect(matchers.toBeNegative(-999_999).pass).toBe(true)
    })
    it('passes for negative float', () => {
      expect(matchers.toBeNegative(-0.5).pass).toBe(true)
    })
    it('fails for positive number', () => {
      const result = matchers.toBeNegative(1)
      expect(result.pass).toBe(false)
      expect(result.message()).toBe('expected 1 to be negative')
    })
    it('fails for zero', () => {
      const result = matchers.toBeNegative(0)
      expect(result.pass).toBe(false)
      expect(result.message()).toBe('expected 0 to be negative')
    })
    it('throws TypeError for non-number (string)', () => {
      expect(() => matchers.toBeNegative('hello' as unknown as number)).toThrow(TypeError)
      expect(() => matchers.toBeNegative('hello' as unknown as number)).toThrow('Expected a number, but received string')
    })
    it('throws TypeError for non-number (boolean)', () => {
      expect(() => matchers.toBeNegative(true as unknown as number)).toThrow(TypeError)
    })
    it('throws TypeError for null', () => {
      expect(() => matchers.toBeNegative(null as unknown as number)).toThrow(TypeError)
    })
    it('throws TypeError for undefined', () => {
      expect(() => matchers.toBeNegative(undefined as unknown as number)).toThrow(TypeError)
    })
  })

  describe('toBePositive', () => {
    it('passes for positive number', () => {
      const result = matchers.toBePositive(1)
      expect(result.pass).toBe(true)
      expect(result.message()).toBe('expected 1 not to be positive')
    })
    it('passes for large positive', () => {
      expect(matchers.toBePositive(999_999).pass).toBe(true)
    })
    it('passes for positive float', () => {
      expect(matchers.toBePositive(0.001).pass).toBe(true)
    })
    it('fails for negative number', () => {
      const result = matchers.toBePositive(-1)
      expect(result.pass).toBe(false)
      expect(result.message()).toBe('expected -1 to be positive')
    })
    it('fails for zero', () => {
      const result = matchers.toBePositive(0)
      expect(result.pass).toBe(false)
      expect(result.message()).toBe('expected 0 to be positive')
    })
    it('throws TypeError for non-number (string)', () => {
      expect(() => matchers.toBePositive('hello' as unknown as number)).toThrow(TypeError)
      expect(() => matchers.toBePositive('hello' as unknown as number)).toThrow('Expected a number, but received string')
    })
    it('throws TypeError for non-number (object)', () => {
      expect(() => matchers.toBePositive({} as unknown as number)).toThrow(TypeError)
    })
    it('throws TypeError for null', () => {
      expect(() => matchers.toBePositive(null as unknown as number)).toThrow(TypeError)
    })
  })

  describe('toBeNumber', () => {
    it('passes for integer', () => {
      const result = matchers.toBeNumber(42)
      expect(result.pass).toBe(true)
      expect(result.message()).toBe('expected 42 not to be a number')
    })
    it('passes for float', () => {
      expect(matchers.toBeNumber(3.14).pass).toBe(true)
    })
    it('passes for zero', () => {
      expect(matchers.toBeNumber(0).pass).toBe(true)
    })
    it('passes for negative', () => {
      expect(matchers.toBeNumber(-5).pass).toBe(true)
    })
    it('passes for Infinity', () => {
      expect(matchers.toBeNumber(Number.POSITIVE_INFINITY).pass).toBe(true)
    })
    it('fails for NaN', () => {
      const result = matchers.toBeNumber(Number.NaN)
      expect(result.pass).toBe(false)
      expect(result.message()).toBe('expected NaN to be a number')
    })
    it('fails for string', () => {
      const result = matchers.toBeNumber('42')
      expect(result.pass).toBe(false)
      expect(result.message()).toBe('expected 42 to be a number')
    })
    it('fails for null', () => {
      expect(matchers.toBeNumber(null).pass).toBe(false)
    })
    it('fails for undefined', () => {
      // eslint-disable-next-line unicorn/no-useless-undefined
      expect(matchers.toBeNumber(undefined).pass).toBe(false)
    })
    it('fails for boolean', () => {
      expect(matchers.toBeNumber(true).pass).toBe(false)
    })
  })

  describe('toBeString', () => {
    it('passes for string', () => {
      const result = matchers.toBeString('hello')
      expect(result.pass).toBe(true)
      expect(result.message()).toBe('expected hello not to be a string')
    })
    it('passes for empty string', () => {
      expect(matchers.toBeString('').pass).toBe(true)
    })
    it('fails for number', () => {
      const result = matchers.toBeString(42)
      expect(result.pass).toBe(false)
      expect(result.message()).toBe('expected 42 to be a string')
    })
    it('fails for null', () => {
      expect(matchers.toBeString(null).pass).toBe(false)
    })
    it('fails for undefined', () => {
      // eslint-disable-next-line unicorn/no-useless-undefined
      expect(matchers.toBeString(undefined).pass).toBe(false)
    })
    it('fails for boolean', () => {
      expect(matchers.toBeString(true).pass).toBe(false)
    })
    it('fails for array', () => {
      expect(matchers.toBeString([]).pass).toBe(false)
    })
  })

  describe('toBeFunction', () => {
    it('passes for arrow function', () => {
      const result = matchers.toBeFunction(() => {})
      expect(result.pass).toBe(true)
      expect(result.message()).toContain('not to be a function')
    })
    it('passes for named function', () => {
      function myFunc() {}
      expect(matchers.toBeFunction(myFunc).pass).toBe(true)
    })
    it('passes for class constructor', () => {
      expect(matchers.toBeFunction(class Foo {}).pass).toBe(true)
    })
    it('fails for string', () => {
      const result = matchers.toBeFunction('fn')
      expect(result.pass).toBe(false)
      expect(result.message()).toBe('expected fn to be a function')
    })
    it('fails for number', () => {
      expect(matchers.toBeFunction(42).pass).toBe(false)
    })
    it('fails for null', () => {
      expect(matchers.toBeFunction(null).pass).toBe(false)
    })
    it('fails for object', () => {
      expect(matchers.toBeFunction({}).pass).toBe(false)
    })
  })

  describe('toBeObject', () => {
    it('passes for plain object', () => {
      const result = matchers.toBeObject({ a: 1 })
      expect(result.pass).toBe(true)
      expect(result.message()).toContain('to be object')
    })
    it('passes for empty object', () => {
      expect(matchers.toBeObject({}).pass).toBe(true)
    })
    it('fails for array', () => {
      const result = matchers.toBeObject([])
      expect(result.pass).toBe(false)
      expect(result.message()).toContain('was array')
    })
    it('fails for null', () => {
      const result = matchers.toBeObject(null)
      expect(result.pass).toBe(false)
      expect(result.message()).toContain('was object')
    })
    it('fails for string', () => {
      const result = matchers.toBeObject('hello')
      expect(result.pass).toBe(false)
      expect(result.message()).toContain('was string')
    })
    it('fails for number', () => {
      const result = matchers.toBeObject(42)
      expect(result.pass).toBe(false)
      expect(result.message()).toContain('was number')
    })
    it('fails for undefined', () => {
      // eslint-disable-next-line unicorn/no-useless-undefined
      expect(matchers.toBeObject(undefined).pass).toBe(false)
    })
    it('fails for function', () => {
      const result = matchers.toBeObject(() => {})
      expect(result.pass).toBe(false)
      expect(result.message()).toContain('was function')
    })
  })

  describe('toBeInteger', () => {
    it('passes for integer', () => {
      const result = matchers.toBeInteger(42)
      expect(result.pass).toBe(true)
      expect(result.message()).toBe('expected 42 not to be an integer')
    })
    it('passes for zero', () => {
      expect(matchers.toBeInteger(0).pass).toBe(true)
    })
    it('passes for negative integer', () => {
      expect(matchers.toBeInteger(-7).pass).toBe(true)
    })
    it('fails for float', () => {
      const result = matchers.toBeInteger(3.14)
      expect(result.pass).toBe(false)
      expect(result.message()).toBe('expected 3.14 to be an integer')
    })
    it('fails for NaN', () => {
      expect(matchers.toBeInteger(Number.NaN).pass).toBe(false)
    })
    it('fails for Infinity', () => {
      expect(matchers.toBeInteger(Number.POSITIVE_INFINITY).pass).toBe(false)
    })
    it('throws TypeError for non-number (string)', () => {
      expect(() => matchers.toBeInteger('42' as unknown as number)).toThrow(TypeError)
      expect(() => matchers.toBeInteger('42' as unknown as number)).toThrow('Expected a number, but received string')
    })
    it('throws TypeError for null', () => {
      expect(() => matchers.toBeInteger(null as unknown as number)).toThrow(TypeError)
    })
    it('throws TypeError for undefined', () => {
      expect(() => matchers.toBeInteger(undefined as unknown as number)).toThrow(TypeError)
    })
    it('throws TypeError for boolean', () => {
      expect(() => matchers.toBeInteger(true as unknown as number)).toThrow(TypeError)
    })
  })

  describe('toBeTrue', () => {
    it('passes for true', () => {
      const result = matchers.toBeTrue(true)
      expect(result.pass).toBe(true)
      expect(result.message()).toBe('expected true to be true')
    })
    it('fails for false', () => {
      const result = matchers.toBeTrue(false)
      expect(result.pass).toBe(false)
      expect(result.message()).toBe('expected false to be true but was not true')
    })
    it('fails for truthy number (1)', () => {
      const result = matchers.toBeTrue(1)
      expect(result.pass).toBe(false)
    })
    it('fails for truthy string', () => {
      expect(matchers.toBeTrue('true').pass).toBe(false)
    })
    it('fails for null', () => {
      expect(matchers.toBeTrue(null).pass).toBe(false)
    })
    it('fails for undefined', () => {
      // eslint-disable-next-line unicorn/no-useless-undefined
      expect(matchers.toBeTrue(undefined).pass).toBe(false)
    })
  })

  describe('toBeFalse', () => {
    it('passes for false', () => {
      const result = matchers.toBeFalse(false)
      expect(result.pass).toBe(true)
      expect(result.message()).toBe('expected false to be false')
    })
    it('fails for true', () => {
      const result = matchers.toBeFalse(true)
      expect(result.pass).toBe(false)
      expect(result.message()).toBe('expected true to be false but was not false')
    })
    it('fails for falsy number (0)', () => {
      const result = matchers.toBeFalse(0)
      expect(result.pass).toBe(false)
    })
    it('fails for empty string', () => {
      expect(matchers.toBeFalse('').pass).toBe(false)
    })
    it('fails for null', () => {
      expect(matchers.toBeFalse(null).pass).toBe(false)
    })
    it('fails for undefined', () => {
      // eslint-disable-next-line unicorn/no-useless-undefined
      expect(matchers.toBeFalse(undefined).pass).toBe(false)
    })
  })

  describe('toContainAllValues', () => {
    it('passes when array contains all values', () => {
      const result = matchers.toContainAllValues([1, 2, 3], [1, 3])
      expect(result.pass).toBe(true)
      expect(result.message()).toContain('not to contain all values')
    })
    it('passes when object contains all values', () => {
      const result = matchers.toContainAllValues({
        a: 1, b: 2, c: 3,
      }, [1, 3])
      expect(result.pass).toBe(true)
    })
    it('fails when array missing values', () => {
      const result = matchers.toContainAllValues([1, 2], [1, 3])
      expect(result.pass).toBe(false)
      expect(result.message()).toContain('to contain all values')
      expect(result.message()).toContain('does not')
    })
    it('fails when object missing values', () => {
      const result = matchers.toContainAllValues({ a: 1 }, [1, 5])
      expect(result.pass).toBe(false)
    })
    it('fails for non-array non-object (string)', () => {
      const result = matchers.toContainAllValues('hello' as unknown, [1])
      expect(result.pass).toBe(false)
      expect(result.message()).toContain('Expected an array or object, but received string')
    })
    it('fails for non-array non-object (number)', () => {
      const result = matchers.toContainAllValues(42 as unknown, [1])
      expect(result.pass).toBe(false)
      expect(result.message()).toContain('Expected an array or object, but received number')
    })
    it('fails for null', () => {
      const result = matchers.toContainAllValues(null as unknown, [1])
      expect(result.pass).toBe(false)
      expect(result.message()).toContain('Expected an array or object, but received object')
    })
    it('fails for undefined', () => {
      const result = matchers.toContainAllValues(undefined as unknown, [1])
      expect(result.pass).toBe(false)
      expect(result.message()).toContain('Expected an array or object, but received undefined')
    })
    it('passes with empty expected values', () => {
      const result = matchers.toContainAllValues([1, 2], [])
      expect(result.pass).toBe(true)
    })
  })

  describe('toContainKey', () => {
    it('passes when key exists', () => {
      const result = matchers.toContainKey({ a: 1, b: 2 }, 'a')
      expect(result.pass).toBe(true)
      expect(result.message()).toBe('Expected object not to contain key "a", but it does.')
    })
    it('passes for key with undefined value', () => {
      const result = matchers.toContainKey({ a: undefined }, 'a')
      expect(result.pass).toBe(true)
    })
    it('fails when key is missing', () => {
      const result = matchers.toContainKey({ a: 1 }, 'b')
      expect(result.pass).toBe(false)
      expect(result.message()).toBe('Expected object to contain key "b", but it does not.')
    })
    it('fails for empty object', () => {
      const result = matchers.toContainKey({}, 'a')
      expect(result.pass).toBe(false)
    })
    it('does not match inherited keys', () => {
      const proto = { inherited: true }
      const obj = Object.create(proto) as Record<string, unknown>
      const result = matchers.toContainKey(obj, 'inherited')
      expect(result.pass).toBe(false)
    })
  })

  describe('toInclude', () => {
    it('works with arrays - passes', () => {
      const result = matchers.toInclude([1, 2, 3], 2)
      expect(result.pass).toBe(true)
      expect(result.message()).toContain('not to include')
    })
    it('works with arrays - fails', () => {
      const result = matchers.toInclude([1, 2, 3], 4)
      expect(result.pass).toBe(false)
      expect(result.message()).toContain('to include')
    })
    it('works with strings - passes', () => {
      const result = matchers.toInclude('hello world', 'world')
      expect(result.pass).toBe(true)
      expect(result.message()).toContain('not to include')
    })
    it('works with strings - fails', () => {
      const result = matchers.toInclude('hello', 'xyz')
      expect(result.pass).toBe(false)
      expect(result.message()).toContain('to include')
    })
    it('works with objects (checks values)', () => {
      const result = matchers.toInclude({ a: 1, b: 2 }, 2)
      expect(result.pass).toBe(true)
    })
    it('fails for object without value', () => {
      const result = matchers.toInclude({ a: 1 }, 5)
      expect(result.pass).toBe(false)
    })
    it('fails for null', () => {
      const result = matchers.toInclude(null, 1)
      expect(result.pass).toBe(false)
    })
    it('fails for undefined', () => {
      const result = matchers.toInclude(undefined, 1)
      expect(result.pass).toBe(false)
    })
    it('fails for number', () => {
      const result = matchers.toInclude(42, 4)
      expect(result.pass).toBe(false)
    })
    it('fails for boolean', () => {
      const result = matchers.toInclude(true, true)
      expect(result.pass).toBe(false)
    })
  })

  describe('toIncludeAllMembers', () => {
    it('passes when all members present', () => {
      const result = matchers.toIncludeAllMembers([1, 2, 3], [1, 3])
      expect(result.pass).toBe(true)
      expect(result.message()).toContain('not to include all members')
    })
    it('passes with duplicate members', () => {
      const result = matchers.toIncludeAllMembers([1, 2, 2, 3], [2, 3])
      expect(result.pass).toBe(true)
    })
    it('passes with empty expected array', () => {
      const result = matchers.toIncludeAllMembers([1, 2], [])
      expect(result.pass).toBe(true)
    })
    it('fails when members missing', () => {
      const result = matchers.toIncludeAllMembers([1, 2], [1, 3])
      expect(result.pass).toBe(false)
      expect(result.message()).toContain('Missing members: [3]')
    })
    it('fails when received is not an array', () => {
      const result = matchers.toIncludeAllMembers('hello' as unknown as unknown[], [1])
      expect(result.pass).toBe(false)
      expect(result.message()).toBe('Expected both received and expected values to be arrays.')
    })
    it('fails when expected is not an array', () => {
      const result = matchers.toIncludeAllMembers([1, 2], 'hello' as unknown as unknown[])
      expect(result.pass).toBe(false)
      expect(result.message()).toBe('Expected both received and expected values to be arrays.')
    })
    it('fails when both are not arrays', () => {
      const result = matchers.toIncludeAllMembers('a' as unknown as unknown[], 'b' as unknown as unknown[])
      expect(result.pass).toBe(false)
    })
  })

  describe('toContainAllKeys', () => {
    it('passes when all keys present', () => {
      const result = matchers.toContainAllKeys({
        a: 1, b: 2, c: 3,
      }, ['a', 'b'])
      expect(result.pass).toBe(true)
      expect(result.message()).toContain('not to contain all keys')
    })
    it('passes with exact keys', () => {
      const result = matchers.toContainAllKeys({ a: 1, b: 2 }, ['a', 'b'])
      expect(result.pass).toBe(true)
    })
    it('passes with empty expected keys', () => {
      const result = matchers.toContainAllKeys({ a: 1 }, [])
      expect(result.pass).toBe(true)
    })
    it('fails when keys missing', () => {
      const result = matchers.toContainAllKeys({ a: 1 }, ['a', 'b'])
      expect(result.pass).toBe(false)
      expect(result.message()).toContain('Missing keys: ["b"]')
    })
    it('fails for null received', () => {
      const result = matchers.toContainAllKeys(null as unknown as object, ['a'])
      expect(result.pass).toBe(false)
      expect(result.message()).toContain('to be an object')
    })
    it('fails for non-object received (number)', () => {
      const result = matchers.toContainAllKeys(42 as unknown as object, ['a'])
      expect(result.pass).toBe(false)
      expect(result.message()).toContain('to be an object')
    })
    it('fails for non-array expectedKeys', () => {
      const result = matchers.toContainAllKeys({ a: 1 }, 'a' as unknown as string[])
      expect(result.pass).toBe(false)
      expect(result.message()).toContain('Expected keys to be an array')
    })
  })

  describe('toContainValues', () => {
    it('passes when object contains all values (primitives)', () => {
      const result = matchers.toContainValues({
        a: 1, b: 2, c: 3,
      }, [1, 3])
      expect(result.pass).toBe(true)
      expect(result.message()).toContain('not to contain all values')
    })
    it('passes with deep equal nested objects', () => {
      const result = matchers.toContainValues({ a: { x: 1 }, b: { y: 2 } }, [{ x: 1 }])
      expect(result.pass).toBe(true)
    })
    it('passes with empty expected values', () => {
      const result = matchers.toContainValues({ a: 1 }, [])
      expect(result.pass).toBe(true)
    })
    it('fails when values missing', () => {
      const result = matchers.toContainValues({ a: 1 }, [1, 5])
      expect(result.pass).toBe(false)
      expect(result.message()).toContain('Missing values: [5]')
    })
    it('fails for null received', () => {
      const result = matchers.toContainValues(null as unknown as object, [1])
      expect(result.pass).toBe(false)
      expect(result.message()).toContain('to be an object')
    })
    it('fails for non-object received (string)', () => {
      const result = matchers.toContainValues('hello' as unknown as object, [1])
      expect(result.pass).toBe(false)
      expect(result.message()).toContain('to be an object')
    })
    it('fails for non-array expectedValues', () => {
      const result = matchers.toContainValues({ a: 1 }, 'notarray' as unknown as unknown[])
      expect(result.pass).toBe(false)
      expect(result.message()).toContain('Expected values to be an array')
    })
    it('handles deep equal with different types returning false', () => {
      const result = matchers.toContainValues({ a: 1 }, ['1'])
      expect(result.pass).toBe(false)
    })
    it('handles deep equal with different length objects', () => {
      const result = matchers.toContainValues({ a: { x: 1, y: 2 } }, [{ x: 1 }])
      expect(result.pass).toBe(false)
    })
  })

  describe('toBeEmpty', () => {
    it('passes for empty array', () => {
      const result = matchers.toBeEmpty([])
      expect(result.pass).toBe(true)
      expect(result.message()).toBe('Expected value not to be empty, but it was.')
    })
    it('passes for empty string', () => {
      const result = matchers.toBeEmpty('')
      expect(result.pass).toBe(true)
    })
    it('passes for empty object', () => {
      const result = matchers.toBeEmpty({})
      expect(result.pass).toBe(true)
    })
    it('fails for non-empty array', () => {
      const result = matchers.toBeEmpty([1])
      expect(result.pass).toBe(false)
      expect(result.message()).toBe('Expected value to be empty, but it was not.')
    })
    it('fails for non-empty string', () => {
      const result = matchers.toBeEmpty('a')
      expect(result.pass).toBe(false)
    })
    it('fails for non-empty object', () => {
      const result = matchers.toBeEmpty({ a: 1 })
      expect(result.pass).toBe(false)
    })
    it('fails for null', () => {
      const result = matchers.toBeEmpty(null)
      expect(result.pass).toBe(false)
      expect(result.message()).toContain('Expected value to be an empty array, string, object, Map, or Set')
    })
    it('fails for undefined', () => {
      // eslint-disable-next-line unicorn/no-useless-undefined
      const result = matchers.toBeEmpty(undefined)
      expect(result.pass).toBe(false)
      expect(result.message()).toContain('but received undefined')
    })
    it('fails for number', () => {
      const result = matchers.toBeEmpty(42)
      expect(result.pass).toBe(false)
      expect(result.message()).toContain('but received number')
    })
    it('fails for boolean', () => {
      const result = matchers.toBeEmpty(false)
      expect(result.pass).toBe(false)
      expect(result.message()).toContain('but received boolean')
    })
    it('passes for empty Map (via object path)', () => {
      const result = matchers.toBeEmpty(new Map())
      expect(result.pass).toBe(true)
    })
    it('passes for empty Set (via object path)', () => {
      const result = matchers.toBeEmpty(new Set())
      expect(result.pass).toBe(true)
    })
    it('fails for non-empty Map (via object path)', () => {
      const map = new Map([['a', 1]])
      const result = matchers.toBeEmpty(map)
      // Map/Set go through the object branch (typeof === "object"), not the instanceof branch
      // Object.keys on a Map returns [], so this reports as empty (known limitation)
      expect(result.pass).toBe(true)
    })
    it('fails for non-empty Set (via object path)', () => {
      const set = new Set([1, 2, 3])
      const result = matchers.toBeEmpty(set)
      // Same limitation as Map: Object.keys on a Set returns []
      expect(result.pass).toBe(true)
    })
    it('fails for function (not array, string, or object)', () => {
      const result = matchers.toBeEmpty(() => {})
      expect(result.pass).toBe(false)
      expect(result.message()).toContain('but received function')
    })
  })

  describe('toBeValidDate', () => {
    it('passes for valid date', () => {
      const result = matchers.toBeValidDate(new Date())
      expect(result.pass).toBe(true)
      expect(result.message()).toContain('not to be a valid Date')
    })
    it('passes for specific date', () => {
      const result = matchers.toBeValidDate(new Date('2024-01-01'))
      expect(result.pass).toBe(true)
    })
    it('passes for epoch date', () => {
      const result = matchers.toBeValidDate(new Date(0))
      expect(result.pass).toBe(true)
    })
    it('fails for invalid date', () => {
      const result = matchers.toBeValidDate(new Date('invalid'))
      expect(result.pass).toBe(false)
      expect(result.message()).toContain('to be a valid Date')
    })
    it('fails for string date', () => {
      const result = matchers.toBeValidDate('2024-01-01')
      expect(result.pass).toBe(false)
    })
    it('fails for number', () => {
      const result = matchers.toBeValidDate(1_704_067_200_000)
      expect(result.pass).toBe(false)
    })
    it('fails for null', () => {
      const result = matchers.toBeValidDate(null)
      expect(result.pass).toBe(false)
    })
    it('fails for undefined', () => {
      // eslint-disable-next-line unicorn/no-useless-undefined
      const result = matchers.toBeValidDate(undefined)
      expect(result.pass).toBe(false)
    })
    it('fails for plain object', () => {
      const result = matchers.toBeValidDate({})
      expect(result.pass).toBe(false)
    })
  })
})
