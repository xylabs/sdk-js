/**
 * For use with Promise.allSettled to filter only successful results
 * @param val
 * @returns
 */
export const fulfilled = <T>(val: PromiseSettledResult<T>): val is PromiseFulfilledResult<T> => {
  return val.status === 'fulfilled'
}
