/**
 * Walks the prototype chain to find the root (base-most) definition of a named function.
 * @param obj - The object to start searching from
 * @param funcName - The name of the function to locate
 * @returns The function from the highest prototype in the chain that defines it
 */
export function getRootFunction(obj: unknown, funcName: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let anyObj = obj as any
  while (anyObj.__proto__?.[funcName]) {
    anyObj = anyObj.__proto__
  }
  return anyObj[funcName]
}
