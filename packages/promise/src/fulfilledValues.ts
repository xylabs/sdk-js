/**
 * For use with Promise.allSettled to reduce to only successful result values
 * @example
 * const settled = await Promise.allSettled([Promise.resolve('resolved'), Promise.reject('rejected')])
 * const results = settled.reduce(fulfilledValues, [] as string[])
 * // results === [ 'resolved' ]
 * @example
 * const settled = await Promise.allSettled([Promise.resolve('resolved'), Promise.reject('rejected')])
 * const results = settled.reduce<string[]>(fulfilledValues, [])
 * // results === [ 'resolved' ]
 * @param previousValue
 * @param currentValue
 * @returns
 */
export const fulfilledValues = <T>(previousValue: T[], currentValue: PromiseSettledResult<T>): T[] => {
  if (currentValue.status === 'fulfilled') previousValue.push(currentValue.value)
  return previousValue
}
