import type { Polygon } from 'geojson'

import type { MercatorBoundingBox, MercatorLngLat } from '../../types.ts'
import { boundingBoxToBoundary } from './boundary.ts'

/**
 * Converts a bounding box to a GeoJSON Polygon geometry.
 * @param box - The bounding box to convert
 * @returns A GeoJSON Polygon representing the bounding box
 */
export const boundingBoxToPolygon = (box: MercatorBoundingBox): Polygon => {
  const boundry = boundingBoxToBoundary(box)
  return {
    coordinates: [boundry.map((lnglng: MercatorLngLat) => lnglng.toArray())],
    type: 'Polygon',
  }
}
