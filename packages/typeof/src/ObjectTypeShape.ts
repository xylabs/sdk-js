/** Union of string literals representing the possible types of an object field. */
export type FieldType = 'string' | 'number' | 'object' | 'symbol' | 'undefined' | 'null' | 'array' | 'function'

/** Describes the expected shape of an object by mapping each key to its expected field type. */
export type ObjectTypeShape = Record<string | number | symbol, FieldType>
