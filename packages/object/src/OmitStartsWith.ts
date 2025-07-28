import type { JsonValue } from './JsonObject.ts'

export type OmitStartsWith<T, Prefix extends string> = {
  [K in keyof T as K extends `${Prefix}${string}` ? never : K]: T[K];
}

export type DeepOmitStartsWith<T, Prefix extends string> = T extends (infer U)[]
  ? DeepOmitStartsWith<U, Prefix>[] // Special handling for arrays
  : T extends object
    ? {
        [K in keyof T as K extends string
          ? K extends `${Prefix}${string}`
            ? never
            : K
          : K]: DeepOmitStartsWith<T[K], Prefix>;
      }
    : T

export type DeepRestrictToStringKeys<T> = {
  [K in keyof T as K extends string ? K : never]: T[K] extends (infer U)[]
    ? DeepRestrictToStringKeys<U>[] // Handle arrays recursively
    : T[K] extends object
      ? DeepRestrictToStringKeys<T[K]> // Handle objects recursively
      : T[K]; // Leave other types untouched
}

export type DeepRestrictToJson<T> = {
  [K in keyof T as K extends string ? K : never]: T[K] extends (infer U)[]
    ? DeepRestrictToJson<U>[] // Handle arrays recursively
    : T[K] extends object
      ? DeepRestrictToJson<T[K]> // Handle objects recursively
      : T[K] extends JsonValue
        ? T[K] // Leave JsonValue types untouched
        : never; // Exclude other types
}
