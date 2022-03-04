const { add } = require('./StringCalculator')
describe('String Calculator', () => {
  it('returns 0 on empty string', () => {
    const empty = add('')

    expect(empty).toEqual(0)
  })

  it('returns the number value when a single number is provided as a string', () => {
    const num = add('3')

    expect(num).toEqual(3)
  })

  // it('sums the two numbers that are comma divided', () => {
  //   const sum = add('10,20')

  //   expect(sum).toEqual(30)
  // })

  // // '1\n2' => 3
  // it('sums two numbers that are newline delimited', () => {
  //   const sum = add('5\n7')

  //   expect(sum).toEqual(12)
  // })

  it('Three numbers, delimited either way, returns the sum', () => {
    const sum = add('1\n2,3\n4')

    expect(sum).toEqual(10)
  })

  it('negtive numbers make it fail with exception', () => {

    expect(() => (add('-1,2,-3'))).toThrow('negatives not allowed: -1,-3')
  })

  it('ignores any numbers greater than 1000', () => {
    const sum = add('999,1000,1001,2')

    expect(sum).toEqual(2001)
  })

  it('allows a custom delimiter', () => {
    const sum = add('//#\n1#2')

    expect(sum).toEqual(3)
  })
})