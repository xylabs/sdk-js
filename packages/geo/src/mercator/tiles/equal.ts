import type { MercatorTile } from '../types.ts'

export const tilesEqual = (tile1: MercatorTile, tile2: MercatorTile) => {
  return tile1[0] === tile2[0] && tile1[1] === tile2[1] && tile1[2] === tile2[2]
}
