class StackElem {
  constructor(el, nextEl) {
    this.el = el
    this.nextEl = nextEl
  }
}
class Stack {
  constructor(maxStackSize = 10) {
    if (typeof maxStackSize !== 'number' || !isFinite(maxStackSize))
      throw new Error('Error')
    this.stackHead = new StackElem(null, null)
    this.stackSize = 0
    this.maxStackSize = maxStackSize
    console.log(this.stackHead)
  }
  push(elem) {
    if (this.maxStackSize < this.stackSize) throw new Error('Error')
    let curEl = this.stackHead
    let newEl = new StackElem(elem, curEl)
    this.stackHead = newEl
    this.stackSize++
    return this.stackHead
  }
  pop() {
    if (this.isEmpty()) {
      throw new Error('Error')
    }
    let delEl = this.stackHead.el
    this.stackHead = this.stackHead.nextEl
    this.stackSize--
    return delEl
  }
  peek() {
    return this.stackSize === 0 ? null : this.stackHead.el
  }
  isEmpty() {
    return this.stackSize === 0
  }
  toArray() {
    let newArr = []
    while (this.stackHead) {
      if (this.stackHead.el == null) break
      newArr = [...newArr, this.stackHead.el]
      this.stackHead = this.stackHead.nextEl
    }
    return newArr
  }
  static fromIterable(iterable) {
    if (typeof iterable[Symbol.iterator] !== 'function')
      throw new Error('Error')
    let newStack = new Stack(iterable.stackSize)
    for (el of iterable) {
      newStack.push(el)
    }
    return newStack
  }
}
const a = new Stack()
console.log(a.push(1))
console.log(a.push(2))
console.log(a.push(3))
console.log(a.push(4))
console.log(a.push(5))
console.log(a.push(6))
console.log(a.push(7))
console.log(a.push(8))
let b = a.push(9)

console.log('A :', a)
a[Symbol.iterator] = function () {
  // ...она возвращает объект итератора:
  // 2. Далее, for..of работает только с этим итератором, запрашивая у него новые значения
  return {
    current: this.nextEl,
    last: this.StackElem,

    // 3. next() вызывается на каждой итерации цикла for..of
    next() {
      // 4. он должен вернуть значение в виде объекта {done:.., value :...}
      if (this.current <= this.last) {
        return { done: false, value: this.current++ }
      } else {
        return { done: true }
      }
    },
  }
}
console.log('Iterator: ', Stack.fromIterable(a))
for (let num of a) {
  console.log('FOR:', num) // 1, затем 2, 3, 4, 5
}
module.exports = { Stack }
