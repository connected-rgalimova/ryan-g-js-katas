const { greet } = require('./Greeter');

describe('Greeter', () => {
  it('greets with Hello', () => {
    expect(greet("Bob")).toBe("Hello Bob");
  });
  it('trimms the input', () => {
    expect(greet("   Frank  ")).toBe("Hello Frank")
  })
  it('capitalizes the name', () => {
    expect(greet("frank")).toBe("Hello Frank")
  })

  it("greets in the morning", () => {
    const today = new Date()
    today.setHours(8,30)
    expect(greet("Bob", today)).toBe("Good Morning Bob")
  }) 

  it("greets in the evening", () => {
    const today = new Date()
    today.setHours(19,30)
    expect(greet("Bob", today)).toBe("Good Evening Bob")
  }) 

   it("greets at night", () => {
    const today = new Date()
    today.setHours(23,30)
    expect(greet("Bob", today)).toBe("Good Night Bob")
   }) 
  
  it("logs in console each time its called", () => {
    const logSpy = jest.spyOn(console, 'log')
    console.log(greet("Bob"))
    expect(logSpy).toHaveBeenCalledWith("Hello Bob")
   })
});
