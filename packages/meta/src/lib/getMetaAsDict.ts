import { isString } from '@xylabs/typeof'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type StringIndexable = { [key: string]: any }

const propertyDelimiter = ':'

export const getMetaAsDict = (obj: StringIndexable, parentKey?: string): Record<string, string> => {
  let flatRecord: StringIndexable = {}
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      // If the value is another object, we want to iterate through its keys as well.
      const childRecord = getMetaAsDict(obj[key] as StringIndexable, `${isString(parentKey) ? parentKey : ''}${key}${propertyDelimiter}`)
      flatRecord = { ...flatRecord, ...childRecord }
    } else {
      // Concatenate the key with its parent key.
      const newKey = isString(parentKey) ? `${parentKey}${key}` : key
      const trimmed = newKey.endsWith(propertyDelimiter) ? newKey.slice(0, -1) : newKey
      flatRecord[trimmed] = `${obj[key]}`
    }
  }
  return flatRecord
}
