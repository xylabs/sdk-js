/**
 * Converts an ArrayBuffer to a hex string without padding or normalization.
 * @param buffer - The ArrayBuffer to convert
 * @returns A lowercase hex string representation of the buffer
 */
export const toHexLegacy = (buffer: ArrayBuffer) => {
  return [...new Uint8Array(buffer)].map(x => x.toString(16).padStart(2, '0')).join('')
}
