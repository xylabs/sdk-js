export type PickStartsWith<T, Prefix extends string> = {
  [K in keyof T as K extends `${Prefix}${string}` ? K : never]: T[K];
}

export type DeepPickStartsWith<T, Prefix extends string> = T extends (infer U)[]
  ? DeepPickStartsWith<U, Prefix>[] // Special handling for arrays
  : T extends object
    ? {
        [K in keyof T as K extends string
          ? K extends `${Prefix}${string}`
            ? K
            : never
          : K]: DeepPickStartsWith<T[K], Prefix>;
      }
    : T
