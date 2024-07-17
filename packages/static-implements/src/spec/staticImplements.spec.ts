import { staticImplements } from '../staticImplements.js'

interface StaticMethods {
  foo(): string
}

@staticImplements<StaticMethods>()
class Concrete {
  static foo() {
    return 'bar'
  }
  foo() {
    return 1
  }
}

describe('staticImplements', () => {
  it('forces class to implement static methods', () => {
    expect(Concrete.foo).toBeFunction()
    expect(Concrete.foo()).toBeString()
  })
  it('does not allow instances to satisfy static constraints', () => {
    expect(new Concrete().foo).toBeFunction()
    expect(new Concrete().foo()).toBeNumber()
  })
})
