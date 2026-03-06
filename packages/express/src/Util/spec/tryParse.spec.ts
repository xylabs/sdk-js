import {
  describe, expect, it,
} from 'vitest'

// eslint-disable-next-line sonarjs/deprecation
import { tryParse } from '../tryParse.ts'

describe('tryParse', () => {
  it('should parse a valid numeric string', () => {
    // eslint-disable-next-line @typescript-eslint/no-deprecated, sonarjs/deprecation
    const result = tryParse(Number.parseFloat, '42.5')
    expect(result).toBe(42.5)
  })

  it('should parse a valid integer string', () => {
    // eslint-disable-next-line @typescript-eslint/no-deprecated, sonarjs/deprecation
    const result = tryParse(Number.parseInt, '10')
    expect(result).toBe(10)
  })

  it('should return undefined when value is undefined', () => {
    // eslint-disable-next-line @typescript-eslint/no-deprecated, sonarjs/deprecation
    const result = tryParse(Number.parseFloat)
    expect(result).toBeUndefined()
  })

  it('should return undefined when parse result is NaN', () => {
    // eslint-disable-next-line @typescript-eslint/no-deprecated, sonarjs/deprecation
    const result = tryParse(Number.parseFloat, 'not-a-number')
    expect(result).toBeUndefined()
  })

  it('should return undefined when parse function throws', () => {
    const throwingParser = () => {
      throw new Error('parse error')
    }
    // eslint-disable-next-line @typescript-eslint/no-deprecated, sonarjs/deprecation
    const result = tryParse(throwingParser, 'value')
    expect(result).toBeUndefined()
  })

  it('should work with custom parse functions', () => {
    const jsonParse = (value: string) => JSON.parse(value) as Record<string, unknown>
    // eslint-disable-next-line @typescript-eslint/no-deprecated, sonarjs/deprecation
    const result = tryParse(jsonParse, '{"key":"value"}')
    expect(result).toEqual({ key: 'value' })
  })

  it('should return zero when parsing "0"', () => {
    // eslint-disable-next-line @typescript-eslint/no-deprecated, sonarjs/deprecation
    const result = tryParse(Number.parseFloat, '0')
    expect(result).toBe(0)
  })

  it('should return negative numbers', () => {
    // eslint-disable-next-line @typescript-eslint/no-deprecated, sonarjs/deprecation
    const result = tryParse(Number.parseFloat, '-5.5')
    expect(result).toBe(-5.5)
  })

  it('should return undefined when parse function throws on bad JSON', () => {
    const jsonParse = (value: string) => JSON.parse(value) as unknown
    // eslint-disable-next-line @typescript-eslint/no-deprecated, sonarjs/deprecation
    const result = tryParse(jsonParse, '{invalid}')
    expect(result).toBeUndefined()
  })

  it('should return null-ish result as undefined when result is null (no value)', () => {
    // When value is undefined, func is not called, result is null, which is filtered
    // eslint-disable-next-line @typescript-eslint/no-deprecated, sonarjs/deprecation
    const result = tryParse(Number.parseFloat)
    expect(result).toBeUndefined()
  })
})
