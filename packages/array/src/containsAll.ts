/**
 * Checks whether the source array contains every element in the target array.
 * @param source - The array to search within
 * @param target - The elements that must all be present
 * @returns True if every target element exists in source
 */
export const containsAll = <T>(source: T[], target: T[]) => target.every(i => source.includes(i))
