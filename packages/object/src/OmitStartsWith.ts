export type OmitStartsWith<T, Prefix extends string> = {
  [K in keyof T as K extends `${Prefix}${string}` ? never : K]: T[K];
}
