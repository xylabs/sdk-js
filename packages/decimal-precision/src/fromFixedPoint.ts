/**
 * Converts a fixed-point bigint back to a whole-number bigint by dividing out the decimal places.
 * @param value - The fixed-point bigint value to convert
 * @param places - Number of decimal places (default 18)
 * @returns The whole-number bigint result
 */
export const fromFixedPoint = (value: bigint, places = 18): bigint => {
  if (!Number.isInteger(places)) throw new Error(`places (${places}) must be an Integer`)
  return value / (10n ** BigInt(places))
}
