/**
 * A utility type that, given a `Record<string, unknown>`, returns a readonly version
 * of that record. This results in a type where all properties of `T` are readonly.
 *
 * @template T - The record type to make readonly.
 *
 * @example
 * ```typescript
 * // Given a record:
 * const MyRecord = {
 *   FOO: "foo",
 *   BAR: "bar"
 * } as const;
 *
 * // Applying Enum<T> results in:
 * type MyRecordEnum = Enum<typeof MyRecord>;
 * // {
 * //   readonly FOO: "foo";
 * //   readonly BAR: "bar";
 * // }
 * ```
 */
export type Enum<T extends Record<string, unknown>> = {
  readonly [K in keyof T]: T[K]
}

/**
 * Transforms a given record object into a readonly "enum-like" structure while preserving
 * the literal types of its values. This allows you to use the returned object both at runtime
 * (for lookups) and at compile time (for strongly typed values).
 *
 * To maintain literal types (i.e., prevent them from being widened to `string`, `number`, etc.),
 * ensure you annotate your object with `as const` before passing it to `Enum`.
 *
 * @template T - A record type with string keys and any kind of values.
 * @param obj - A readonly record object annotated with `as const`.
 * @returns A readonly version of the provided record, preserving exact literal value types.
 *
 * @example
 * ```typescript
 * // Defining a record with literal types using as const:
 * const DnsRecordType = Enum({
 *   A: 1,
 *   AAAA: 28,
 *   CAA: 257,
 *   CNAME: 5,
 *   DNAME: 39,
 *   MX: 15,
 *   NS: 2,
 *   PTR: 12,
 *   SOA: 6,
 *   SPF: 99,
 *   SRV: 33,
 *   TXT: 16,
 * } as const);
 *
 * // DnsRecordType is now a readonly object:
 * // {
 * //   readonly A: 1;
 * //   readonly AAAA: 28;
 * //   readonly CAA: 257;
 * //   readonly CNAME: 5;
 * //   readonly DNAME: 39;
 * //   readonly MX: 15;
 * //   readonly NS: 2;
 * //   readonly PTR: 12;
 * //   readonly SOA: 6;
 * //   readonly SPF: 99;
 * //   readonly SRV: 33;
 * //   readonly TXT: 16;
 * // }
 *
 * // You can then derive a type for the values:
 * type DnsRecordTypeValue = typeof DnsRecordType[keyof typeof DnsRecordType];
 * // DnsRecordTypeValue = 1 | 28 | 257 | 5 | 39 | 15 | 2 | 12 | 6 | 99 | 33 | 16
 * ```
 */
export const Enum = <const T extends Record<string, unknown>>(obj: Readonly<T>): Enum<T> => {
  return obj
}
