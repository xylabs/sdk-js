/** Generates and persists a unique user identifier in localStorage. */
export class UniqueUserId {
  private static localStorageId = '_coin_cid'
  id: string

  constructor() {
    this.id = globalThis.localStorage.getItem(UniqueUserId.localStorageId) ?? this.generateId()
    globalThis.localStorage.setItem(UniqueUserId.localStorageId, this.id)
  }

  /** Returns the unique user ID as a string. */
  toString() {
    return this.id
  }

  private generateId() {
    return crypto.randomUUID()
  }
}
