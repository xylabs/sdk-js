// vitest.customMatchers.d.ts
import 'vitest'

interface CustomMatchers<T = unknown> {
  toBeArray(): T
  toBeArrayOfSize(size: number): T
  toBeEmpty(): T
  toBeFalse(): T
  toBeFunction(): T
  toBeInteger(): T
  toBeNegative(): T
  toBeNumber(): T
  toBeObject(): T
  toBeOneOf(expected: unknown[]): T
  toBePositive(): T
  toBeString(): T
  toBeTrue(): T
  toBeValidDate(): T
  toContainAllKeys(expectedKeys: string[]): T
  toContainAllValues(expectedValues: unknown[]): T
  toContainKey(key: string): T
  toContainValues(expectedValues: unknown[]): T
  toInclude(expected: unknown): T
  toIncludeAllMembers(expected: unknown[]): T
}

// Extend the expect Matchers interface
declare module 'vitest' {
  interface Assertion<T = unknown> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}
