// Returns a negative number if a < b, zero if a == b, and a positive number if a > b
export type Compare<T> = (a: T, b: T) => number
