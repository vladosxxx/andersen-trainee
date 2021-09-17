class StackElem {
  constructor(el) {
    this.el = el
    this.nextEl = null
  }
}
class Stack {
  constructor(maxStackSize = 10) {
    if (typeof maxStackSize !== 'number' || !isFinite(maxStackSize))
      throw new Error('Error')
    this.stackHead = null
    this.stackSize = 0
    this.maxStackSize = maxStackSize
  }
  push(elem) {
    if (this.maxStackSize < this.stackSize) throw new Error('Error')
    let newEl = new StackElem(elem)
    let curEl = this.stackHead
    this.stackHead = newEl
    newEl.nextEl = curEl
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
module.exports = { Stack }
