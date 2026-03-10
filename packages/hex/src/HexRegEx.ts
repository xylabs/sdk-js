/**
 * Creates a RegExp matching lowercase hex strings with a byte length in the given range.
 * @param minBytes - Minimum number of bytes (default 0)
 * @param maxBytes - Maximum number of bytes
 * @returns A RegExp for validating hex strings within the byte range
 */
export const HexRegExMinMax = (minBytes = 0, maxBytes: number = (Number.MAX_SAFE_INTEGER / 2)) => {
  return new RegExp(`^[a-f0-9]{${minBytes * 2},${maxBytes * 2}}$`)
}

/**
 * Creates a RegExp matching mixed-case hex strings with a 0x prefix and a byte length in the given range.
 * @param minBytes - Minimum number of bytes (default 0)
 * @param maxBytes - Maximum number of bytes
 * @returns A RegExp for validating prefixed hex strings within the byte range
 */
export const HexRegExMinMaxMixedCaseWithPrefix = (minBytes = 0, maxBytes: number = (Number.MAX_SAFE_INTEGER / 2)) => {
  return new RegExp(`^0x[a-fA-F0-9]{${minBytes * 2},${maxBytes * 2}}$`)
}

/** Regular expression matching a lowercase hex string without prefix. */
export const HexRegEx = /^[0-9a-f]+$/
/** Regular expression matching a lowercase hex string with a 0x prefix. */
export const HexRegExWithPrefix = /^0x[0-9a-f]+$/
