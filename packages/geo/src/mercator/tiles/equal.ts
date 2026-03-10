import type { MercatorTile } from '../types.ts'

/**
 * Checks whether two Mercator tiles are equal by comparing their x, y, and zoom values.
 * @param param0 - The first tile as [x, y, zoom]
 * @param param1 - The second tile as [x, y, zoom]
 * @returns True if both tiles have identical coordinates and zoom
 */
export const tilesEqual = /* @__PURE__ */ ([x1, y1, zoom1]: MercatorTile, [x2, y2, zoom2]: MercatorTile): boolean => {
  return x1 === x2 && y1 === y2 && zoom1 === zoom2
}
