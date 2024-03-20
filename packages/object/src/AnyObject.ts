import { TypedObject } from '@xylabs/promise'
/**
 * Any object, which means that it does not enforce the set of fields that it has.  Extending from AnyObject
 * will result in a type that includes the universal set of field names
 */
export type AnyObject = TypedObject
