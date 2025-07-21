import { d2r } from '../../constants.ts'
import type { MercatorLngLat, MercatorTile } from '../../types.ts'

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

const tileFromPoint = (point: MercatorLngLat, z: number): MercatorTile => {
  const [tileX, tileY, tileZoom] = pointToTileFraction(point, z)
  const x = Math.max(Math.floor(tileX), 0)
  const y = Math.max(Math.floor(tileY), 0)
  return [x, y, tileZoom]
}

export { tileFromPoint }
