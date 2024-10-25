export type AssertExMessageFunc<T> = (value?: T | null) => string
export type AssertExErrorFunc<T, R extends Error> = (value?: T | null) => R
