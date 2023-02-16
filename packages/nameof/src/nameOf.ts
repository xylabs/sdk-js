/**
 * Strongly-typed string keys from the specified type
 * @param name String name of key from object
 * @returns The name of the key from the object
 */
export const nameOf = <T>(name: keyof T) => name
