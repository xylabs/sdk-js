/**
 * For use with Promise.allSettled to reduce to only successful result values
 * @example <caption>Casting the initialValue provided to reduce</caption>
 * const resolved = Promise.resolve('resolved')
 * const rejected = Promise.reject('rejected')
 * const settled = await Promise.allSettled([resolved, rejected])
 * const results = settled.reduce(fulfilledValues, [] as string[])
 * // results === [ 'resolved' ]
 * @example <caption>Providing type parameter to reduce and initialValue type can be inferred</caption>
 * const resolved = Promise.resolve('resolved')
 * const rejected = Promise.reject('rejected')
 * const settled = await Promise.allSettled([resolved, rejected])
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
