import {
  describe, expect, it,
} from 'vitest'

import { Enum } from '../index.ts'

describe('Enum', () => {
  it('creates a readonly enum-like object', () => {
    const Color = Enum({
      Red: 'red',
      Green: 'green',
      Blue: 'blue',
    } as const)

    expect(Color.Red).toBe('red')
    expect(Color.Green).toBe('green')
    expect(Color.Blue).toBe('blue')
  })

  it('works with numeric values', () => {
    const Status = Enum({
      Active: 1,
      Inactive: 0,
    } as const)

    expect(Status.Active).toBe(1)
    expect(Status.Inactive).toBe(0)
  })

  it('preserves all keys', () => {
    const Direction = Enum({
      Up: 'up', Down: 'down', Left: 'left', Right: 'right',
    } as const)

    expect(Object.keys(Direction)).toEqual(['Up', 'Down', 'Left', 'Right'])
  })
})
