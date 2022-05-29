/**
 * A doubly linked list implemented with class.
 * Includes methods push(), pop(), shift(), unshift(), delete() and count()
 * Doesn't include methods to add in the middle of the list.
 * Delete by value, not index. Deletes the first occurrence.
 */
export class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }


  push(data) {
    let node = new this.Node(data)

    if (this.head === null) {
      this.head = node
      this.tail = node
      this.length++
      return
    }

    let currentTail = this.tail || this.head

    node.prev = currentTail
    currentTail.next = node
    this.tail = node
    this.length++
  }


  pop() {
    let currentTail = this.tail
    this.tail = currentTail.prev
    this.length--
    return currentTail.data
  }


  shift() {
    let currentHead = this.head
    this.head = currentHead.next
    this.length--
    return currentHead.data
  }


  unshift(data) {
    let node = new this.Node(data)

    if (this.head === null) {
      this.head = node
      this.tail = node
      this.length++
    }

    let currentHead = this.head

    currentHead.prev = node
    node.next = currentHead
    this.head = node
    this.length++
  }


  delete(data) {
    let currentNode = this.head

    while (currentNode.data !== data) {
      if (currentNode.next === null) {
        return
      }

      currentNode = currentNode.next
    }

    if (currentNode.prev === null) {
      if (currentNode.next === null) {
        this.head = null
        this.tail = null
        this.length--
        return
      }

      currentNode.next.prev = null
      this.head = currentNode.next
      this.length--
      return
    }

    if (currentNode.next === null) {
      currentNode.prev.next = null
      this.tail = currentNode.prev
      this.length--
      return
    }

    currentNode.next.prev = currentNode.prev
    currentNode.prev.next = currentNode.next
    this.length--
  }


  count() {
    return this.length
  }
}


LinkedList.prototype.Node = class {
  constructor(data) {
    this.data = data
    this.next = null
    this.prev = null
  }
}

