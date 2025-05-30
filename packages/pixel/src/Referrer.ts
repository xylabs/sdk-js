export class Referrer {
  private static storageId = '_coin_referrer'
  local: string
  session: string
  constructor() {
    this.session = this.getFromSession() ?? document.referrer
    sessionStorage.setItem(Referrer.storageId, this.session)
    this.local = this.getFromLocal() ?? document.referrer
    globalThis.localStorage.setItem(Referrer.storageId, this.local)
  }

  toJson() {
    if ((this.local.length > 0) || (this.session.length > 0)) {
      return {
        local: this.local,
        session: this.session,
      }
    }
  }

  private getFromLocal() {
    const value = globalThis.localStorage.getItem(Referrer.storageId)
    if (value !== null && value.length > 0) {
      return value
    }
  }

  private getFromSession() {
    const value = sessionStorage.getItem(Referrer.storageId)
    if (value !== null && value.length > 0) {
      return value
    }
  }
}
