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

const getGreeting = (config) => (name) => (date) => {
  const clenedName = pipe(apply("trim"), capitalize)(name)
  
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
        return config?.language_strings
          ? config.language_strings(clenedName)[config.lang].greeting.morning
          : `Good Morning ${clenedName}`
      }
      if (date > eveningStart && date < eveningEnd) {
        return `Good Evening ${clenedName}`
      }
      if (date < morningStart || date > eveningEnd) {
        return `Good Night ${clenedName}`
      }
    }
    return `Hello ${clenedName}`
  
}


function greet({ name, date = null, language_strings = null, lang = null }) {
  return pipe(getGreeting({language_strings, lang})(name), trace)(date)
}

module.exports = { greet };
