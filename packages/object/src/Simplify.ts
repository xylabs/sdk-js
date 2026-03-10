/** Flattens an intersection or complex mapped type into a single object type for better readability. */
export type Simplify<T> = { [K in keyof T]: T[K] } & {}
