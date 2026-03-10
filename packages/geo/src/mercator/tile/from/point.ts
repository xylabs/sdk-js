import { d2r } from '../../constants.ts'
import type { MercatorLngLat, MercatorTile } from '../../types.ts'

/**
 * Converts a geographic point to fractional tile coordinates at the given zoom level.
 * @param point - The geographic coordinate
 * @param z - The zoom level
 * @returns A tile with fractional x and y values
 */
const pointToTileFraction = (point: MercatorLngLat, z: number): MercatorTile => {
  const sin = Math.sin(point.lat * d2r)
  const z2 = Math.pow(2, z)
  let x = z2 * (point.lng / 360 + 0.5)
  const y = z2 * (0.5 - (0.25 * Math.log((1 + sin) / (1 - sin))) / Math.PI)

  // Wrap Tile X
  x = x % z2
  if (x < 0) x = x + z2
  return [x, y, z]
}

/**
 * Converts a geographic point to the integer Mercator tile containing it at the given zoom level.
 * @param point - The geographic coordinate
 * @param z - The zoom level
 * @returns The tile as [x, y, zoom]
 */
const tileFromPoint = (point: MercatorLngLat, z: number): MercatorTile => {
  const [tileX, tileY, tileZoom] = pointToTileFraction(point, z)
  const x = Math.max(Math.floor(tileX), 0)
  const y = Math.max(Math.floor(tileY), 0)
  return [x, y, tileZoom]
}

export { tileFromPoint }
