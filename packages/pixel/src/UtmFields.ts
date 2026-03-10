import isEqual from 'fast-deep-equal'

/** Tracks UTM campaign parameters from query strings, persisting history in localStorage. */
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

  /**
   * Parses UTM parameters from the current URL query string.
   * @returns A record of UTM key-value pairs, or null if none are present
   */
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

  /** Returns the UTM fields history as a JSON string. */
  toString() {
    return JSON.stringify(this.fields)
  }

  /**
   * Checks the query string for new UTM values and appends them to the history if changed.
   * @returns The current UTM fields array, or undefined if empty
   */
  // check the query string and if there an new/updated utm values, add them to the fields
  update() {
    const record = this.getUtmRecord()
    if (record && !isEqual(this.fields.at(-1), record)) {
      this.fields.push(record)
    }
    return this.fields ?? undefined
  }
}
