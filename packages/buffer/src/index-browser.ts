import { Buffer, bufferPolyfill } from './browser/index.ts'

const BrowserBuffer = Buffer
const BrowserBufferPolyfill = bufferPolyfill
export { BrowserBuffer as Buffer, BrowserBufferPolyfill as bufferPolyfill }
