export type Optional<T extends object, F extends keyof T> = Omit<T, F> & Partial<Pick<T, F>>
