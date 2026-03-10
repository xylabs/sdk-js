/**
 * Checks whether a hostname refers to the local machine (localhost, 127.0.0.1, ::1, or *.localhost).
 * @param hostname - The hostname to check
 * @returns `true` if the hostname is a localhost address
 */
export const isLocalhost = (hostname: string): boolean => {
  return (
    hostname === 'localhost'
    || hostname === '127.0.0.1'
    || hostname === '::1' // IPv6 localhost
    || hostname.endsWith('.localhost')
  )
}
