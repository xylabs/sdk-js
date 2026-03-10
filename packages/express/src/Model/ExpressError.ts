/** An Error with an optional HTTP status code for Express error handling. */
export interface ExpressError extends Error {
  statusCode?: number
}
