/**
 * For use with Promise.allSettled to filter only rejected results
 * @param val
 * @returns
 */
export const rejected = <T>(val: PromiseSettledResult<T>): val is PromiseRejectedResult => {
  return val.status === 'rejected'
}
