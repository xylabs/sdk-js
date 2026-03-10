/**
 * Truncates a string to show the first and last `length` characters separated by an ellipsis.
 * @param value - The string to ellipsize
 * @param length - Number of characters to keep at each end (default 2)
 * @returns The ellipsized string
 */
export const ellipsize = (value: string, length = 2) => {
  const part1 = value.slice(0, length)
  const part2 = value.slice(value.length - length)
  return `${part1}...${part2}`
}
