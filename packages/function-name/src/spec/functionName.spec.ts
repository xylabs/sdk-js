import { functionName } from '../functionName.ts'

describe('Logger', () => {
  test('getFunctionName:function', () => {
    const test = () => {
      return functionName()
    }
    const funcName = test()
    expect(funcName).toBe('test')
  })
  test('getFunctionName:constructor', () => {
    class Foo {
      funcName: string
      constructor() {
        this.funcName = functionName()
      }
    }

    const foo = new Foo()
    expect(foo.funcName).toBe('new Foo')
  })

  test('getFunctionName:method', () => {
    class Foo {
      funcName: string
      constructor() {
        this.funcName = this.test()
      }

      test() {
        return functionName()
      }
    }

    const foo = new Foo()
    expect(foo.funcName).toBe('Foo.test')
  })

  test('getFunctionName:static', () => {
    class Foo {
      funcName: string
      constructor() {
        this.funcName = Foo.test()
      }

      static test() {
        return functionName()
      }
    }

    const foo = new Foo()
    expect(foo.funcName).toBe('Function.test')
  })
})
