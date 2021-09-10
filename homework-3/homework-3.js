Array.prototype.myFilter = function (callback, obj) {
  let filteredArr = []
  this.forEach(function (currentArgument, index, array) {
    if (callback.call(obj, currentArgument, index, array)) {
      filteredArr = [...filteredArr, currentArgument]
    }
    return filteredArr
  })
  return filteredArr
}

function createDebounceFunction(callback, wait) {
  let timeout
  return function (...args) {
    const later = function () {
      callback.apply(this, args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}
