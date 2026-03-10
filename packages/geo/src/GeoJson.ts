import type {
  Feature, FeatureCollection, Geometry, Point, Polygon,
} from 'geojson'
import MapBox from 'mapbox-gl'

import {
  boundingBoxToCenter, boundingBoxToPolygon, tileFromQuadkey, tileToBoundingBox,
} from './mercator/index.ts'

/** Provides GeoJSON geometry and MapBox source generation from a quadkey. */
class GeoJson {
  private _lngLat?: MapBox.LngLat
  private _point?: Point
  private _polygon?: Polygon
  private _zoom?: number

  private quadkey: string

  constructor(quadkey: string) {
    this.quadkey = quadkey
  }

  /**
   * Creates a GeoJSON FeatureCollection from an array of features.
   * @param features - The features to include
   * @returns A GeoJSON FeatureCollection
   */
  static featureCollection(features: Feature[]): FeatureCollection {
    return {
      features,
      type: 'FeatureCollection',
    }
  }

  /**
   * Creates a MapBox GeoJSON source specification from a FeatureCollection.
   * @param data - The FeatureCollection to use as the source data
   * @returns A MapBox GeoJSON source specification
   */
  static featuresSource(data: FeatureCollection): MapBox.GeoJSONSourceSpecification {
    return {
      data,
      type: 'geojson',
    }
  }

  /**
   * Wraps a geometry object in a GeoJSON Feature.
   * @param geometry - The geometry to wrap
   * @returns A GeoJSON Feature containing the geometry
   */
  static geometryFeature(geometry: Geometry): Feature {
    return {
      geometry,
      properties: {},
      type: 'Feature',
    }
  }

  /** Computes and caches the center point of the quadkey's bounding box as a MapBox LngLat. */
  center(): MapBox.LngLat {
    if (!this._lngLat) {
      const tile = tileFromQuadkey(this.quadkey)
      const bb = tileToBoundingBox(tile)
      const point = boundingBoxToCenter(bb)
      this._lngLat = new MapBox.LngLat(point[0], point[1])
    }
    return this._lngLat
  }

  /** Returns a GeoJSON Point geometry at the center of the quadkey's bounding box. */
  point(): Point {
    if (!this._point) {
      this._point = {
        coordinates: this.center().toArray(),
        type: 'Point',
      }
    }
    return this._point
  }

  /** Returns a GeoJSON Feature containing the center point geometry. */
  pointFeature(): Feature {
    return GeoJson.geometryFeature(this.point())
  }

  /** Returns a GeoJSON FeatureCollection containing the center point feature. */
  pointFeatureCollection(): FeatureCollection {
    return GeoJson.featureCollection([this.pointFeature()])
  }

  /** Returns a MapBox GeoJSON source specification for the center point. */
  pointSource(): MapBox.GeoJSONSourceSpecification {
    return {
      data: this.pointFeatureCollection(),
      type: 'geojson',
    }
  }

  /** Returns a GeoJSON Polygon geometry representing the quadkey's bounding box. */
  polygon(): Polygon {
    if (!this._polygon) {
      this._polygon = boundingBoxToPolygon(tileToBoundingBox(tileFromQuadkey(this.quadkey))) as Polygon
    }
    return this._polygon
  }

  /** Returns a GeoJSON Feature containing the polygon geometry. */
  polygonFeature(): Feature {
    return GeoJson.geometryFeature(this.polygon())
  }

  /** Returns a GeoJSON FeatureCollection containing the polygon feature. */
  polygonFeatureCollection(): FeatureCollection {
    return GeoJson.featureCollection([this.polygonFeature()])
  }

  /** Returns a MapBox GeoJSON source specification for the polygon. */
  polygonSource(): MapBox.GeoJSONSourceSpecification {
    return GeoJson.featuresSource(this.polygonFeatureCollection())
  }

  /** Returns the zoom level derived from the quadkey length. */
  zoom(): number {
    this._zoom = this._zoom ?? tileFromQuadkey(this.quadkey)[2]
    return this._zoom
  }
}

export { GeoJson }
