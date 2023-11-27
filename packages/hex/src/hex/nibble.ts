//determine the number of nibbles for a given number of bits
export const bitsToNibbles = (value: number): number => {
  const nibbles = value >> 2
  if (value !== nibbles << 2) throw Error('Bits for nibbles must multiple of 4')
  return nibbles
}

//determine the number of nibbles for a given number of bits
export const nibblesToBits = (value: number): number => {
  return value << 2
}
