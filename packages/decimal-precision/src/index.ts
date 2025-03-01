export const toDecimalPrecision = (value: number, digits: number) => {
  let fixed = 0
  const result = Number.parseFloat(value.toPrecision(digits))
  while (Number.parseFloat(result.toFixed(fixed)) !== result && fixed < 20) {
    fixed++
  }
  return result.toFixed(fixed)
}

export const toFixedPoint = (value: bigint | string, places = 18n): bigint => {
  if (typeof value === 'string') {
    const parts = value.split('.')
    if (parts.length > 2) {
      throw new Error('Too many decimals in value')
    }
    if (parts.length === 1) {
      return BigInt(value) * (10n ** places)
    }
    const [whole, fraction] = parts
    const trimmed = fraction.slice(0, 18)
    return BigInt(whole + trimmed.padEnd(Number(places), '0'))
  }
  return value * (10n ** places)
}
export const fromFixedPoint = (value: bigint, places = 18n): bigint => value / (10n ** places)
