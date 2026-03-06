import {
  describe, expect, it, vi,
} from 'vitest'

vi.mock('mapbox-gl', () => {
  class MockLngLat {
    lng: number
    lat: number
    constructor(lng: number, lat: number) {
      this.lng = lng
      this.lat = lat
    }

    toArray() {
      return [this.lng, this.lat]
    }
  }

  class MockLngLatBounds {
    _sw: MockLngLat
    _ne: MockLngLat
    constructor(sw?: MockLngLat | [number, number], ne?: MockLngLat | [number, number]) {
      if (sw instanceof MockLngLat) {
        this._sw = sw
      } else {
        this._sw = new MockLngLat(sw?.[0] ?? 0, sw?.[1] ?? 0)
      }
      if (ne instanceof MockLngLat) {
        this._ne = ne
      } else {
        this._ne = new MockLngLat(ne?.[0] ?? 0, ne?.[1] ?? 0)
      }
    }

    getWest() { return this._sw.lng }
    getSouth() { return this._sw.lat }
    getEast() { return this._ne.lng }
    getNorth() { return this._ne.lat }
    getSouthWest() { return this._sw }
    getNorthEast() { return this._ne }
    getNorthWest() { return new MockLngLat(this._sw.lng, this._ne.lat) }
    getSouthEast() { return new MockLngLat(this._ne.lng, this._sw.lat) }
  }

  return {
    default: {
      LngLat: MockLngLat,
      LngLatBounds: MockLngLatBounds,
    },
  }
})

import { GeoJson } from '../GeoJson.ts'

describe('GeoJson', () => {
  const quadkey = '0123'

  describe('constructor', () => {
    it('creates an instance with a quadkey', () => {
      const geo = new GeoJson(quadkey)
      expect(geo).toBeDefined()
    })
  })

  describe('static methods', () => {
    it('featureCollection wraps features in a FeatureCollection', () => {
      const feature = GeoJson.geometryFeature({
        type: 'Point',
        coordinates: [0, 0],
      })
      const collection = GeoJson.featureCollection([feature])
      expect(collection.type).toBe('FeatureCollection')
      expect(collection.features).toHaveLength(1)
      expect(collection.features[0]).toBe(feature)
    })

    it('featuresSource wraps a FeatureCollection in a GeoJSON source spec', () => {
      const collection = GeoJson.featureCollection([])
      const source = GeoJson.featuresSource(collection)
      expect(source.type).toBe('geojson')
      expect(source.data).toBe(collection)
    })

    it('geometryFeature wraps geometry in a Feature', () => {
      const geometry = { type: 'Point' as const, coordinates: [10, 20] }
      const feature = GeoJson.geometryFeature(geometry)
      expect(feature.type).toBe('Feature')
      expect(feature.geometry).toBe(geometry)
      expect(feature.properties).toEqual({})
    })
  })

  describe('instance methods', () => {
    it('center returns a LngLat', () => {
      const geo = new GeoJson(quadkey)
      const center = geo.center()
      expect(center).toBeDefined()
      expect(typeof center.lng).toBe('number')
      expect(typeof center.lat).toBe('number')
    })

    it('center caches the result', () => {
      const geo = new GeoJson(quadkey)
      const first = geo.center()
      const second = geo.center()
      expect(first).toBe(second)
    })

    it('point returns a GeoJSON Point', () => {
      const geo = new GeoJson(quadkey)
      const point = geo.point()
      expect(point.type).toBe('Point')
      expect(Array.isArray(point.coordinates)).toBe(true)
      expect(point.coordinates).toHaveLength(2)
    })

    it('point caches the result', () => {
      const geo = new GeoJson(quadkey)
      const first = geo.point()
      const second = geo.point()
      expect(first).toBe(second)
    })

    it('pointFeature returns a Feature containing the point', () => {
      const geo = new GeoJson(quadkey)
      const feature = geo.pointFeature()
      expect(feature.type).toBe('Feature')
      expect(feature.geometry.type).toBe('Point')
    })

    it('pointFeatureCollection returns a FeatureCollection with one point feature', () => {
      const geo = new GeoJson(quadkey)
      const collection = geo.pointFeatureCollection()
      expect(collection.type).toBe('FeatureCollection')
      expect(collection.features).toHaveLength(1)
      expect(collection.features[0].geometry.type).toBe('Point')
    })

    it('pointSource returns a GeoJSON source spec with point data', () => {
      const geo = new GeoJson(quadkey)
      const source = geo.pointSource()
      expect(source.type).toBe('geojson')
      expect(source.data).toBeDefined()
    })

    it('polygon returns a GeoJSON Polygon', () => {
      const geo = new GeoJson(quadkey)
      const polygon = geo.polygon()
      expect(polygon.type).toBe('Polygon')
      expect(Array.isArray(polygon.coordinates)).toBe(true)
    })

    it('polygon caches the result', () => {
      const geo = new GeoJson(quadkey)
      const first = geo.polygon()
      const second = geo.polygon()
      expect(first).toBe(second)
    })

    it('polygonFeature returns a Feature containing the polygon', () => {
      const geo = new GeoJson(quadkey)
      const feature = geo.polygonFeature()
      expect(feature.type).toBe('Feature')
      expect(feature.geometry.type).toBe('Polygon')
    })

    it('polygonFeatureCollection returns a FeatureCollection with one polygon feature', () => {
      const geo = new GeoJson(quadkey)
      const collection = geo.polygonFeatureCollection()
      expect(collection.type).toBe('FeatureCollection')
      expect(collection.features).toHaveLength(1)
      expect(collection.features[0].geometry.type).toBe('Polygon')
    })

    it('polygonSource returns a GeoJSON source spec with polygon data', () => {
      const geo = new GeoJson(quadkey)
      const source = geo.polygonSource()
      expect(source.type).toBe('geojson')
      expect(source.data).toBeDefined()
    })

    it('zoom returns a number derived from the quadkey', () => {
      const geo = new GeoJson(quadkey)
      const zoom = geo.zoom()
      expect(typeof zoom).toBe('number')
      expect(zoom).toBe(quadkey.length)
    })

    it('zoom caches the result', () => {
      const geo = new GeoJson(quadkey)
      const first = geo.zoom()
      const second = geo.zoom()
      expect(first).toBe(second)
    })
  })

  describe('different quadkeys', () => {
    it('works with a single-character quadkey', () => {
      const geo = new GeoJson('0')
      expect(geo.zoom()).toBe(1)
      expect(geo.center()).toBeDefined()
      expect(geo.polygon()).toBeDefined()
    })

    it('works with a longer quadkey', () => {
      const geo = new GeoJson('01230123')
      expect(geo.zoom()).toBe(8)
      expect(geo.center()).toBeDefined()
    })
  })
})
