//used to explicitly launch an async funtion (or Promise) with awaiting it
const forget = (promise: Promise<unknown>) => {
  promise
    .then(() => {
      return
    })
    .catch(() => {
      return
    })
}

export { forget }
