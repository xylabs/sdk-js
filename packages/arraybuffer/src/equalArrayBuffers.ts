export const equalArrayBuffers = (a1: ArrayBufferLike, a2: ArrayBufferLike) => {
  const u1 = new Uint8Array(a1)
  const u2 = new Uint8Array(a2)
  if (u1.byteLength !== u2.byteLength) return false
  for (let i = 0; i < u1.byteLength; i++) {
    if (u1[i] !== u2[i]) return false
  }
  return true
}
