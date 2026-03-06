import {
  describe, expect, it,
} from 'vitest'

import { PromiseEx } from '../PromiseEx.ts'

describe('PromiseEx', () => {
  it('resolves like a normal promise', async () => {
    const p = new PromiseEx<string>((resolve) => {
      resolve?.('hello')
    })
    expect(await p).toBe('hello')
  })

  it('stores a value', async () => {
    const p = new PromiseEx<string, number>((resolve) => {
      resolve?.('done')
    }, 42)
    const result = p.value((v) => {
      expect(v).toBe(42)
      return false
    })
    expect(result).toBe(p)
    expect(result.cancelled).toBeUndefined()
    expect(await p).toBe('done')
  })

  it('sets cancelled when value callback returns true', async () => {
    const p = new PromiseEx<string, number>((resolve) => {
      resolve?.('done')
    }, 10)
    void p.value(() => true)
    expect(p.cancelled).toBe(true)
    expect(await p).toBe('done')
  })

  it('sets cancelled via then with onvalue returning true', async () => {
    const p = new PromiseEx<string, number>((resolve) => {
      resolve?.('ok')
    }, 5)
    const result = await p.then(v => v, undefined, () => true)
    expect(p.cancelled).toBe(true)
    expect(result).toBe('ok')
  })

  it('does not set cancelled when onvalue returns false in then', async () => {
    const p = new PromiseEx<string, number>((resolve) => {
      resolve?.('ok')
    }, 5)
    await p.then(v => v, undefined, () => false)
    expect(p.cancelled).toBeUndefined()
  })
})
