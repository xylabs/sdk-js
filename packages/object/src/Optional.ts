/** Makes the specified fields of T optional while keeping the rest required. */
export type Optional<T extends object, F extends keyof T> = Omit<T, F> & Partial<Pick<T, F>>
