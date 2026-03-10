import type { MercatorBoundary, MercatorBoundingBox } from '../../types.ts'

/**
 * Converts a bounding box to an ordered boundary polygon (closed ring of corner points).
 * @param box - The bounding box to convert
 * @returns An array of corner points forming a closed boundary
 */
export const boundingBoxToBoundary = (box: MercatorBoundingBox): MercatorBoundary => {
  return [box.getNorthWest(), box.getNorthEast(), box.getSouthEast(), box.getSouthWest(), box.getNorthWest()]
}
