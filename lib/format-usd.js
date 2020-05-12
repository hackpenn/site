// Full credit to https://github.com/derekpeterson/format-money/blob/master/index.js
//
const DECIMAL_RE = /^0\./

const format = (num) => {
  let isNeg = num < 0
  let val = Math.abs(num)
  let cents = '00'

  if (val > 0) {
    cents = val - Math.floor(val)
    val = Math.floor(val)
    cents = ('' + cents).replace(DECIMAL_RE, '')
    cents = cents.length < 2 ? cents + '00' : cents
    cents = cents.slice(0, 2)
  }

  val = ('' + val)
    .split('')
    .reverse()
    .map(function (c, i) {
      return c + (i > 0 && i % 3 === 0 ? ',' : '')
    })
    .reverse()
    .join('')

  return `${isNeg ? '-' : ''}$${val}.${cents}`
}

export default format
