import type { MercatorTile } from '../../types.ts'

/**
 * Converts a Mercator tile to its quadkey string representation.
 * @param param0 - The tile as [tileX, tileY, tileZoom]
 * @returns The quadkey string encoding the tile's position and zoom
 */
const tileToQuadkey = ([tileX, tileY, tileZoom]: MercatorTile): string => {
  let index = ''
  for (let z = tileZoom; z > 0; z--) {
    let b = 0
    const mask = 1 << (z - 1)
    if ((tileX & mask) !== 0) b++
    if ((tileY & mask) !== 0) b += 2
    index += b.toString()
  }
  return index
}

export { tileToQuadkey }
