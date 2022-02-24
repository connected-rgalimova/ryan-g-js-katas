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

const getGreeting = (name) => (date) => {
  const getTimedGreeting = (date) => {
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
        return "Good Morning"
      }
      if (date > eveningStart && date < eveningEnd) {
        return "Good Evening"
      }
      if (date < morningStart || date > eveningEnd) {
        return "Good Night"
      }
    }
    return "Hello"
  }
  
  return getTimedGreeting(date) + " " + capitalize(name.trim())
}


function greet(name, date = null) {
  return pipe(getGreeting(name), trace)(date)
}

module.exports = { greet };
