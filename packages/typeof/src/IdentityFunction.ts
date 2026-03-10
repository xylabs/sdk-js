/** A type guard function that narrows an unknown value to type T. */
export type IdentityFunction<T> = (value: unknown) => value is T
