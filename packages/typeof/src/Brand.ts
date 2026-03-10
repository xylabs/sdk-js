/** Creates a branded type by intersecting base type T with brand type B, enabling nominal typing in TypeScript. */
export type Brand<T, B> = T & { [K in keyof B]: B[K] }
