import {
  describe, expect, it,
} from 'vitest'
import { z } from 'zod'

import {
  zodAllFactory, zodAsAsyncFactory, zodAsFactory, zodIsFactory, zodToAsyncFactory, zodToFactory,
} from '../index.ts'

const StringSchema = z.string()
const NumberSchema = z.number()

describe('zodIsFactory', () => {
  const isString = zodIsFactory(StringSchema)

  it('returns true for matching values', () => {
    expect(isString('hello')).toBe(true)
  })

  it('returns false for non-matching values', () => {
    expect(isString(42)).toBe(false)
    expect(isString(null)).toBe(false)
  })
})

describe('zodAsFactory', () => {
  const asNumber = zodAsFactory(NumberSchema, 'Number')

  it('returns value when valid', () => {
    expect(asNumber(42)).toBe(42)
  })

  it('returns undefined when invalid and no assert', () => {
    expect(asNumber('hello')).toBeUndefined()
  })

  it('throws when invalid with assert true (boolean)', () => {
    expect(() => asNumber('hello', true)).toThrow()
  })

  it('throws when invalid with assert string', () => {
    expect(() => asNumber('hello', 'must be number')).toThrow('must be number')
  })

  it('throws when invalid with assert object config', () => {
    expect(() => asNumber('hello', { name: 'myField' })).toThrow('[Number][myField]')
  })

  it('throws when invalid with assert function', () => {
    expect(() => asNumber('hello', (value, message) => `custom: ${value} - ${message}`)).toThrow('custom: hello')
  })
})

describe('zodAsAsyncFactory', () => {
  const asNumber = zodAsAsyncFactory(NumberSchema, 'Number')

  it('returns value when valid', async () => {
    expect(await asNumber(42)).toBe(42)
  })

  it('returns undefined when invalid and no assert', async () => {
    expect(await asNumber('hello')).toBeUndefined()
  })

  it('throws when invalid with assert true (boolean)', async () => {
    await expect(asNumber('hello', true)).rejects.toThrow()
  })

  it('throws when invalid with assert string', async () => {
    await expect(asNumber('hello', 'must be number')).rejects.toThrow('must be number')
  })

  it('throws when invalid with assert object config', async () => {
    await expect(asNumber('hello', { name: 'myField' })).rejects.toThrow('[Number][myField]')
  })

  it('throws when invalid with assert function', async () => {
    await expect(asNumber('hello', (value, message) => `custom: ${value} - ${message}`)).rejects.toThrow('custom: hello')
  })
})

describe('zodToFactory', () => {
  const toNumber = zodToFactory(NumberSchema, 'Number')

  it('returns value when valid', () => {
    expect(toNumber(42)).toBe(42)
  })

  it('returns undefined when invalid and no assert', () => {
    expect(toNumber('hello')).toBeUndefined()
  })

  it('throws when invalid with assert', () => {
    expect(() => toNumber('hello', true)).toThrow()
  })
})

describe('zodToAsyncFactory', () => {
  const toNumber = zodToAsyncFactory(NumberSchema, 'Number')

  it('returns value when valid', async () => {
    expect(await toNumber(42)).toBe(42)
  })

  it('returns undefined when invalid and no assert', async () => {
    expect(await toNumber('hello')).toBeUndefined()
  })

  it('throws when invalid with assert', async () => {
    await expect(toNumber('hello', true)).rejects.toThrow()
  })
})

describe('zodAllFactory', () => {
  const factories = zodAllFactory(StringSchema, 'String')

  it('creates is, as, and to functions', () => {
    expect(typeof factories['isString']).toBe('function')
    expect(typeof factories['asString']).toBe('function')
    expect(typeof factories['toString']).toBe('function')
  })
})
