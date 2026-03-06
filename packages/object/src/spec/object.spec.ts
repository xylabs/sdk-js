import {
  describe, expect, it,
} from 'vitest'

import {
  AsObjectFactory,
  AsTypeFactory,
  createDeepMerge,
  IsObjectFactory,
  isJsonArray,
  isJsonObject,
  isJsonValue,
  ObjectWrapper,
  omitBy,
  omitByPrefix,
  pickBy,
  pickByPrefix,
  removeFields,
  toSafeJson,
  toSafeJsonString,
  toSafeJsonValue,
} from '../index.ts'
import { asAnyObject } from '../asObject.ts'
import { isType } from '../isType.ts'

describe('removeFields', () => {
  it('removes specified fields', () => {
    const obj = { a: 1, b: 2, c: 3 }
    expect(removeFields(obj, ['b'])).toEqual({ a: 1, c: 3 })
  })

  it('returns clone without mutation', () => {
    const obj = { x: 1, y: 2 }
    const result = removeFields(obj, ['x'])
    expect(obj).toEqual({ x: 1, y: 2 })
    expect(result).toEqual({ y: 2 })
  })
})

describe('pickBy', () => {
  it('picks matching fields', () => {
    const obj = { a: 1, b: 'two', c: 3 }
    const result = pickBy(obj, (v) => typeof v === 'number')
    expect(result).toEqual({ a: 1, c: 3 })
  })

  it('returns obj when maxDepth is 0', () => {
    const obj = { a: 1 }
    expect(pickBy(obj, () => true, 0)).toBe(obj)
  })

  it('handles arrays', () => {
    const arr = [{ a: 1, b: 'x' }, { a: 2, b: 'y' }]
    const result = pickBy(arr as any, (v) => typeof v === 'number', 2)
    expect(result).toEqual([{ a: 1 }, { a: 2 }])
  })

  it('recurses into nested objects', () => {
    const obj = { top: 1, nested: { keep: 1, drop: 'x' } }
    const result = pickBy(obj, (v) => typeof v !== 'string', 3)
    expect(result).toEqual({ top: 1, nested: { keep: 1 } })
  })

  it('skips inherited properties (Object.hasOwn check)', () => {
    const parent = { inherited: 'from-parent' }
    const child = Object.create(parent) as Record<string, unknown>
    child.own = 'mine'
    const result = pickBy(child, () => true)
    expect(result).toEqual({ own: 'mine' })
    expect((result as any).inherited).toBeUndefined()
  })
})

describe('pickByPrefix', () => {
  it('picks fields starting with prefix', () => {
    const obj = { _a: 1, _b: 2, c: 3 }
    expect(pickByPrefix(obj, '_')).toEqual({ _a: 1, _b: 2 })
  })

  it('recurses deeply and only keeps prefixed keys at each level', () => {
    const obj = { _a: 1, b: 'no', nested: { _c: 2, d: 'no' } }
    // pickByPrefix only picks keys starting with '_', so 'nested' and 'b' are dropped
    expect(pickByPrefix(obj, '_')).toEqual({ _a: 1 })
  })
})

describe('pickBy - array edge cases', () => {
  it('handles arrays with primitive (non-object) items', () => {
    const arr = [1, 'two', 3] as any
    const result = pickBy(arr, () => true, 2)
    expect(result).toEqual([1, 'two', 3])
  })

  it('handles arrays with null items', () => {
    const arr = [null, { a: 1 }] as any
    const result = pickBy(arr, () => true, 2)
    expect(result).toEqual([null, { a: 1 }])
  })
})

describe('omitBy', () => {
  it('omits matching fields', () => {
    const obj = { a: 1, b: 'two', c: 3 }
    const result = omitBy(obj, (v) => typeof v === 'string')
    expect(result).toEqual({ a: 1, c: 3 })
  })

  it('returns obj when maxDepth is 0', () => {
    const obj = { a: 1 }
    expect(omitBy(obj, () => true, 0)).toBe(obj)
  })

  it('handles arrays', () => {
    const arr = [{ a: 1, b: 'x' }, { a: 2, b: 'y' }]
    const result = omitBy(arr as any, (v) => typeof v === 'string', 2)
    expect(result).toEqual([{ a: 1 }, { a: 2 }])
  })

  it('recurses into nested objects', () => {
    const obj = { top: 1, nested: { keep: 1, drop: 'x' } }
    const result = omitBy(obj, (v) => typeof v === 'string', 3)
    expect(result).toEqual({ top: 1, nested: { keep: 1 } })
  })

  it('skips inherited properties (Object.hasOwn check)', () => {
    const parent = { inherited: 'from-parent' }
    const child = Object.create(parent) as Record<string, unknown>
    child.own = 'mine'
    const result = omitBy(child, () => false)
    expect(result).toEqual({ own: 'mine' })
    expect((result as any).inherited).toBeUndefined()
  })
})

describe('omitByPrefix', () => {
  it('omits fields starting with prefix', () => {
    const obj = { _a: 1, _b: 2, c: 3 }
    expect(omitByPrefix(obj, '_')).toEqual({ c: 3 })
  })

  it('recurses deeply into nested objects', () => {
    const obj = { _hidden: 1, visible: 'yes', nested: { _secret: 2, public: 'ok' } }
    expect(omitByPrefix(obj, '_')).toEqual({ visible: 'yes', nested: { public: 'ok' } })
  })
})

describe('omitBy - array edge cases', () => {
  it('handles arrays with primitive (non-object) items', () => {
    const arr = [1, 'two', 3] as any
    const result = omitBy(arr, () => false, 2)
    expect(result).toEqual([1, 'two', 3])
  })

  it('handles arrays with null items', () => {
    const arr = [null, { a: 1 }] as any
    const result = omitBy(arr, () => false, 2)
    expect(result).toEqual([null, { a: 1 }])
  })
})

describe('toSafeJson', () => {
  it('handles primitives', () => {
    expect(toSafeJson('hello')).toBe('hello')
    expect(toSafeJson(42)).toBe(42)
    expect(toSafeJson(true)).toBe(true)
    expect(toSafeJson(null)).toBe(null)
  })

  it('handles objects', () => {
    expect(toSafeJson({ a: 1 })).toEqual({ a: 1 })
  })

  it('handles arrays', () => {
    expect(toSafeJson([1, 'two'])).toEqual([1, 'two'])
  })

  it('handles circular references', () => {
    const obj: any = { a: 1 }
    obj.self = obj
    const result = toSafeJson(obj) as any
    expect(result.self).toBe('[Circular]')
  })

  it('handles max depth', () => {
    const deep = { a: { b: { c: { d: 'deep' } } } }
    const result = toSafeJson(deep, 2) as any
    expect(result.a.b).toBe('[MaxDepth]')
  })

  it('handles non-json types', () => {
    expect(toSafeJsonValue(undefined)).toBe('[undefined]')
    expect(toSafeJsonValue(Symbol())).toBe('[symbol]')
    expect(toSafeJsonValue(() => {})).toBe('[function]')
  })
})

describe('toSafeJsonString', () => {
  it('returns a JSON string', () => {
    const result = toSafeJsonString({ a: 1 })
    expect(JSON.parse(result)).toEqual({ a: 1 })
  })
})

describe('createDeepMerge', () => {
  it('concat array strategy concatenates arrays', () => {
    const merge = createDeepMerge({ arrayStrategy: 'concat' })
    const result = merge({ list: [1] }, { list: [2, 3] })
    expect(result).toEqual({ list: [1, 2, 3] })
  })

  it('mutate option mutates the first object', () => {
    const merge = createDeepMerge({ mutate: true })
    const a = { x: 1 }
    const b = { y: 2 }
    const result = merge(a, b)
    expect(a).toEqual({ x: 1, y: 2 })
    expect(result).toBe(a)
  })

  it('skips unsafe keys', () => {
    const merge = createDeepMerge({ mutate: false })
    const result = merge({}, JSON.parse('{"__proto__": {"polluted": true}}'))
    expect((result as any).polluted).toBeUndefined()
  })

  it('creates target object when merging into non-object', () => {
    const merge = createDeepMerge({ mutate: false })
    const result = merge({ a: 'not-object' }, { a: { nested: true } })
    expect(result).toEqual({ a: { nested: true } })
  })

  it('mutate with no objects uses empty object', () => {
    const merge = createDeepMerge({ mutate: true })
    const result = merge()
    expect(result).toEqual({})
  })

  it('handles null values in source', () => {
    const merge = createDeepMerge({ mutate: false })
    const result = merge({ a: { nested: 1 } }, { a: null } as any)
    expect(result.a).toBeNull()
  })

  it('concat strategy with non-array target', () => {
    const merge = createDeepMerge({ arrayStrategy: 'concat' })
    const result = merge({ list: 'not-array' }, { list: [1, 2] })
    expect(result).toEqual({ list: [1, 2] })
  })

  it('handles symbol keys', () => {
    const sym = Symbol('test')
    const merge = createDeepMerge({ mutate: false })
    const result = merge({}, { [sym]: 'value' })
    expect(result[sym]).toBe('value')
  })
})

describe('ObjectWrapper', () => {
  class TestWrapper extends ObjectWrapper<{ name: string }> {
    getName() { return this.obj.name }
    getStringKey() { return this.stringKeyObj }
  }

  it('wraps an object', () => {
    const w = new TestWrapper({ name: 'test' })
    expect(w.getName()).toBe('test')
    expect(w.obj).toEqual({ name: 'test' })
  })

  it('exposes stringKeyObj', () => {
    const w = new TestWrapper({ name: 'test' })
    expect(w.getStringKey()).toEqual({ name: 'test' })
  })
})

describe('isType (deprecated)', () => {
  it('checks object type', () => {
    expect(isType({}, 'object')).toBe(true)
    expect(isType(null, 'object')).toBe(false)
    expect(isType([], 'object')).toBe(false)
  })

  it('checks array type', () => {
    expect(isType([], 'array')).toBe(true)
  })

  it('checks null type', () => {
    expect(isType(null, 'null')).toBe(true)
  })

  it('checks undefined type', () => {
    expect(isType(undefined, 'undefined')).toBe(true)
  })

  it('checks string type via default', () => {
    expect(isType('hi', 'string')).toBe(true)
  })
})

describe('JsonObject validators', () => {
  it('isJsonValue works', () => {
    expect(isJsonValue('hello')).toBe(true)
    expect(isJsonValue(42)).toBe(true)
    expect(isJsonValue(null)).toBe(true)
    expect(isJsonValue([1, 2])).toBe(true)
    expect(isJsonValue({ a: 1 })).toBe(true)
  })

  it('isJsonArray works', () => {
    expect(isJsonArray([1, 'two'])).toBe(true)
    expect(isJsonArray('not array')).toBe(false)
  })

  it('isJsonObject works', () => {
    expect(isJsonObject({ a: 1 })).toBe(true)
    expect(isJsonObject('not object')).toBe(false)
  })
})

describe('IsObjectFactory', () => {
  it('creates a type check from a shape', () => {
    const factory = new IsObjectFactory()
    const check = factory.create({ name: 'string', age: 'number' })
    expect(check({ name: 'Alice', age: 30 })).toBe(true)
    expect(check({ name: 'Alice', age: '30' })).toBe(false)
    expect(check('not object')).toBe(false)
  })

  it('supports additional checks', () => {
    const factory = new IsObjectFactory()
    const check = factory.create({}, [(obj) => 'required' in (obj as any)])
    expect(check({ required: true })).toBe(true)
    expect(check({})).toBe(false)
  })

  it('logs on failure when log config provided', () => {
    const factory = new IsObjectFactory()
    const warnings: string[] = []
    const logger = { warn: (msg: string) => warnings.push(msg) }
    const check = factory.create({ name: 'string' })
    check({ name: 42 }, { log: logger as any })
    expect(warnings.length).toBeGreaterThan(0)
    expect(warnings[0]).toContain('isType Failed')
  })

  it('logs to console when log is true', () => {
    const factory = new IsObjectFactory()
    const check = factory.create({ name: 'string' })
    const originalWarn = console.warn
    const warnings: string[] = []
    console.warn = (msg: string) => warnings.push(msg)
    check({ name: 42 }, { log: true })
    console.warn = originalWarn
    expect(warnings.length).toBeGreaterThan(0)
    expect(warnings[0]).toContain('isType Failed')
  })

  it('creates check with no shape', () => {
    const factory = new IsObjectFactory()
    const check = factory.create()
    expect(check({ anything: true })).toBe(true)
    expect(check('string')).toBe(false)
  })
})

describe('AsTypeFactory', () => {
  const isStringObj = (v: unknown): v is { value: string } =>
    typeof v === 'object' && v !== null && 'value' in v && typeof (v as any).value === 'string'

  it('create returns value when type check passes', () => {
    const asStringObj = AsTypeFactory.create(isStringObj)
    expect(asStringObj({ value: 'hello' })).toEqual({ value: 'hello' })
  })

  it('create returns undefined when type check fails', () => {
    const asStringObj = AsTypeFactory.create(isStringObj)
    expect(asStringObj({ value: 123 })).toBeUndefined()
  })

  it('create returns undefined for null/undefined when not required', () => {
    const asStringObj = AsTypeFactory.create(isStringObj)
    expect(asStringObj(null)).toBeUndefined()
    expect(asStringObj(undefined)).toBeUndefined()
  })

  it('create throws for promises', () => {
    const asStringObj = AsTypeFactory.create(isStringObj)
    expect(() => asStringObj(Promise.resolve() as any)).toThrow('un-awaited promises')
  })

  it('create throws with assert string when check fails', () => {
    const asStringObj = AsTypeFactory.create(isStringObj)
    expect(() => asStringObj({ value: 123 }, 'Expected string obj')).toThrow()
  })

  it('create throws with assert function when check fails', () => {
    const asStringObj = AsTypeFactory.create(isStringObj)
    expect(() => asStringObj({ value: 123 }, () => 'custom error')).toThrow()
  })

  it('create handles number as second arg (predicate usage)', () => {
    const asStringObj = AsTypeFactory.create(isStringObj)
    // When used as filter predicate, index (number) is passed as second arg
    expect(asStringObj({ value: 'hi' }, 0 as any)).toEqual({ value: 'hi' })
  })

  it('create handles object config', () => {
    const asStringObj = AsTypeFactory.create(isStringObj)
    expect(asStringObj({ value: 'hi' }, { required: false })).toEqual({ value: 'hi' })
  })

  it('createOptional returns value when check passes', () => {
    const optional = AsTypeFactory.createOptional(isStringObj)
    expect(optional({ value: 'hello' })).toEqual({ value: 'hello' })
  })

  it('createOptional returns undefined for null/undefined', () => {
    const optional = AsTypeFactory.createOptional(isStringObj)
    expect(optional(null)).toBeUndefined()
    expect(optional(undefined)).toBeUndefined()
  })

  it('createOptional returns undefined when check fails', () => {
    const optional = AsTypeFactory.createOptional(isStringObj)
    expect(optional({ value: 123 })).toBeUndefined()
  })

  it('createOptional throws for promises', () => {
    const optional = AsTypeFactory.createOptional(isStringObj)
    expect(() => optional(Promise.resolve() as any)).toThrow('un-awaited promises')
  })
})

describe('AsObjectFactory', () => {
  const isStringObj = (v: unknown): v is { value: string } =>
    typeof v === 'object' && v !== null && 'value' in v && typeof (v as any).value === 'string'

  it('create returns value when check passes', () => {
    const asFunc = AsObjectFactory.create(isStringObj)
    expect(asFunc({ value: 'hello' })).toEqual({ value: 'hello' })
  })

  it('createOptional returns value when check passes', () => {
    const optFunc = AsObjectFactory.createOptional(isStringObj)
    expect(optFunc({ value: 'hello' })).toEqual({ value: 'hello' })
  })

  it('createOptional returns undefined for null', () => {
    const optFunc = AsObjectFactory.createOptional(isStringObj)
    expect(optFunc(null)).toBeUndefined()
  })
})

describe('asAnyObject', () => {
  it('returns object for valid objects', () => {
    expect(asAnyObject({ a: 1 })).toEqual({ a: 1 })
  })

  it('returns undefined for non-objects', () => {
    expect(asAnyObject('string')).toBeUndefined()
    expect(asAnyObject(42)).toBeUndefined()
  })
})
