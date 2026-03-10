import type { MercatorTile } from '../../types.ts'
import { tileToChildren } from './children.ts'
import { tileToParent } from './parent.ts'

/**
 * Returns the four sibling tiles (children of the parent tile) for the given tile.
 * @param tile - The tile as [x, y, zoom]
 * @returns An array of four sibling tiles at the same zoom level
 */
const tileToSiblings = (tile: MercatorTile): MercatorTile[] => {
  return tileToChildren(tileToParent(tile))
}

export { tileToSiblings }
