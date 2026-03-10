import type { MercatorBoundingBox } from '../../types.ts'

/**
 * Computes the center point of a bounding box as [lng, lat], rounded to the specified decimal places.
 * @param boundingBox - The bounding box to find the center of
 * @param decimal - Number of decimal places for rounding (default 6)
 * @returns A [longitude, latitude] tuple representing the center
 */
export const boundingBoxToCenter = (boundingBox: MercatorBoundingBox, decimal = 6) => {
  const west = boundingBox.getWest()
  const south = boundingBox.getSouth()
  const east = boundingBox.getEast()
  const north = boundingBox.getNorth()
  let lng = (west - east) / 2 + east
  let lat = (south - north) / 2 + north
  if (decimal !== undefined && decimal !== null) {
    lng = Number(lng.toFixed(decimal))
    lat = Number(lat.toFixed(decimal))
  }
  return [lng, lat]
}
