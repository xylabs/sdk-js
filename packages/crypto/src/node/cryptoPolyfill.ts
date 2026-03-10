/** No-op polyfill for Node.js, where the crypto module is already available globally. */
export const cryptoPolyfill = () => {
  return
}
