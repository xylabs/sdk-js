export type FieldType = 'string' | 'number' | 'object' | 'symbol' | 'undefined' | 'null' | 'array' | 'function'

export type ObjectTypeShape = Record<string | number | symbol, FieldType>
