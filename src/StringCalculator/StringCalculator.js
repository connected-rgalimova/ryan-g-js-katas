const sumArray = (arr) => arr.reduce((agg, n) => (agg += n), 0)

const hasCustomDelimiter = (lines) => (
    lines[0].substr(0, 2) === '//'
  ) 

const getDelimiter = (lines) => (hasCustomDelimiter(lines)
  ? lines[0].substr(2)
  : ',')

const getLines = (lines) => (hasCustomDelimiter(lines) 
 ? lines.slice(1)
 : lines)


const add = (num) => {
  const lines = num.split('\n')
  const parsed_filtered_nums = getLines(lines)
    .map((s) => (s.split(getDelimiter(lines))))
    .flat()
    .map(n => Number(n))
    .filter((n) => n <= 1000)

  const negative_nums = parsed_filtered_nums.filter(n => n < 0)
  if (negative_nums.length > 0) {
    throw `negatives not allowed: ${negative_nums.join(',')}`
  }

  return sumArray(parsed_filtered_nums)
}

module.exports = { add }
