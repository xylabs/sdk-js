import type { MercatorTile } from '../../types.ts'

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
