/**
 * Returns the elements of an array that meet the condition specified in a callback function.
 * @param array The array to filter.
 * @param predicate A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
 * @returns The elements of an array that meet the condition specified in a callback function.
 */
export const filterAsync = async <T>(
  array: T[],
  predicate: (value: T, index: number, array: T[]) => Promise<boolean>,
): Promise<T[]> => {
  const results = await Promise.all(array.map(predicate))
  return array.filter((_, index) => results[index])
}
