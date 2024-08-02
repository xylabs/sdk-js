export const ellipsize = (value: string, length = 2) => {
  const part1 = value.slice(0, length)
  const part2 = value.slice(value.length - length)
  return `${part1}...${part2}`
}
