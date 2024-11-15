// vitest.customMatchers.d.ts
import 'vitest'

// Extend the expect Matchers interface
declare module 'vitest' {
  interface Assertion<T = unknown> {
    toBeNumber(): T
  }
  interface Assertion<T = unknown> {
    toBeFunction(): T
  }
  interface Assertion<T = unknown> {
    toBeArray(): T
  }
  interface Assertion<T = unknown> {
    toBeString(): T
  }
  interface Assertion<T = unknown> {
    toBeFalse(): T
  }
  interface Assertion<T = unknown> {
    toBeTrue(): T
  }
  interface Assertion<T = unknown> {
    toBeArrayOfSize(size: number): T
  }

  interface Assertion<T = unknown> {
    toContainAllKeys(expectedKeys: string[]): T
  }

  interface Assertion<T = unknown> {
    toIncludeAllMembers(expected: unknown[]): T
  }

  interface Assertion<T = unknown> {
    toContainValues(expectedValues: unknown[]): T
  }

  interface Assertion<T = unknown> {
    toBeEmpty(): T
  }

  interface expect {
    toBeArray(): T
    toBeArrayOfSize(size: number): T
    toBeEmpty(): T
    toBeFalse(): T
    toBeFunction(): T
    toBeNumber(): T
    toBeString(): T
    toBeTrue(): T
    toContainAllKeys(expectedKeys: string[]): T
    toContainValues(expectedValues: unknown[]): T
    toIncludeAllMembers(expected: unknown[]): T
  }
}
