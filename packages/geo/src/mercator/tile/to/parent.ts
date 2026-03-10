import type { MercatorTile } from '../../types.ts'

/**
 * Returns the parent tile at one zoom level lower.
 * @param tile - The tile as [x, y, zoom]
 * @returns The parent tile at zoom - 1
 */
const tileToParent = (tile: MercatorTile): MercatorTile => {
  return [tile[0] >> 1, tile[1] >> 1, tile[2] - 1]
}

export { tileToParent }
