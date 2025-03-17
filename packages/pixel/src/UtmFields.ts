import isEqual from 'fast-deep-equal'

export class UtmFields {
  private static localStorageId = '_coin_utm'
  fields: Record<string, string>[] = []
  constructor() {
    const storedString = globalThis.localStorage.getItem(UtmFields.localStorageId) ?? '[]'
    try {
      this.fields = JSON.parse(storedString)
    } catch {
      this.fields = []
    }
    // this clears the old object version if needed
    if (!Array.isArray(this.fields)) {
      this.fields = []
    }
    this.update()
    globalThis.localStorage.setItem(UtmFields.localStorageId, JSON.stringify(this.fields))
  }

  getUtmRecord = () => {
    const record: Record<string, string> = {}
    const parsedQueryString = document.location.search.split('?')[1]?.split('&') ?? []
    for (const item of parsedQueryString) {
      const [fullKey, value] = item.split('=')
      const [keyCategory, keyName] = fullKey.split('_')
      if (keyCategory === 'utm') {
        record[keyName] = value
      }
    }
    return Object.keys(record).length > 0 ? record : null
  }

  toString() {
    return JSON.stringify(this.fields)
  }

  // check the query string and if there an new/updated utm values, add them to the fields
  update() {
    const record = this.getUtmRecord()
    if (record && !isEqual(this.fields.at(-1), record)) {
      this.fields.push(record)
    }
    return this.fields ?? undefined
  }
}
