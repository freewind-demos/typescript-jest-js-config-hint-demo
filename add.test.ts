import add from './add';

type State = {
  aaa: string,
  bbb: string
}
describe('test', () => {
  it('1+2 === 3', () => {
    expect(add(1, 2)).toBe(3);
    expect({aaa: 'sdf'}).toMatchObject({aaa: 'sdf'})
  })
})
