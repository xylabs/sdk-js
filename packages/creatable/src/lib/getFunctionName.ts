import { isNumber } from '@xylabs/typeof'

/**
 * Extracts the function name from the call stack at the given depth.
 * @param depth - The stack frame depth to inspect (default: 2)
 * @returns The function name, or '\<unknown\>' if it cannot be determined
 */
export function getFunctionName(depth = 2) {
  const error = new Error('Stack')
  let newIndex: number | undefined
  const stackParts = error.stack?.split('\n')[depth]?.split(' ')
  const funcName
    = stackParts?.find((item, index) => {
      if (item.length > 0 && item !== 'at') {
        // check if constructor
        if (item === 'new') {
          newIndex = index
        }
        return true
      }
    }) ?? '<unknown>'
  return isNumber(newIndex) ? `${funcName} ${stackParts?.[newIndex + 1]}` : funcName
}
