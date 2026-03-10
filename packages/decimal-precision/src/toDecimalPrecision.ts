/**
 * Formats a number to the specified number of significant digits, returning a string with minimal trailing zeros.
 * @param value - The number to format
 * @param digits - The number of significant digits
 * @returns A string representation of the number with the specified precision
 */
export const toDecimalPrecision = (value: number, digits: number) => {
  let fixed = 0
  const result = Number.parseFloat(value.toPrecision(digits))
  while (Number.parseFloat(result.toFixed(fixed)) !== result && fixed < 20) {
    fixed++
  }
  return result.toFixed(fixed)
}
