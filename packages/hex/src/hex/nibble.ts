/**
 * Converts a bit count to the equivalent number of hex nibbles (4 bits each).
 * @param value - The number of bits (must be a multiple of 4)
 * @returns The number of nibbles
 */
export const bitsToNibbles = (value: number): number => {
  const nibbles = value >> 2
  if (value !== nibbles << 2) throw new Error('Bits for nibbles must multiple of 4')
  return nibbles
}

/**
 * Converts a nibble count to the equivalent number of bits.
 * @param value - The number of nibbles
 * @returns The number of bits
 */
export const nibblesToBits = (value: number): number => {
  return value << 2
}
