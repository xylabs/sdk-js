export const toDecimalPrecision = (value: number, digits: number) => {
  let fixed = 0
  const result = Number.parseFloat(value.toPrecision(digits))
  while (Number.parseFloat(result.toFixed(fixed)) !== result && fixed < 20) {
    fixed++
  }
  return result.toFixed(fixed)
}

export const toFixedPoint = (value: bigint | string, places = 18): bigint => {
  if (!Number.isInteger(places)) throw new Error(`places (${places}) must be an Integer`)
  if (typeof value === 'string') {
    const parts = value.split('.')
    if (parts.length > 2) {
      throw new Error('Too many decimals in value')
    }
    if (parts.length === 1) {
      return BigInt(value) * (10n ** BigInt(places))
    }
    const [whole, fraction] = parts
    const trimmed = fraction.slice(0, places)
    return BigInt(whole + trimmed.padEnd(Number(places), '0'))
  }
  return value * (10n ** BigInt(places))
}

export const fromFixedPoint = (value: bigint, places = 18): bigint => {
  if (!Number.isInteger(places)) throw new Error(`places (${places}) must be an Integer`)
  return value / (10n ** BigInt(places))
}
