import type { TypeOfTypes } from './TypeOfTypes.ts'

/**
 * Extended typeof that distinguishes arrays from objects (unlike native `typeof`).
 * @param item - The value to check.
 * @returns The type of the item as a TypeOfTypes string.
 */
export const typeOf = <T>(item: T): TypeOfTypes => {
  return Array.isArray(item) ? 'array' : typeof item
}
