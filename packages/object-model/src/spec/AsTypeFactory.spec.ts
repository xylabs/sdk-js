import {
  describe, expect, it,
} from 'vitest'

import { AsTypeFactory } from '../AsTypeFactory.ts'
// eslint-disable-next-line no-restricted-imports
import type { TypeCheck, TypeCheckConfig } from '../index.ts'

interface TestType {
  kind: 'test'
  value: number
}

const isTestType: TypeCheck<TestType> = (obj: unknown): obj is TestType => {
  return typeof obj === 'object' && obj !== null && 'kind' in obj && (obj as TestType).kind === 'test'
}

const isString: TypeCheck<string> = (value: unknown): value is string => typeof value === 'string'

describe('AsTypeFactory.create', () => {
  const asTestType = AsTypeFactory.create<TestType>(isTestType)
  const asString = AsTypeFactory.create<string>(isString)

  it('returns the value when typeCheck passes', () => {
    const input: TestType = { kind: 'test', value: 42 }
    const result = asTestType(input)
    expect(result).toBe(input)
  })

  it('returns undefined when typeCheck fails', () => {
    const result = asTestType({ kind: 'other', value: 1 })
    expect(result).toBeUndefined()
  })

  it('returns undefined for null input (not required)', () => {
    const result = asTestType(null as unknown as TestType)
    expect(result).toBeUndefined()
  })

  it('returns undefined for undefined input (not required)', () => {
    const result = asTestType(undefined as unknown as TestType)
    expect(result).toBeUndefined()
  })

  it('throws for un-awaited promise input', () => {
    const promise = Promise.resolve({ kind: 'test', value: 1 })
    expect(() => asTestType(promise as unknown as TestType)).toThrow('un-awaited promises may not be sent to "as" functions')
  })

  describe('with string assert', () => {
    it('returns the value when typeCheck passes', () => {
      const input: TestType = { kind: 'test', value: 10 }
      const result = asTestType(input, 'Expected TestType')
      expect(result).toBe(input)
    })

    it('throws with the provided message when typeCheck fails', () => {
      expect(() => asTestType({ kind: 'wrong' }, 'Expected TestType')).toThrow('Expected TestType')
    })
  })

  describe('with function assert', () => {
    it('returns the value when typeCheck passes', () => {
      const input: TestType = { kind: 'test', value: 5 }
      const result = asTestType(input, () => 'Custom error message')
      expect(result).toBe(input)
    })

    it('throws with the function result when typeCheck fails', () => {
      expect(() => asTestType({ kind: 'wrong' }, () => 'Custom error message')).toThrow('Custom error message')
    })
  })

  describe('with config object', () => {
    it('returns the value when typeCheck passes with config', () => {
      const input: TestType = { kind: 'test', value: 3 }
      const config: TypeCheckConfig = {}
      const result = asTestType(input, config)
      expect(result).toBe(input)
    })

    it('returns undefined for null input with optional config', () => {
      const result = asTestType(null as unknown as TestType, { required: false })
      expect(result).toBeUndefined()
    })

    it('returns undefined when typeCheck fails with config', () => {
      const result = asTestType({ kind: 'wrong' }, { required: false })
      expect(result).toBeUndefined()
    })

    it('passes log config through to typeCheck', () => {
      const result = asString('test', { log: true })
      expect(result).toBe('test')
    })
  })

  describe('with required config', () => {
    it('does not short-circuit for null when required is true', () => {
      // When required is true, null should not return undefined early;
      // instead it goes through the typeCheck which will fail and return undefined
      const result = asTestType(null as unknown as TestType, { required: true })
      expect(result).toBeUndefined()
    })

    it('does not short-circuit for undefined when required is true', () => {
      const result = asTestType(undefined as unknown as TestType, { required: true })
      expect(result).toBeUndefined()
    })
  })

  describe('with assert and config', () => {
    it('returns the value when typeCheck passes', () => {
      const input: TestType = { kind: 'test', value: 7 }
      const result = asTestType(input, 'Must be TestType', {})
      expect(result).toBe(input)
    })

    it('throws with message when typeCheck fails and assert is a string', () => {
      expect(() => asTestType({ kind: 'wrong' }, 'Must be TestType', {})).toThrow('Must be TestType')
    })

    it('throws with function assert and config when typeCheck fails', () => {
      expect(() => asTestType({ kind: 'wrong' }, () => 'Function assert error', {})).toThrow('Function assert error')
    })
  })

  describe('predicate usage (numeric second argument)', () => {
    it('handles numeric second argument as predicate index', () => {
      // When used as a predicate (e.g., in .filter), the index is passed as second arg
      const input: TestType = { kind: 'test', value: 1 }
      const result = asTestType(input, 0 as unknown as string)
      expect(result).toBe(input)
    })

    it('returns undefined for invalid value when used as predicate', () => {
      const result = asTestType({ kind: 'wrong' }, 0 as unknown as string)
      expect(result).toBeUndefined()
    })

    it('works correctly with Array.filter', () => {
      const items = [
        { kind: 'test', value: 1 },
        { kind: 'other', value: 2 },
        { kind: 'test', value: 3 },
      ]
      const filtered = items.map(item => asTestType(item)).filter(Boolean)
      expect(filtered).toHaveLength(2)
      expect(filtered[0]).toEqual({ kind: 'test', value: 1 })
      expect(filtered[1]).toEqual({ kind: 'test', value: 3 })
    })
  })

  describe('does not throw with string assert when typeCheck passes', () => {
    it('returns value without throwing', () => {
      expect(asString('hello', 'assert message')).toBe('hello')
    })
  })

  describe('does not throw with function assert when typeCheck passes', () => {
    it('returns value without throwing', () => {
      expect(asString('hello', () => 'assert message')).toBe('hello')
    })
  })
})

describe('AsTypeFactory.createOptional', () => {
  const asOptionalTestType = AsTypeFactory.createOptional<TestType>(isTestType)

  it('returns the value when typeCheck passes', () => {
    const input: TestType = { kind: 'test', value: 99 }
    const result = asOptionalTestType(input)
    expect(result).toBe(input)
  })

  it('returns undefined when typeCheck fails', () => {
    const result = asOptionalTestType({ kind: 'other' })
    expect(result).toBeUndefined()
  })

  it('returns undefined for null input', () => {
    const result = asOptionalTestType(null as unknown as TestType)
    expect(result).toBeUndefined()
  })

  it('returns undefined for undefined input', () => {
    const result = asOptionalTestType(undefined as unknown as TestType)
    expect(result).toBeUndefined()
  })

  it('throws for un-awaited promise input', () => {
    const promise = Promise.resolve({ kind: 'test', value: 1 })
    expect(() => asOptionalTestType(promise as unknown as TestType)).toThrow('un-awaited promises may not be sent to "as" functions')
  })

  it('returns the exact same reference for valid input', () => {
    const input: TestType = { kind: 'test', value: 0 }
    const result = asOptionalTestType(input)
    expect(result).toBe(input)
  })
})
