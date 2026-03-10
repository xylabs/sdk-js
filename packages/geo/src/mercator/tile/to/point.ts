import type { MercatorLngLat, MercatorTile } from '../../types.ts'
import { tileToBoundingBox } from './boundingbox.ts'

/**
 * Returns the center point of a Mercator tile.
 * @param tile - The tile as [x, y, zoom]
 * @returns The center coordinate as a MercatorLngLat
 */
const tileToPoint = (tile: MercatorTile): MercatorLngLat => {
  const boundingBox = tileToBoundingBox(tile)
  boundingBox.getCenter()
  return boundingBox.getCenter()
}

export { tileToPoint }
