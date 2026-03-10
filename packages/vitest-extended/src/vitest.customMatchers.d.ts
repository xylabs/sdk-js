// vitest.customMatchers.d.ts
import 'vitest'

/** Custom matcher methods available on Vitest's `expect` when using `@xylabs/vitest-extended`. */
interface CustomMatchers<T = unknown> {
  /** Asserts the value is an array. */
  toBeArray(): T
  /** Asserts the value is an array with the specified length. */
  toBeArrayOfSize(size: number): T
  /** Asserts the value is empty (zero-length array/string, empty object, Map, or Set). */
  toBeEmpty(): T
  /** Asserts the value is strictly `false`. */
  toBeFalse(): T
  /** Asserts the value is of type `function`. */
  toBeFunction(): T
  /** Asserts the value is an integer. */
  toBeInteger(): T
  /** Asserts the value is a negative number. */
  toBeNegative(): T
  /** Asserts the value is of type `number` and not NaN. */
  toBeNumber(): T
  /** Asserts the value is a plain object (not an array or null). */
  toBeObject(): T
  /** Asserts the value is one of the values in the provided array. */
  toBeOneOf(expected: unknown[]): T
  /** Asserts the value is a positive number. */
  toBePositive(): T
  /** Asserts the value is of type `string`. */
  toBeString(): T
  /** Asserts the value is strictly `true`. */
  toBeTrue(): T
  /** Asserts the value is a valid Date instance. */
  toBeValidDate(): T
  /** Asserts the object contains all of the specified keys. */
  toContainAllKeys(expectedKeys: string[]): T
  /** Asserts that all expected values are present in the object's values. */
  toContainAllValues(expectedValues: unknown[]): T
  /** Asserts the object contains the specified key. */
  toContainKey(key: string): T
  /** Asserts the object contains all of the specified values (using deep equality). */
  toContainValues(expectedValues: unknown[]): T
  /** Asserts the array, string, or object values include the specified value. */
  toInclude(expected: unknown): T
  /** Asserts the array includes all members of the expected array. */
  toIncludeAllMembers(expected: unknown[]): T
}

// Extend the expect Matchers interface
declare module 'vitest' {
  interface Assertion<T = unknown> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}
