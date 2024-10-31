import { expect } from 'vitest'

function toBeType(received: unknown, expectedType: string) {
  const pass = typeof received === expectedType && !Number.isNaN(received)
  return pass
    ? {
        message: () => `expected ${received} not to be a ${expectedType}`,
        pass: true,
      }
    : {
        message: () => `expected ${received} to be a ${expectedType}`,
        pass: false,
      }
}

export const matchers = {
  toBeArrayOfSize(received: unknown, expectedSize: number) {
    const pass = Array.isArray(received) && received.length === expectedSize
    return pass
      ? {
          message: () => `expected array not to have size ${expectedSize}, but received array of size ${received.length}`,
          pass: true,
        }
      : {
          message: () => Array.isArray(received)
            ? `expected array of size ${expectedSize}, but received array of size ${received.length}`
            : `expected array of size ${expectedSize}, but received a non-array`,
          pass: false,
        }
  },
  toBeNumber: (received: unknown) => toBeType(received, 'number'),
  toBeFunction: (received: unknown) => toBeType(received, 'function'),
  toBeString: (received: unknown) => toBeType(received, 'string'),
  toBeFalse(received: unknown) {
    const pass = received === false
    return pass
      ? {
          message: () => `expected ${received} to be false`,
          pass: true,
        }
      : {
          message: () => `expected ${received} to be false but was not false`,
          pass: false,
        }
  },
  toBeTrue(received: unknown) {
    const pass = received === true
    return pass
      ? {
          message: () => `expected ${received} to be true`,
          pass: true,
        }
      : {
          message: () => `expected ${received} to be true but was not true`,
          pass: false,
        }
  },
}

expect.extend(matchers)
