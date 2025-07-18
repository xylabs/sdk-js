import type { MercatorTile } from '../types.ts'

export const tilesEqual = /* @__PURE__ */ ([x1, y1, zoom1]: MercatorTile, [x2, y2, zoom2]: MercatorTile): boolean => {
  return x1 === x2 && y1 === y2 && zoom1 === zoom2
}
