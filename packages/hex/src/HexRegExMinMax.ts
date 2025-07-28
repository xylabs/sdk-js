export const HexRegExMinMax = (minBytes = 0, maxBytes: number = (Number.MAX_SAFE_INTEGER / 2)) => {
  return new RegExp(`^[a-f0-9]{${minBytes * 2},${maxBytes * 2}}$`)
}

export const HexRegExMinMaxMixedCaseWithPrefix = (minBytes = 0, maxBytes: number = (Number.MAX_SAFE_INTEGER / 2)) => {
  return new RegExp(`^0x[a-fA-F0-9]{${minBytes * 2},${maxBytes * 2}}$`)
}
