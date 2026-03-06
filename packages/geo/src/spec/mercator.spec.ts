import {
  beforeEach,
  describe, expect, it, vi,
} from 'vitest'

// --- Mock mapbox-gl so MapBox-dependent modules can be imported ---

vi.mock('mapbox-gl', () => {
  class LngLat {
    lng: number
    lat: number
    constructor(lng: number, lat: number) {
      this.lng = lng
      this.lat = lat
    }

    toArray(): [number, number] {
      return [this.lng, this.lat]
    }
  }

  class LngLatBounds {
    _sw: LngLat
    _ne: LngLat

    constructor(sw?: LngLat, ne?: LngLat) {
      this._sw = sw ?? new LngLat(0, 0)
      this._ne = ne ?? new LngLat(0, 0)
    }

    getSouthWest(): LngLat { return this._sw }
    getNorthEast(): LngLat { return this._ne }
    getNorthWest(): LngLat { return new LngLat(this._sw.lng, this._ne.lat) }
    getSouthEast(): LngLat { return new LngLat(this._ne.lng, this._sw.lat) }
    getCenter(): LngLat {
      return new LngLat(
        (this._sw.lng + this._ne.lng) / 2,
        (this._sw.lat + this._ne.lat) / 2,
      )
    }

    getWest(): number { return this._sw.lng }
    getEast(): number { return this._ne.lng }
    getSouth(): number { return this._sw.lat }
    getNorth(): number { return this._ne.lat }
  }

  return {
    default: {
      LngLat,
      LngLatBounds,
    },
  }
})

import { tileToChildren } from '../mercator/tile/to/children.ts'
import { tileToParent } from '../mercator/tile/to/parent.ts'
import { tileToSiblings } from '../mercator/tile/to/siblings.ts'
import { tilesEqual } from '../mercator/tiles/equal.ts'
import { tilesHasTile } from '../mercator/tiles/hasTile.ts'
import { hasSiblings } from '../mercator/tiles/hasSiblings.ts'
import type { MercatorBoundary, MercatorLngLat, MercatorTile } from '../mercator/types.ts'
import { d2r, r2d } from '../mercator/constants.ts'
import { tileFromPoint } from '../mercator/tile/from/point.ts'

// Helper constructors for test code (mirror the mocked mapbox-gl classes)
class MockLngLat {
  lng: number
  lat: number
  constructor(lng: number, lat: number) { this.lng = lng; this.lat = lat }
  toArray(): [number, number] { return [this.lng, this.lat] }
}

class MockLngLatBounds {
  _sw: MockLngLat
  _ne: MockLngLat
  constructor(sw?: MockLngLat, ne?: MockLngLat) {
    this._sw = sw ?? new MockLngLat(0, 0)
    this._ne = ne ?? new MockLngLat(0, 0)
  }

  getSouthWest() { return this._sw }
  getNorthEast() { return this._ne }
  getNorthWest() { return new MockLngLat(this._sw.lng, this._ne.lat) }
  getSouthEast() { return new MockLngLat(this._ne.lng, this._sw.lat) }
  getCenter() { return new MockLngLat((this._sw.lng + this._ne.lng) / 2, (this._sw.lat + this._ne.lat) / 2) }
  getWest() { return this._sw.lng }
  getEast() { return this._ne.lng }
  getSouth() { return this._sw.lat }
  getNorth() { return this._ne.lat }
}

describe('Mercator tile functions', () => {
  describe('tileToParent', () => {
    it('returns parent of [1, 1, 2]', () => {
      const parent = tileToParent([1, 1, 2])
      expect(parent).toEqual([0, 0, 1])
    })

    it('returns parent of [0, 0, 1]', () => {
      const parent = tileToParent([0, 0, 1])
      expect(parent).toEqual([0, 0, 0])
    })

    it('returns parent of [3, 5, 4]', () => {
      const parent = tileToParent([3, 5, 4])
      expect(parent).toEqual([1, 2, 3])
    })

    it('returns parent at zoom 0 (degenerate case)', () => {
      const parent = tileToParent([0, 0, 0])
      expect(parent).toEqual([0, 0, -1])
    })
  })

  describe('tileToChildren', () => {
    it('returns 4 children', () => {
      const children = tileToChildren([0, 0, 0])
      expect(children).toHaveLength(4)
    })

    it('returns correct children of [0, 0, 0]', () => {
      const children = tileToChildren([0, 0, 0])
      expect(children).toEqual([
        [0, 0, 1],
        [1, 0, 1],
        [1, 1, 1],
        [0, 1, 1],
      ])
    })

    it('returns correct children of [1, 1, 2]', () => {
      const children = tileToChildren([1, 1, 2])
      expect(children).toEqual([
        [2, 2, 3],
        [3, 2, 3],
        [3, 3, 3],
        [2, 3, 3],
      ])
    })

    it('children zoom is one more than parent zoom', () => {
      const tile: MercatorTile = [3, 2, 4]
      const children = tileToChildren(tile)
      for (const child of children) {
        expect(child[2]).toBe(tile[2] + 1)
      }
    })
  })

  describe('tileToSiblings', () => {
    it('returns 4 siblings (children of parent)', () => {
      const siblings = tileToSiblings([1, 1, 2])
      expect(siblings).toHaveLength(4)
    })

    it('siblings of [0, 0, 1] are children of [0, 0, 0]', () => {
      const siblings = tileToSiblings([0, 0, 1])
      const childrenOfParent = tileToChildren(tileToParent([0, 0, 1]))
      expect(siblings).toEqual(childrenOfParent)
    })

    it('tile is always among its own siblings', () => {
      const tile: MercatorTile = [2, 3, 4]
      const siblings = tileToSiblings(tile)
      expect(tilesHasTile(siblings, tile)).toBe(true)
    })
  })

  describe('tilesEqual', () => {
    it('returns true for identical tiles', () => {
      expect(tilesEqual([1, 2, 3], [1, 2, 3])).toBe(true)
    })

    it('returns false for different x', () => {
      expect(tilesEqual([0, 2, 3], [1, 2, 3])).toBe(false)
    })

    it('returns false for different y', () => {
      expect(tilesEqual([1, 0, 3], [1, 2, 3])).toBe(false)
    })

    it('returns false for different zoom', () => {
      expect(tilesEqual([1, 2, 3], [1, 2, 4])).toBe(false)
    })
  })

  describe('tilesHasTile', () => {
    it('returns true when tile is in array', () => {
      const tiles: MercatorTile[] = [[0, 0, 1], [1, 0, 1], [1, 1, 1]]
      expect(tilesHasTile(tiles, [1, 0, 1])).toBe(true)
    })

    it('returns false when tile is not in array', () => {
      const tiles: MercatorTile[] = [[0, 0, 1], [1, 0, 1]]
      expect(tilesHasTile(tiles, [1, 1, 1])).toBe(false)
    })

    it('returns false for empty array', () => {
      expect(tilesHasTile([], [0, 0, 0])).toBe(false)
    })
  })

  describe('hasSiblings', () => {
    it('returns true when all siblings are present', () => {
      const children = tileToChildren([0, 0, 0])
      expect(hasSiblings(children, children[0])).toBe(true)
    })

    it('returns false when a sibling is missing', () => {
      const children = tileToChildren([0, 0, 0])
      const partial = children.slice(0, 3) // only 3 of 4
      expect(hasSiblings(partial, partial[0])).toBe(false)
    })

    it('returns true with extra tiles present', () => {
      const children = tileToChildren([0, 0, 0])
      const extra: MercatorTile[] = [...children, [5, 5, 5]]
      expect(hasSiblings(extra, children[0])).toBe(true)
    })
  })

  describe('parent-child round trip', () => {
    it('parent of each child equals the original tile', () => {
      const tile: MercatorTile = [3, 5, 4]
      const children = tileToChildren(tile)
      for (const child of children) {
        expect(tileToParent(child)).toEqual([...tile])
      }
    })
  })

  describe('constants', () => {
    it('d2r converts 180 degrees to PI', () => {
      expect(180 * d2r).toBeCloseTo(Math.PI)
    })

    it('r2d converts PI to 180 degrees', () => {
      expect(Math.PI * r2d).toBeCloseTo(180)
    })

    it('d2r and r2d are inverses', () => {
      expect(d2r * r2d).toBeCloseTo(1)
    })
  })

  // =====================================================================
  // NEW TESTS: tileFromPoint (pure math, no MapBox)
  // =====================================================================

  describe('tileFromPoint', () => {
    it('returns [0, 0, 0] for origin at zoom 0', () => {
      const point = { lng: 0, lat: 0 } as MercatorLngLat
      const tile = tileFromPoint(point, 0)
      expect(tile).toEqual([0, 0, 0])
    })

    it('returns correct tile for positive lng/lat at zoom 1', () => {
      // At zoom 1 the world is 2x2 tiles
      // lng=0, lat=0 is at center => tile [1, 1, 1]
      const point = { lng: 1, lat: -1 } as MercatorLngLat
      const tile = tileFromPoint(point, 1)
      expect(tile[2]).toBe(1)
      expect(tile[0]).toBe(1) // right half
      expect(tile[1]).toBe(1) // bottom half
    })

    it('returns correct tile for negative longitude at zoom 1', () => {
      const point = { lng: -90, lat: 45 } as MercatorLngLat
      const tile = tileFromPoint(point, 1)
      expect(tile[2]).toBe(1)
      expect(tile[0]).toBe(0) // left half
      expect(tile[1]).toBe(0) // top half
    })

    it('handles the antimeridian (lng = 180)', () => {
      const point = { lng: 180, lat: 0 } as MercatorLngLat
      const tile = tileFromPoint(point, 1)
      expect(tile[2]).toBe(1)
      // lng=180 wraps to x=0
      expect(tile[0]).toBeGreaterThanOrEqual(0)
      expect(tile[0]).toBeLessThan(2)
    })

    it('handles the antimeridian (lng = -180)', () => {
      const point = { lng: -180, lat: 0 } as MercatorLngLat
      const tile = tileFromPoint(point, 1)
      expect(tile[2]).toBe(1)
      expect(tile[0]).toBe(0)
    })

    it('higher zoom levels give more precise tiles', () => {
      const point = { lng: -73.9857, lat: 40.7484 } as MercatorLngLat // NYC
      const tile10 = tileFromPoint(point, 10)
      const tile15 = tileFromPoint(point, 15)
      expect(tile10[2]).toBe(10)
      expect(tile15[2]).toBe(15)
      // tile15 should be a descendant of tile10
      // at zoom 10, the tile15 x/y shifted right by 5 bits should match tile10
      expect(tile15[0] >> 5).toBe(tile10[0])
      expect(tile15[1] >> 5).toBe(tile10[1])
    })

    it('wraps negative x values for extreme negative longitude', () => {
      // lng < -180 causes x to be negative before wrapping
      const point = { lng: -361, lat: 0 } as MercatorLngLat
      const tile = tileFromPoint(point, 2)
      expect(tile[0]).toBeGreaterThanOrEqual(0)
      expect(tile[0]).toBeLessThan(4) // 2^2 = 4
    })

    it('returns non-negative x and y', () => {
      const point = { lng: -179.99, lat: -85 } as MercatorLngLat
      const tile = tileFromPoint(point, 5)
      expect(tile[0]).toBeGreaterThanOrEqual(0)
      expect(tile[1]).toBeGreaterThanOrEqual(0)
    })

    it('tiles at zoom z have x in [0, 2^z)', () => {
      const z = 8
      const points = [
        { lng: -180, lat: 0 },
        { lng: -90, lat: 45 },
        { lng: 0, lat: 0 },
        { lng: 90, lat: -45 },
        { lng: 179.99, lat: 0 },
      ] as MercatorLngLat[]
      const size = Math.pow(2, z)
      for (const p of points) {
        const tile = tileFromPoint(p, z)
        expect(tile[0]).toBeGreaterThanOrEqual(0)
        expect(tile[0]).toBeLessThan(size)
      }
    })

    it('known tile: London at zoom 10', () => {
      // London: lng=-0.1278, lat=51.5074
      // At zoom 10, expected tile is approximately [511, 340, 10]
      const point = { lng: -0.1278, lat: 51.5074 } as MercatorLngLat
      const tile = tileFromPoint(point, 10)
      expect(tile[2]).toBe(10)
      expect(tile[0]).toBe(511)
      expect(tile[1]).toBe(340)
    })

    it('known tile: NYC at zoom 10', () => {
      // NYC: lng=-74.006, lat=40.7128
      const point = { lng: -74.006, lat: 40.7128 } as MercatorLngLat
      const tile = tileFromPoint(point, 10)
      expect(tile[2]).toBe(10)
      expect(tile[0]).toBe(301)
      expect(tile[1]).toBe(385)
    })

    it('equator at zoom 1 maps to correct y', () => {
      const point = { lng: 0, lat: 0 } as MercatorLngLat
      const tile = tileFromPoint(point, 1)
      // lat=0 is at y=1 (equator is midpoint)
      expect(tile[1]).toBe(1)
    })

    it('round-trip: tileFromPoint of a tile center should return the same tile (with mock)', async () => {
      // Import the MapBox-dependent functions now that they are mocked
      const { tileToBoundingBox } = await import('../mercator/tile/to/boundingbox.ts')
      const original: MercatorTile = [5, 10, 8]
      const box = tileToBoundingBox(original)
      const center = box.getCenter()
      const point = { lng: center.lng, lat: center.lat } as MercatorLngLat
      const result = tileFromPoint(point, 8)
      expect(result).toEqual([...original])
    })
  })

  // =====================================================================
  // NEW TESTS: tileToBoundingBox (uses mocked mapbox-gl)
  // =====================================================================

  describe('tileToBoundingBox', () => {
    let tileToBoundingBox: typeof import('../mercator/tile/to/boundingbox.ts').tileToBoundingBox

    beforeEach(async () => {
      const mod = await import('../mercator/tile/to/boundingbox.ts')
      tileToBoundingBox = mod.tileToBoundingBox
    })

    it('tile [0, 0, 0] covers the whole world longitude', () => {
      const box = tileToBoundingBox([0, 0, 0])
      expect(box.getWest()).toBeCloseTo(-180, 5)
      expect(box.getEast()).toBeCloseTo(180, 5)
    })

    it('tile [0, 0, 0] covers full latitude range', () => {
      const box = tileToBoundingBox([0, 0, 0])
      expect(box.getNorth()).toBeCloseTo(85.0511, 1)
      expect(box.getSouth()).toBeCloseTo(-85.0511, 1)
    })

    it('tile [0, 0, 1] covers western half of the world', () => {
      const box = tileToBoundingBox([0, 0, 1])
      expect(box.getWest()).toBeCloseTo(-180, 5)
      expect(box.getEast()).toBeCloseTo(0, 5)
    })

    it('tile [1, 0, 1] covers eastern half of the world', () => {
      const box = tileToBoundingBox([1, 0, 1])
      expect(box.getWest()).toBeCloseTo(0, 5)
      expect(box.getEast()).toBeCloseTo(180, 5)
    })

    it('returns a box where west < east', () => {
      const box = tileToBoundingBox([5, 10, 8])
      expect(box.getWest()).toBeLessThan(box.getEast())
    })

    it('returns a box where south < north', () => {
      const box = tileToBoundingBox([5, 10, 8])
      expect(box.getSouth()).toBeLessThan(box.getNorth())
    })

    it('higher zoom tiles have smaller bounding boxes', () => {
      const box4 = tileToBoundingBox([0, 0, 4])
      const box8 = tileToBoundingBox([0, 0, 8])
      const width4 = box4.getEast() - box4.getWest()
      const width8 = box8.getEast() - box8.getWest()
      expect(width8).toBeLessThan(width4)
    })

    it('adjacent tiles share an edge (x direction)', () => {
      const left = tileToBoundingBox([3, 5, 8])
      const right = tileToBoundingBox([4, 5, 8])
      expect(left.getEast()).toBeCloseTo(right.getWest(), 10)
    })

    it('adjacent tiles share an edge (y direction)', () => {
      const top = tileToBoundingBox([3, 5, 8])
      const bottom = tileToBoundingBox([3, 6, 8])
      expect(top.getSouth()).toBeCloseTo(bottom.getNorth(), 10)
    })
  })

  // =====================================================================
  // NEW TESTS: tileToPoint (uses mocked mapbox-gl)
  // =====================================================================

  describe('tileToPoint', () => {
    let tileToPoint: typeof import('../mercator/tile/to/point.ts').tileToPoint

    beforeEach(async () => {
      const mod = await import('../mercator/tile/to/point.ts')
      tileToPoint = mod.tileToPoint
    })

    it('returns the center of tile [0, 0, 0]', () => {
      const center = tileToPoint([0, 0, 0])
      expect(center.lng).toBeCloseTo(0, 1)
      expect(center.lat).toBeCloseTo(0, 1)
    })

    it('returns point inside valid lng range', () => {
      const center = tileToPoint([5, 10, 8])
      expect(center.lng).toBeGreaterThanOrEqual(-180)
      expect(center.lng).toBeLessThanOrEqual(180)
    })

    it('returns point inside valid lat range', () => {
      const center = tileToPoint([5, 10, 8])
      expect(center.lat).toBeGreaterThanOrEqual(-90)
      expect(center.lat).toBeLessThanOrEqual(90)
    })

    it('center of [0, 0, 1] is in the northwest quadrant', () => {
      const center = tileToPoint([0, 0, 1])
      expect(center.lng).toBeLessThan(0)
      expect(center.lat).toBeGreaterThan(0)
    })

    it('center of [1, 1, 1] is in the southeast quadrant', () => {
      const center = tileToPoint([1, 1, 1])
      expect(center.lng).toBeGreaterThan(0)
      expect(center.lat).toBeLessThan(0)
    })
  })

  // =====================================================================
  // NEW TESTS: tileToGeoJson (uses mocked mapbox-gl)
  // =====================================================================

  describe('tileToGeoJson', () => {
    let tileToGeoJson: typeof import('../mercator/tile/to/geoJson.ts').tileToGeoJson

    beforeEach(async () => {
      const mod = await import('../mercator/tile/to/geoJson.ts')
      tileToGeoJson = mod.tileToGeoJson
    })

    it('returns a Polygon type', () => {
      const geojson = tileToGeoJson([0, 0, 0])
      expect(geojson.type).toBe('Polygon')
    })

    it('has exactly one ring with 5 positions (closed polygon)', () => {
      const geojson = tileToGeoJson([0, 0, 0])
      expect(geojson.coordinates).toHaveLength(1)
      expect(geojson.coordinates[0]).toHaveLength(5)
    })

    it('first and last position are the same (closed ring)', () => {
      const geojson = tileToGeoJson([5, 10, 8])
      const ring = geojson.coordinates[0]
      expect(ring[0]).toEqual(ring[ring.length - 1])
    })

    it('positions are [lng, lat] arrays', () => {
      const geojson = tileToGeoJson([1, 1, 2])
      for (const pos of geojson.coordinates[0]) {
        expect(pos).toHaveLength(2)
        expect(typeof pos[0]).toBe('number')
        expect(typeof pos[1]).toBe('number')
      }
    })

    it('polygon coordinates are within valid lng/lat range', () => {
      const geojson = tileToGeoJson([3, 3, 4])
      for (const pos of geojson.coordinates[0]) {
        expect(pos[0]).toBeGreaterThanOrEqual(-180)
        expect(pos[0]).toBeLessThanOrEqual(180)
        expect(pos[1]).toBeGreaterThanOrEqual(-90)
        expect(pos[1]).toBeLessThanOrEqual(90)
      }
    })

    it('ring contains NW, NE, SE, SW corners in order', () => {
      const geojson = tileToGeoJson([2, 2, 4])
      const ring = geojson.coordinates[0]
      // NW, NE, SE, SW, NW
      const nw = ring[0]
      const ne = ring[1]
      const se = ring[2]
      const sw = ring[3]
      // NW and SW share the same lng (west)
      expect(nw[0]).toBeCloseTo(sw[0], 10)
      // NE and SE share the same lng (east)
      expect(ne[0]).toBeCloseTo(se[0], 10)
      // NW and NE share the same lat (north)
      expect(nw[1]).toBeCloseTo(ne[1], 10)
      // SW and SE share the same lat (south)
      expect(sw[1]).toBeCloseTo(se[1], 10)
    })
  })

  // =====================================================================
  // NEW TESTS: boundingBoxToCenter
  // =====================================================================

  describe('boundingBoxToCenter', () => {
    let boundingBoxToCenter: typeof import('../mercator/boundingbox/to/center.ts').boundingBoxToCenter

    beforeEach(async () => {
      const mod = await import('../mercator/boundingbox/to/center.ts')
      boundingBoxToCenter = mod.boundingBoxToCenter
    })

    it('returns center of a symmetric bounding box', () => {
      const box = new MockLngLatBounds(
        new MockLngLat(-10, -10),
        new MockLngLat(10, 10),
      )
      const center = boundingBoxToCenter(box as any)
      expect(center[0]).toBeCloseTo(0, 6)
      expect(center[1]).toBeCloseTo(0, 6)
    })

    it('returns center of an asymmetric bounding box', () => {
      const box = new MockLngLatBounds(
        new MockLngLat(-100, 20),
        new MockLngLat(-80, 40),
      )
      const center = boundingBoxToCenter(box as any)
      expect(center[0]).toBeCloseTo(-90, 6)
      expect(center[1]).toBeCloseTo(30, 6)
    })

    it('respects decimal precision parameter', () => {
      const box = new MockLngLatBounds(
        new MockLngLat(-10.123456789, -20.987654321),
        new MockLngLat(10.123456789, 20.987654321),
      )
      const center2 = boundingBoxToCenter(box as any, 2)
      // With decimal=2, values should have at most 2 decimal places
      expect(center2[0]).toBe(Number(center2[0].toFixed(2)))
      expect(center2[1]).toBe(Number(center2[1].toFixed(2)))
    })

    it('default precision is 6 decimal places', () => {
      const box = new MockLngLatBounds(
        new MockLngLat(-10.123456789, -20.987654321),
        new MockLngLat(10.123456789, 20.987654321),
      )
      const center = boundingBoxToCenter(box as any)
      expect(center[0]).toBe(Number(center[0].toFixed(6)))
      expect(center[1]).toBe(Number(center[1].toFixed(6)))
    })

    it('returns [lng, lat] tuple', () => {
      const box = new MockLngLatBounds(
        new MockLngLat(0, 0),
        new MockLngLat(10, 10),
      )
      const center = boundingBoxToCenter(box as any)
      expect(center).toHaveLength(2)
      expect(typeof center[0]).toBe('number')
      expect(typeof center[1]).toBe('number')
    })
  })

  // =====================================================================
  // NEW TESTS: boundingBoxToBoundary
  // =====================================================================

  describe('boundingBoxToBoundary', () => {
    let boundingBoxToBoundary: typeof import('../mercator/boundingbox/to/boundary.ts').boundingBoxToBoundary

    beforeEach(async () => {
      const mod = await import('../mercator/boundingbox/to/boundary.ts')
      boundingBoxToBoundary = mod.boundingBoxToBoundary
    })

    it('returns 5 points (closed boundary)', () => {
      const box = new MockLngLatBounds(
        new MockLngLat(-10, -10),
        new MockLngLat(10, 10),
      )
      const boundary = boundingBoxToBoundary(box as any)
      expect(boundary).toHaveLength(5)
    })

    it('first and last point are the same (NW)', () => {
      const box = new MockLngLatBounds(
        new MockLngLat(-10, -10),
        new MockLngLat(10, 10),
      )
      const boundary = boundingBoxToBoundary(box as any)
      expect(boundary[0].lng).toBe(boundary[4].lng)
      expect(boundary[0].lat).toBe(boundary[4].lat)
    })

    it('returns NW, NE, SE, SW, NW corners in order', () => {
      const box = new MockLngLatBounds(
        new MockLngLat(-20, -30),
        new MockLngLat(40, 50),
      )
      const boundary: MercatorBoundary = boundingBoxToBoundary(box as any) as MercatorBoundary
      // NW
      expect(boundary[0].lng).toBe(-20)
      expect(boundary[0].lat).toBe(50)
      // NE
      expect(boundary[1].lng).toBe(40)
      expect(boundary[1].lat).toBe(50)
      // SE
      expect(boundary[2].lng).toBe(40)
      expect(boundary[2].lat).toBe(-30)
      // SW
      expect(boundary[3].lng).toBe(-20)
      expect(boundary[3].lat).toBe(-30)
    })
  })

  // =====================================================================
  // NEW TESTS: boundingBoxToPolygon
  // =====================================================================

  describe('boundingBoxToPolygon', () => {
    let boundingBoxToPolygon: typeof import('../mercator/boundingbox/to/polygon.ts').boundingBoxToPolygon

    beforeEach(async () => {
      const mod = await import('../mercator/boundingbox/to/polygon.ts')
      boundingBoxToPolygon = mod.boundingBoxToPolygon
    })

    it('returns a Polygon type', () => {
      const box = new MockLngLatBounds(
        new MockLngLat(-10, -10),
        new MockLngLat(10, 10),
      )
      const polygon = boundingBoxToPolygon(box as any)
      expect(polygon.type).toBe('Polygon')
    })

    it('has one ring with 5 positions', () => {
      const box = new MockLngLatBounds(
        new MockLngLat(-10, -10),
        new MockLngLat(10, 10),
      )
      const polygon = boundingBoxToPolygon(box as any)
      expect(polygon.coordinates).toHaveLength(1)
      expect(polygon.coordinates[0]).toHaveLength(5)
    })

    it('first and last position are the same (closed ring)', () => {
      const box = new MockLngLatBounds(
        new MockLngLat(-50, -40),
        new MockLngLat(50, 40),
      )
      const polygon = boundingBoxToPolygon(box as any)
      const ring = polygon.coordinates[0]
      expect(ring[0]).toEqual(ring[ring.length - 1])
    })

    it('positions are [lng, lat] arrays', () => {
      const box = new MockLngLatBounds(
        new MockLngLat(-10, -10),
        new MockLngLat(10, 10),
      )
      const polygon = boundingBoxToPolygon(box as any)
      for (const pos of polygon.coordinates[0]) {
        expect(pos).toHaveLength(2)
        expect(typeof pos[0]).toBe('number')
        expect(typeof pos[1]).toBe('number')
      }
    })

    it('polygon contains the correct corner coordinates', () => {
      const box = new MockLngLatBounds(
        new MockLngLat(-20, -30),
        new MockLngLat(40, 50),
      )
      const polygon = boundingBoxToPolygon(box as any)
      const ring = polygon.coordinates[0]
      // NW: [-20, 50]
      expect(ring[0]).toEqual([-20, 50])
      // NE: [40, 50]
      expect(ring[1]).toEqual([40, 50])
      // SE: [40, -30]
      expect(ring[2]).toEqual([40, -30])
      // SW: [-20, -30]
      expect(ring[3]).toEqual([-20, -30])
    })
  })

  // =====================================================================
  // NEW TESTS: tilesFromBoundingBox
  // =====================================================================

  describe('tilesFromBoundingBox', () => {
    let tilesFromBoundingBox: typeof import('../mercator/tiles/from/boundingbox.ts').tilesFromBoundingBox

    beforeEach(async () => {
      const mod = await import('../mercator/tiles/from/boundingbox.ts')
      tilesFromBoundingBox = mod.tilesFromBoundingBox
    })

    it('returns tiles covering a small area', () => {
      // Small box around NYC
      const box = new MockLngLatBounds(
        new MockLngLat(-74.1, 40.6),
        new MockLngLat(-73.9, 40.8),
      )
      const tiles = tilesFromBoundingBox(box as any, 10)
      expect(tiles.length).toBeGreaterThan(0)
      for (const tile of tiles) {
        expect(tile[2]).toBe(10)
      }
    })

    it('all returned tiles have the requested zoom level', () => {
      const box = new MockLngLatBounds(
        new MockLngLat(-10, -10),
        new MockLngLat(10, 10),
      )
      const zoom = 5
      const tiles = tilesFromBoundingBox(box as any, zoom)
      for (const tile of tiles) {
        expect(tile[2]).toBe(zoom)
      }
    })

    it('returns all tiles at low zoom (< 4)', () => {
      const box = new MockLngLatBounds(
        new MockLngLat(-10, -10),
        new MockLngLat(10, 10),
      )
      const tiles = tilesFromBoundingBox(box as any, 2)
      // At zoom 2, size is 4. For zoom < 4, uses 0..size-1 for both x and y
      expect(tiles).toHaveLength(4 * 4)
    })

    it('zoom 0 returns 1 tile', () => {
      const box = new MockLngLatBounds(
        new MockLngLat(-10, -10),
        new MockLngLat(10, 10),
      )
      const tiles = tilesFromBoundingBox(box as any, 0)
      // zoom < 4: size=1, minX=0, maxX=0, minY=0, maxY=0
      expect(tiles).toHaveLength(1)
      expect(tiles[0]).toEqual([0, 0, 0])
    })

    it('zoom 1 returns 4 tiles', () => {
      const box = new MockLngLatBounds(
        new MockLngLat(-10, -10),
        new MockLngLat(10, 10),
      )
      const tiles = tilesFromBoundingBox(box as any, 1)
      expect(tiles).toHaveLength(4)
    })

    it('zoom 3 returns 64 tiles (8x8)', () => {
      const box = new MockLngLatBounds(
        new MockLngLat(-10, -10),
        new MockLngLat(10, 10),
      )
      const tiles = tilesFromBoundingBox(box as any, 3)
      expect(tiles).toHaveLength(64)
    })

    it('larger area produces more tiles than smaller area at same zoom', () => {
      const smallBox = new MockLngLatBounds(
        new MockLngLat(-1, -1),
        new MockLngLat(1, 1),
      )
      const largeBox = new MockLngLatBounds(
        new MockLngLat(-50, -50),
        new MockLngLat(50, 50),
      )
      const zoom = 6
      const smallTiles = tilesFromBoundingBox(smallBox as any, zoom)
      const largeTiles = tilesFromBoundingBox(largeBox as any, zoom)
      expect(largeTiles.length).toBeGreaterThan(smallTiles.length)
    })

    it('tile x values are within valid range [0, 2^zoom)', () => {
      const box = new MockLngLatBounds(
        new MockLngLat(-170, -60),
        new MockLngLat(170, 60),
      )
      const zoom = 5
      const tiles = tilesFromBoundingBox(box as any, zoom)
      const size = Math.pow(2, zoom)
      for (const tile of tiles) {
        expect(tile[0]).toBeGreaterThanOrEqual(0)
        expect(tile[0]).toBeLessThan(size)
      }
    })

    it('no duplicate tiles in result', () => {
      const box = new MockLngLatBounds(
        new MockLngLat(-50, -30),
        new MockLngLat(50, 30),
      )
      const tiles = tilesFromBoundingBox(box as any, 5)
      const keys = tiles.map(t => `${t[0]},${t[1]},${t[2]}`)
      const uniqueKeys = new Set(keys)
      expect(uniqueKeys.size).toBe(keys.length)
    })
  })
})
