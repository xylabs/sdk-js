import type { MercatorTile } from '../types.ts'
import { tilesEqual } from './equal.ts'

/**
 * Checks whether a specific tile exists in the given tile array.
 * @param tiles - The array of tiles to search
 * @param tile - The tile to look for
 * @returns True if the tile is found in the array
 */
export const tilesHasTile = (tiles: MercatorTile[], tile: MercatorTile) => {
  for (const tileToCheck of tiles) {
    if (tilesEqual(tileToCheck, tile)) return true
  }
  return false
}
