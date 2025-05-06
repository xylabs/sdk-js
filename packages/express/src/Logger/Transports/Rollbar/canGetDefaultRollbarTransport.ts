export const canGetDefaultRollbarTransport = (env: { [key: string]: string | undefined }): boolean => {
  return env.ROLLBAR_ACCESS_TOKEN === undefined ? false : true
}
