/**
 * Checks whether the ROLLBAR_ACCESS_TOKEN environment variable is set.
 * @param env The environment variables to check.
 * @returns True if the Rollbar access token is available.
 */
export const canGetDefaultRollbarTransport = (env: { [key: string]: string | undefined }): boolean => {
  return env.ROLLBAR_ACCESS_TOKEN === undefined ? false : true
}
