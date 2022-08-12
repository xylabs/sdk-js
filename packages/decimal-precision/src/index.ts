export const toDecimalPrecision = (value: number, digits: number) => {
  let fixed = 0
  const result = parseFloat(value.toPrecision(digits))
  while (parseFloat(result.toFixed(fixed)) !== result && fixed < 20) {
    fixed++
  }
  return result.toFixed(fixed)
}

// eslint-disable-next-line import/no-default-export
export default toDecimalPrecision
