import { nameOf } from './nameOf'

describe('nameOf', () => {
  it('allows referencing valid names from the object', () => {
    const obj = { foo: 'bar' }
    expect(nameOf<typeof obj>('foo')).toBe('foo')
    // TypeScript flags as error
    // expect(nameOf<typeof obj>('bar')).toBe('foo')
  })
})
