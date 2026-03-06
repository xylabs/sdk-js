import {
  describe, expect, it,
} from 'vitest'

import type { MercatorTile } from '../mercator/index.ts'
import { tileFromQuadkey, tileToQuadkey } from '../mercator/index.ts'

describe('Quadkey encoding/decoding', () => {
  describe('tileFromQuadkey', () => {
    it('quadkey "" maps to tile [0, 0, 0]', () => {
      expect(tileFromQuadkey('')).toEqual([0, 0, 0])
    })

    it('quadkey "0" maps to tile [0, 0, 1]', () => {
      expect(tileFromQuadkey('0')).toEqual([0, 0, 1])
    })

    it('quadkey "1" maps to tile [1, 0, 1]', () => {
      expect(tileFromQuadkey('1')).toEqual([1, 0, 1])
    })

    it('quadkey "2" maps to tile [0, 1, 1]', () => {
      expect(tileFromQuadkey('2')).toEqual([0, 1, 1])
    })

    it('quadkey "3" maps to tile [1, 1, 1]', () => {
      expect(tileFromQuadkey('3')).toEqual([1, 1, 1])
    })

    it('quadkey "03" maps to tile [1, 1, 2]', () => {
      expect(tileFromQuadkey('03')).toEqual([1, 1, 2])
    })

    it('quadkey "12" maps to tile [2, 1, 2]', () => {
      // zoom 2: bit 1 mask = 2, bit 0 mask = 1
      // digit "1" at position 0: x |= 2 -> x=2
      // digit "2" at position 1: y |= 1 -> y=1
      expect(tileFromQuadkey('12')).toEqual([2, 1, 2])
    })

    it('zoom equals quadkey length', () => {
      const quadkey = '0123'
      const tile = tileFromQuadkey(quadkey)
      expect(tile[2]).toBe(quadkey.length)
    })
  })

  describe('tileToQuadkey', () => {
    it('tile [0, 0, 0] maps to ""', () => {
      expect(tileToQuadkey([0, 0, 0])).toBe('')
    })

    it('tile [0, 0, 1] maps to "0"', () => {
      expect(tileToQuadkey([0, 0, 1])).toBe('0')
    })

    it('tile [1, 0, 1] maps to "1"', () => {
      expect(tileToQuadkey([1, 0, 1])).toBe('1')
    })

    it('tile [0, 1, 1] maps to "2"', () => {
      expect(tileToQuadkey([0, 1, 1])).toBe('2')
    })

    it('tile [1, 1, 1] maps to "3"', () => {
      expect(tileToQuadkey([1, 1, 1])).toBe('3')
    })

    it('tile [1, 1, 2] maps to "03"', () => {
      expect(tileToQuadkey([1, 1, 2])).toBe('03')
    })
  })

  describe('round-trip conversions', () => {
    const testCases: [string, MercatorTile][] = [
      ['', [0, 0, 0]],
      ['0', [0, 0, 1]],
      ['1', [1, 0, 1]],
      ['2', [0, 1, 1]],
      ['3', [1, 1, 1]],
      ['03', [1, 1, 2]],
      ['0123', [3, 5, 4]],
      ['21030', [8, 13, 5]],
    ]

    it.each(testCases)('quadkey "%s" round-trips through tile %s', (quadkey, _tile) => {
      expect(tileToQuadkey(tileFromQuadkey(quadkey))).toBe(quadkey)
    })

    it.each(testCases)('tile %s round-trips through quadkey "%s"', (_quadkey, tile) => {
      expect(tileFromQuadkey(tileToQuadkey(tile))).toEqual([...tile])
    })
  })

  describe('quadkey properties', () => {
    it('parent quadkey is prefix of child quadkey', () => {
      const parentQuadkey = '012'
      const parentTile = tileFromQuadkey(parentQuadkey)
      // children at zoom+1 should have quadkeys starting with parent quadkey
      const childTile: MercatorTile = [parentTile[0] * 2, parentTile[1] * 2, parentTile[2] + 1]
      const childQuadkey = tileToQuadkey(childTile)
      expect(childQuadkey.startsWith(parentQuadkey)).toBe(true)
    })

    it('all 4 children share the parent quadkey prefix', () => {
      const parentQuadkey = '21'
      const parentTile = tileFromQuadkey(parentQuadkey)
      for (let dx = 0; dx <= 1; dx++) {
        for (let dy = 0; dy <= 1; dy++) {
          const child: MercatorTile = [parentTile[0] * 2 + dx, parentTile[1] * 2 + dy, parentTile[2] + 1]
          const childKey = tileToQuadkey(child)
          expect(childKey).toHaveLength(parentQuadkey.length + 1)
          expect(childKey.startsWith(parentQuadkey)).toBe(true)
        }
      }
    })

    it('quadkey digits are always 0, 1, 2, or 3', () => {
      const tiles: MercatorTile[] = [
        [7, 11, 5],
        [15, 15, 4],
        [0, 0, 3],
      ]
      for (const tile of tiles) {
        const qk = tileToQuadkey(tile)
        for (const ch of qk) {
          expect(['0', '1', '2', '3']).toContain(ch)
        }
      }
    })
  })
})
