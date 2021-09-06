function makeObjectDeepCopy(obj) {
  if (!obj || typeof obj !== 'object') {
    return obj
  }
  let copiedObj = obj instanceof Array ? [] : {}
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      copiedObj[prop] = makeObjectDeepCopy(obj[prop])
    }
  }
  return copiedObj
}

function selectFromInterval(arr, lastVal, firstVal) {
  if (
    !Array.isArray(arr) ||
    !arr.every((el) => typeof el === 'number') ||
    typeof lastVal !== 'number' ||
    typeof firstVal !== 'number'
  ) {
    throw new Error('ERROR')
  }
  if (lastVal < firstVal) {
    lastVal = lastVal + firstVal
    firstVal = lastVal - firstVal
    lastVal = lastVal - firstVal
  }
  let newArr = arr.filter((val) => lastVal >= val && firstVal <= val)
  return newArr
}

const myIterable = { from: 1, to: 4 }
myIterable[Symbol.iterator] = function () {
  if (
    !this.hasOwnProperty('from') ||
    !this.hasOwnProperty('to') ||
    typeof this.from !== 'number' ||
    typeof this.to !== 'number' ||
    this.from > this.to
  ) {
    throw new Error('ERROR')
  }
  let fromVal = this.from
  let toVal = this.to
  return {
    next() {
      if (fromVal <= toVal) {
        return {
          done: false,
          value: fromVal++,
        }
      } else {
        return {
          done: true,
        }
      }
    },
  }
}
