const sumArray = (arr) => arr.reduce((agg, n) => (agg += n), 0)


const add = (num) => {
  const parsed_nums = num
    .split(',')
    .map((s) => (s.split('\n')))
    .flat()
    .map(n => Number(n))
    .filter((n) => n <= 1000)

  negative_nums = parsed_nums.filter(n => n < 0)
  if (negative_nums.length > 0) {
    throw `negatives not allowed: ${negative_nums.join(',')}`
  }

  return sumArray(parsed_nums)
}

module.exports = { add }
