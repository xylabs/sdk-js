/**
 * Used to type narrow an object which is possibly null or undefined. Works well
 * with functional Array methods. For example:
 * @example
 * const payloads: XyoPayload[] = boundWitness._payloads?.filter(exists) || []
 * @param x The object which is potentially undefined or null
 * @returns False if the object is null/undefined, true otherwise
 */
export const exists = <T>(x?: T | null): x is NonNullable<T> => {
  return x === undefined || x === null ? false : true
}
