export function getRootFunction(obj: unknown, funcName: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let anyObj = obj as any
  while (anyObj.__proto__?.[funcName]) {
    anyObj = anyObj.__proto__
  }
  return anyObj[funcName]
}
