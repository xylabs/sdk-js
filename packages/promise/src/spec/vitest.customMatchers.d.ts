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
    toBeString(): T
  }
  interface Assertion<T = unknown> {
    toBeArrayOfSize(size: number): T
  }
}
