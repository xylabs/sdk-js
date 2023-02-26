import { staticImplements } from './staticImplements'

interface StaticMethods {
  foo(): string
}

@staticImplements<StaticMethods>()
class Concrete {
  static foo() {
    return 'bar'
  }
}

describe('staticImplements', () => {
  it('forces to implement', () => {
    expect(Concrete.foo).toBeDefined()
  })
})
