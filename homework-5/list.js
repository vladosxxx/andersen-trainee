class Node {
  constructor(elem, next = null) {
    this.elem = elem
    this.next = next
  }
}
class LinkedList {
  constructor() {
    this.head = null
    this.end = null
  }
  append(elem) {
    let newNode = new Node(elem)
    if (!this.head || !this.end) {
      this.head = newNode
    } else {
      this.end.next = newNode
    }
    this.end = newNode
  }
  prepend(elem) {
    let newNode = new Node(elem, this.head)
    this.head = newNode
    if (!this.end) {
      this.end = newNode
    }
  }
  find(elem) {
    while (this.head) {
      if (this.head.elem === elem) return this.head
      this.head = this.head.next
    }
    return null
  }
  toArray() {
    let newArr = []
    while (this.head) {
      newArr.push(this.head.elem)
      this.head = this.head.next
    }
    return newArr
  }
  static fromIterable(iterable) {
    if (typeof iterable[Symbol.iterator] !== 'function')
      throw new Error('Error')
    let newLinkedList = new LinkedList()
    for (let el of iterable) {
      newLinkedList.append(el)
    }
    return newLinkedList
  }
}
