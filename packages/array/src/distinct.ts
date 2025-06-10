export const distinct = <T>(value: T, index: number, array: T[]): boolean => {
  // Special case for NaN
  if (Number.isNaN(value)) {
    // Return true for the first NaN only
    return array.findIndex(item => Number.isNaN(item)) === index
  }

  // Standard distinct logic for other values
  return array.indexOf(value) === index
}
