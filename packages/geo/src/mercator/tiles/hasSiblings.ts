import { tileToSiblings } from '../tile/index.ts'
import type { MercatorTile } from '../types.ts'
import { tilesHasTile } from './hasTile.ts'

/**
 * Checks whether all four siblings of the given tile exist in the tile array.
 * @param tiles - The array of tiles to search
 * @param tile - The tile whose siblings to check for
 * @returns True if all siblings are present in the array
 */
export const hasSiblings = (tiles: MercatorTile[], tile: MercatorTile) => {
  const siblings = tileToSiblings(tile)
  for (const sibling of siblings) {
    if (!tilesHasTile(tiles, sibling)) return false
  }
  return true
}
