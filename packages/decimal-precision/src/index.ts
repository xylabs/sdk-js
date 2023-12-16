export const toDecimalPrecision = (value: number, digits: number) => {
  let fixed = 0
  const result = Number.parseFloat(value.toPrecision(digits))
  while (Number.parseFloat(result.toFixed(fixed)) !== result && fixed < 20) {
    fixed++
  }
  return result.toFixed(fixed)
}
