import { bufferPolyfill } from './bufferPolyfill'
export { Buffer } from 'buffer/'

//always run the polyfill
bufferPolyfill()

export { bufferPolyfill }
