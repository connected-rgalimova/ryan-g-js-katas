const { greet } = require('./Greeter');

function testGreet(
  name,
  hours = null,
  minutes = null,
  language_strings = null,
  lang = null
) {
  let today = null

  if (hours && minutes) {
    today = new Date()
    today.setHours(hours, minutes)
  }

  const input = { name }
  if (today) {
    input.date = today
  }
  if (language_strings) {
    input.language_strings = language_strings
  }
  if (lang) {
    input.lang = lang
  }

  return greet(input);
}

const language_strings = (name) => ({
  en: {
    greeting: {
      morning: `${name}, Good Morning`,
      afternoon: `${name}, Good Afternoon`,
      evening: `Good Evening ${name}!`,
      night: `${name}, Good Night`,
      default: `Hello ${name}!`,
    }
  }
})
describe('Greeter', () => {
  it('greets with Hello', () => {
    expect(testGreet("Bob")).toBe("Hello Bob");
  });
  it('trimms the input', () => {
    expect(testGreet("   frank  ")).toBe("Hello Frank")
  })
  it('capitalizes the name', () => {
    expect(testGreet("frank")).toBe("Hello Frank")
  })

  it("greets in the morning", () => {
    expect(testGreet("Bob", 8, 30)).toBe("Good Morning Bob")
  })

  it("greets in the evening", () => {
    expect(testGreet("Bob", 19, 30)).toBe("Good Evening Bob")
  })

  it("greets at night", () => {
    expect(testGreet("Bob", 23, 30)).toBe("Good Night Bob")
  })

  it("logs in console each time its called", () => {
    const logSpy = jest.spyOn(console, 'log')
    testGreet("Bob")
    expect(logSpy).toHaveBeenCalledWith("Hello Bob")
  })


  it("supports other languages with different greeting orders - morning", () => {
    expect(testGreet("Bob", 8, 30, language_strings, "en")).toBe("Bob, Good Morning") // default language is 'en'
  })

  it("supports other languages with different greeting orders - evening", () => {
    expect(testGreet("Bob", 19, 30, language_strings, "en")).toBe("Good Evening Bob!")
  })

  it("supports other languages with different greeting orders - night", () => {
    expect(testGreet("Bob", 23, 30, language_strings, "en")).toBe("Bob, Good Night")
  })

  it("supports other languages with different greeting orders - default time", () => {
    expect(testGreet("Bob", null, null, language_strings, "en")).toBe("Hello Bob!")
  })

  it("supports other languages with different greeting orders - default language", () => {
    expect(testGreet("Bob", null, null, language_strings, null)).toBe("Hello Bob!")
  })

  it("supports other languages with different greeting orders - nothing passed", () => {
    expect(testGreet("Bob", null, null, null, null)).toBe("Hello Bob")
  })

});
