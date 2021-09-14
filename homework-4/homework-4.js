function concatStrings(str, separator) {
  return function (nextStr) {
    if (typeof nextStr !== 'string') return str
    if (typeof separator !== 'string') {
      let newStr = str + nextStr
      return concatStrings(newStr)
    }
    let newStr = str + separator + nextStr
    return concatStrings(newStr, separator)
  }
}

class Calculator {
  constructor(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') throw new Error('Error')
    this.x = x
    this.y = y
  }
  setX(x) {
    if (typeof x !== 'number') throw new Error('Error')
    this.x = x
  }
  setY(y) {
    if (typeof y !== 'number') throw new Error('Error')
    this.y = y
  }
  logSum = () => {
    console.log(this.x + this.y)
  }
  logMul = () => {
    console.log(this.x * this.y)
  }
  logSub = () => {
    console.log(this.x - this.y)
  }
  logDiv = () => {
    if (this.y === 0) throw new Error('Error')
    console.log(this.x / this.y)
  }
}
