export const toHexLegacy = (buffer: ArrayBuffer) => {
  return [...new Uint8Array(buffer)].map(x => x.toString(16).padStart(2, '0')).join('')
}
