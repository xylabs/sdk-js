/**
 * Used to type narrow an object which is possibly undefined. Works well
 * with functional Array methods. For example:
 * @example
 * const payloads: XyoPayload[] = boundWitness._payloads?.filter(exists) || []
 * @param x The object which is potentially undefined
 * @returns True if the object is defined, false otherwise
 */
export const exists = <T>(x?: T | null): x is T => {
  return !!x
}
