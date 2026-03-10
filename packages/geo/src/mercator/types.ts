import MapBox from 'mapbox-gl'

/** A Mercator tile represented as [x, y, zoom]. */
type MercatorTile = readonly [x: number, y: number, zoom: number]
/** An ordered array of MercatorLngLat points forming a boundary. */
type MercatorBoundary = MercatorLngLat[]
/** A Mercator bounding box extending MapBox LngLatBounds. */
class MercatorBoundingBox extends MapBox.LngLatBounds {}
/** A Mercator coordinate extending MapBox LngLat. */
class MercatorLngLat extends MapBox.LngLat {}

export { MercatorBoundingBox, MercatorLngLat }
export type { MercatorBoundary, MercatorTile }
