/** Result returned by a custom matcher function. */
export interface ExpectationResult {
  /** The actual value received by the matcher. */
  actual?: unknown
  /** The expected value the matcher compared against. */
  expected?: unknown
  /** Returns a human-readable failure or negation message. */
  message: () => string
  /** Whether the matcher assertion passed. */
  pass: boolean
}

/**
 * Checks whether the received value matches the expected JavaScript type and is not NaN.
 * @param received - The value to check.
 * @param expectedType - The expected `typeof` string (e.g. 'number', 'string').
 * @returns An ExpectationResult indicating pass or fail.
 */
function toBeType(received: unknown, expectedType: string): ExpectationResult {
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

/** Collection of custom Vitest matchers extending the built-in `expect` assertions. */
export const matchers = {
  /**
   * Asserts the received value is an array with the specified length.
   * @param received - The value to check.
   * @param expectedSize - The expected array length.
   */
  toBeArrayOfSize(received: unknown, expectedSize: number): ExpectationResult {
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
  /**
   * Asserts the received value is an array.
   * @param received - The value to check.
   */
  toBeArray(received: unknown): ExpectationResult {
    const pass = Array.isArray(received)
    return pass
      ? {
          message: () => 'expected array',
          pass: true,
        }
      : {
          message: () => `expected array, but received ${typeof received}`,
          pass: false,
        }
  },
  /**
   * Asserts the received value is one of the values in the expected array.
   * @param received - The value to check.
   * @param expected - The array of acceptable values.
   */
  toBeOneOf(received: unknown, expected: unknown[]): ExpectationResult {
    const pass = expected.includes(received)
    return pass
      ? {
          pass: true,
          message: () =>
            `expected ${received} not to be one of ${JSON.stringify(expected)}`,
        }
      : {
          pass: false,
          message: () =>
            `expected ${received} to be one of ${JSON.stringify(expected)}`,
        }
  },
  /**
   * Asserts the received number is negative (less than zero).
   * @param received - The number to check.
   */
  toBeNegative(received: number): ExpectationResult {
    if (typeof received !== 'number') {
      throw new TypeError(`Expected a number, but received ${typeof received}`)
    }

    const pass = received < 0
    return pass
      ? {
          pass: true,
          message: () =>
            `expected ${received} not to be negative`,
        }
      : {
          pass: false,
          message: () =>
            `expected ${received} to be negative`,
        }
  },
  /**
   * Asserts the received number is positive (greater than zero).
   * @param received - The number to check.
   */
  toBePositive(received: number): ExpectationResult {
    if (typeof received !== 'number') {
      throw new TypeError(`Expected a number, but received ${typeof received}`)
    }

    const pass = received > 0
    return pass
      ? {
          pass: true,
          message: () =>
            `expected ${received} not to be positive`,
        }
      : {
          pass: false,
          message: () =>
            `expected ${received} to be positive`,
        }
  },
  /**
   * Asserts the received value is of type `number` and not NaN.
   * @param received - The value to check.
   */
  toBeNumber: (received: unknown) => toBeType(received, 'number'),
  /**
   * Asserts the received value is of type `function`.
   * @param received - The value to check.
   */
  toBeFunction: (received: unknown) => toBeType(received, 'function'),
  /**
   * Asserts the received value is of type `string`.
   * @param received - The value to check.
   */
  toBeString: (received: unknown) => toBeType(received, 'string'),
  /**
   * Asserts the received value is a plain object (not an array or null).
   * @param received - The value to check.
   */
  toBeObject(received: unknown): ExpectationResult {
    const pass = typeof received === 'object' && !Array.isArray(received) && received !== null
    return pass
      ? {
          message: () => `expected ${received} to be object`,
          pass: true,
        }
      : {
          message: () => `expected ${received} to be an object but was ${Array.isArray(received) ? 'array' : typeof received}`,
          pass: false,
        }
  },
  /**
   * Asserts the received number is an integer.
   * @param received - The number to check.
   */
  toBeInteger(received: number): ExpectationResult {
    if (typeof received !== 'number') {
      throw new TypeError(`Expected a number, but received ${typeof received}`)
    }

    const pass = Number.isInteger(received)
    return pass
      ? {
          pass: true,
          message: () =>
            `expected ${received} not to be an integer`,
        }
      : {
          pass: false,
          message: () =>
            `expected ${received} to be an integer`,
        }
  },
  /**
   * Asserts the received value is strictly `false`.
   * @param received - The value to check.
   */
  toBeFalse(received: unknown): ExpectationResult {
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
  /**
   * Asserts the received value is strictly `true`.
   * @param received - The value to check.
   */
  toBeTrue(received: unknown): ExpectationResult {
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
  /**
   * Asserts that all expected values are present in the received array or object values.
   * @param received - The array or object to check.
   * @param expectedValues - The values that must all be present.
   */
  toContainAllValues(received: unknown, expectedValues: unknown[]) {
    let receivedValues: unknown[]

    // Check if received is an array or an object
    if (Array.isArray(received)) {
      receivedValues = received
    } else if (typeof received === 'object' && received !== null) {
      receivedValues = Object.values(received)
    } else {
      return {
        pass: false,
        message: () => `Expected an array or object, but received ${typeof received}.`,
      }
    }

    // Check if all expected values are in the received values
    const pass = expectedValues.every(value => receivedValues.includes(value))

    return {
      pass,
      message: () =>
        pass
          ? `Expected ${JSON.stringify(received)} not to contain all values ${JSON.stringify(expectedValues)}, but it does.`
          : `Expected ${JSON.stringify(received)} to contain all values ${JSON.stringify(expectedValues)}, but it does not.`,
    }
  },
  /**
   * Asserts that the received object contains the specified key.
   * @param received - The object to check.
   * @param key - The key that should be present.
   */
  toContainKey(received: object, key: string) {
    const pass = Object.prototype.hasOwnProperty.call(received, key)
    return pass
      ? {
          pass: true,
          message: () => `Expected object not to contain key "${key}", but it does.`,
        }
      : {
          pass: false,
          message: () => `Expected object to contain key "${key}", but it does not.`,
        }
  },
  /**
   * Asserts that the received array, string, or object values include the specified value.
   * @param received - The array, string, or object to search within.
   * @param value - The value to look for.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toInclude(received: unknown, value: any) {
    let pass: boolean

    if (Array.isArray(received)) {
      pass = received.includes(value)
    } else if (typeof received === 'string') {
      pass = received.includes(value)
    } else if (typeof received === 'object' && received !== null) {
      pass = Object.values(received).includes(value)
    } else {
      pass = false
    }

    return {
      pass,
      message: () =>
        pass
          ? `Expected ${JSON.stringify(received)} not to include ${JSON.stringify(value)}, but it does.`
          : `Expected ${JSON.stringify(received)} to include ${JSON.stringify(value)}, but it does not.`,
    }
  },
  /**
   * Asserts that the received array includes all members of the expected array.
   * @param received - The array to check.
   * @param expected - The members that must all be present.
   */
  toIncludeAllMembers(received: unknown[], expected: unknown[]): ExpectationResult {
    if (!Array.isArray(received) || !Array.isArray(expected)) {
      return {
        pass: false,
        message: () => 'Expected both received and expected values to be arrays.',
      }
    }

    const missingMembers = expected.filter(item => !received.includes(item))

    return missingMembers.length === 0
      ? {
          pass: true,
          message: () =>
            `Expected array not to include all members of ${JSON.stringify(expected)}, but it does.`,
        }
      : {
          pass: false,
          message: () =>
            `Expected array to include all members of ${JSON.stringify(expected)}. Missing members: ${JSON.stringify(
              missingMembers,
            )}.`,
        }
  },
  /**
   * Asserts that the received object contains all of the specified keys.
   * @param received - The object to check.
   * @param expectedKeys - The keys that must all be present.
   */
  toContainAllKeys(received: object, expectedKeys: string[]): ExpectationResult {
    if (typeof received !== 'object' || received === null) {
      return {
        pass: false,
        message: () => `Expected ${JSON.stringify(received)} to be an object.`,
      }
    }

    if (!Array.isArray(expectedKeys)) {
      return {
        pass: false,
        message: () => `Expected keys to be an array, but received ${JSON.stringify(expectedKeys)}.`,
      }
    }

    const missingKeys = expectedKeys.filter(key => !(key in received))

    return missingKeys.length === 0
      ? {
          pass: true,
          message: () =>
            `Expected object not to contain all keys ${JSON.stringify(expectedKeys)}, but it does.`,
        }
      : {
          pass: false,
          message: () =>
            `Expected object to contain all keys ${JSON.stringify(expectedKeys)}. Missing keys: ${JSON.stringify(
              missingKeys,
            )}.`,
        }
  },
  /**
   * Asserts that the received object contains all of the specified values (using deep equality).
   * @param received - The object to check.
   * @param expectedValues - The values that must all be present.
   */
  toContainValues(received: object, expectedValues: unknown[]): ExpectationResult {
    if (typeof received !== 'object' || received === null) {
      return {
        pass: false,
        message: () => `Expected ${JSON.stringify(received)} to be an object.`,
      }
    }

    if (!Array.isArray(expectedValues)) {
      return {
        pass: false,
        message: () => `Expected values to be an array, but received ${JSON.stringify(expectedValues)}.`,
      }
    }

    const objectValues = Object.values(received)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const deepEqual = (a: any, b: any): boolean => {
      if (a === b) return true
      if (typeof a !== typeof b) return false
      if (a && b && typeof a === 'object') {
        const aKeys = Object.keys(a)
        const bKeys = Object.keys(b)
        if (aKeys.length !== bKeys.length) return false
        return aKeys.every(key => deepEqual(a[key], b[key]))
      }
      return false
    }

    const missingValues = expectedValues.filter(
      expectedValue => !objectValues.some(value => deepEqual(value, expectedValue)),
    )

    return missingValues.length === 0
      ? {
          pass: true,
          message: () =>
            `Expected object not to contain all values ${JSON.stringify(expectedValues)}, but it does.`,
        }
      : {
          pass: false,
          message: () =>
            `Expected object to contain all values ${JSON.stringify(expectedValues)}. Missing values: ${JSON.stringify(
              missingValues,
            )}.`,
        }
  },
  /**
   * Asserts the received value is empty (zero-length array/string, empty object, or empty Map/Set).
   * @param received - The value to check.
   */
  toBeEmpty(received: unknown): ExpectationResult {
    let isEmpty = false

    if (Array.isArray(received) || typeof received === 'string') {
      isEmpty = received.length === 0
    } else if (received && typeof received === 'object') {
      isEmpty = Object.keys(received).length === 0
    } else if (received instanceof Map || received instanceof Set) {
      isEmpty = received.size === 0
    } else {
      return {
        pass: false,
        message: () =>
          `Expected value to be an empty array, string, object, Map, or Set, but received ${typeof received}.`,
      }
    }

    return isEmpty
      ? {
          pass: true,
          message: () =>
            'Expected value not to be empty, but it was.',
        }
      : {
          pass: false,
          message: () =>
            'Expected value to be empty, but it was not.',
        }
  },
  /**
   * Asserts the received value is a valid Date instance (not an invalid date).
   * @param received - The value to check.
   */
  toBeValidDate(
    received: unknown,
  ) {
    const isValid
      = received instanceof Date && !Number.isNaN(received.getTime())

    return {
      pass: isValid,
      message: () =>
        isValid
          ? `expected ${received} not to be a valid Date`
          : `expected ${received} to be a valid Date`,
    }
  },
}
