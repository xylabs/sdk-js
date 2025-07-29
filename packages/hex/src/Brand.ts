export type Brand<T, B> = T & { [K in keyof B]: B[K] }
