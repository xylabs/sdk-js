export const fromFixedPoint = (value: bigint, places = 18): bigint => {
  if (!Number.isInteger(places)) throw new Error(`places (${places}) must be an Integer`)
  return value / (10n ** BigInt(places))
}
