import type { MercatorTile } from '../../types.ts'

/**
 * Returns the four child tiles at one zoom level higher.
 * @param tile - The parent tile as [x, y, zoom]
 * @returns An array of four child tiles at zoom + 1
 */
const tileToChildren = (tile: MercatorTile): MercatorTile[] => {
  return [
    [tile[0] * 2, tile[1] * 2, tile[2] + 1],
    [tile[0] * 2 + 1, tile[1] * 2, tile[2] + 1],
    [tile[0] * 2 + 1, tile[1] * 2 + 1, tile[2] + 1],
    [tile[0] * 2, tile[1] * 2 + 1, tile[2] + 1],
  ]
}

export { tileToChildren }
