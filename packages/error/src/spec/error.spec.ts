import {
  describe, expect, it,
} from 'vitest'

import { assertError } from '../assert.ts'
import { handleError, handleErrorAsync } from '../handleError.ts'

describe('assertError', () => {
  it('returns undefined when assert is undefined', () => {
    expect(assertError('value', undefined, 'default')).toBeUndefined()
  })

  it('throws with string assert config', () => {
    expect(() => assertError('value', 'custom error', 'default')).toThrow('custom error')
  })

  it('throws with boolean true assert config using default message', () => {
    expect(() => assertError('value', true, 'default message')).toThrow('default message')
  })

  it('throws with boolean false assert config using default message', () => {
    // boolean false still evaluates to the defaultMessage string which is truthy, so it throws
    expect(() => assertError('value', false, 'default message')).toThrow('default message')
  })

  it('throws with callback returning string', () => {
    expect(() => assertError('value', (_v, msg) => msg, 'default')).toThrow('default')
  })

  it('does not throw with callback returning false', () => {
    expect(assertError('value', () => false, 'default')).toBeUndefined()
  })

  it('throws with callback returning true (uses default message)', () => {
    expect(() => assertError('value', () => true, 'default message')).toThrow('default message')
  })

  it('passes value and default message to callback', () => {
    let capturedValue: unknown
    let capturedMessage: string | undefined
    assertError('test-value', (v, msg) => {
      capturedValue = v
      capturedMessage = msg
      return false
    }, 'default-msg')
    expect(capturedValue).toBe('test-value')
    expect(capturedMessage).toBe('default-msg')
  })
})

describe('handleError', () => {
  it('calls handler for Error instances', () => {
    const result = handleError(new Error('test'), error => error.message)
    expect(result).toBe('test')
  })

  it('rethrows non-Error values', () => {
    expect(() => handleError('not an error', () => 'handled')).toThrow('not an error')
  })
})

describe('handleErrorAsync', () => {
  it('calls async handler for Error instances', async () => {
    const result = await handleErrorAsync(new Error('async test'), error => Promise.resolve(error.message))
    expect(result).toBe('async test')
  })

  it('rethrows non-Error values', async () => {
    await expect(handleErrorAsync('not an error', () => Promise.resolve('handled'))).rejects.toThrow('not an error')
  })
})
