import MapBox from 'mapbox-gl'

type MercatorTile = readonly [x: number, y: number, zoom: number]
type MercatorBoundary = MercatorLngLat[]
class MercatorBoundingBox extends MapBox.LngLatBounds {}
class MercatorLngLat extends MapBox.LngLat {}

export { MercatorBoundingBox, MercatorLngLat }
export type { MercatorBoundary, MercatorTile }
