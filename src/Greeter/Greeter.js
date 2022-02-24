const capitalize = (s) => {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const trace = (s) => {
  console.log(s)
  return s
}

const pipe = (...args) => {
  return (x) => args.reduce((y, func) => func(y), x)
}

const apply = (fn) => (obj) => obj[fn]()

const getGreeting = ({ name, language_strings, lang }) => (date) => {

  const clenedName = pipe(apply("trim"), capitalize)(name)
  const greeting = language_strings(clenedName)[lang].greeting

  if (date) {
    const morningStart = new Date()
    morningStart.setHours(6)

    const morningEnd = new Date()
    morningEnd.setHours(12)

    const eveningStart = new Date()
    eveningStart.setHours(18)

    const eveningEnd = new Date()
    eveningEnd.setHours(22)

    if (date > morningStart && date < morningEnd) {
      return greeting.morning
    }
    if (date > eveningStart && date < eveningEnd) {
      return greeting.evening
    }
    if (date < morningStart || date > eveningEnd) {
      return greeting.night
    }
  }
  return greeting.default
}

const defaultLanguageStrings = (name) => ({
  en: {
    greeting: {
      morning: `Good Morning ${name}`,
      afternoon: `Good Afternoon ${name}`,
      evening: `Good Evening ${name}`,
      night: `Good Night ${name}`,
      default: `Hello ${name}`,
    }
  }
})

function greet({ name, date = null, language_strings = defaultLanguageStrings, lang = 'en' }) {
  return pipe(getGreeting({ name, language_strings, lang }), trace)(date)
}

module.exports = { greet };
