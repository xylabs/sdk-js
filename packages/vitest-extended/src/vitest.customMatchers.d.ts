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
    toContainAllKeys(received: object, expectedKeys: string[]): T
  }

  interface Assertion<T = unknown> {
    toIncludeAllMembers(received: unknown[], expected: unknown[]): T
  }

  interface Assertion<T = unknown> {
    toContainValues(received: object, expectedValues: unknown[]): T
  }

  interface Assertion<T = unknown> {
    toBeEmpty(received: unknown): T
  }

  interface expect {
    toBeArray(): T
    toBeArrayOfSize(size: number): T
    toBeEmpty(received: unknown): T
    toBeFalse(): T
    toBeFunction(): T
    toBeNumber(): T
    toBeString(): T
    toBeTrue(): T
    toContainAllKeys(received: object, expectedKeys: string[]): T
    toContainValues(received: object, expectedValues: unknown[]): T
    toIncludeAllMembers(received: unknown[], expected: unknown[]): T
  }
}
