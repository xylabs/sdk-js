import type { Polygon, Position } from 'geojson'

import type { MercatorTile } from '../../types.ts'
import { tileToBoundingBox } from './boundingbox.ts'

/**
 * Converts a Mercator tile to a GeoJSON Polygon geometry.
 * @param tile - The tile as [x, y, zoom]
 * @returns A GeoJSON Polygon representing the tile's geographic extent
 */
const tileToGeoJson = (tile: MercatorTile): Polygon => {
  const box = tileToBoundingBox(tile)
  const poly: Polygon = {
    coordinates: [
      [
        box.getNorthWest().toArray() as Position,
        box.getNorthEast().toArray() as Position,
        box.getSouthEast().toArray() as Position,
        box.getSouthWest().toArray() as Position,
        box.getNorthWest().toArray() as Position,
      ],
    ],
    type: 'Polygon',
  }
  return poly
}

export { tileToGeoJson }
