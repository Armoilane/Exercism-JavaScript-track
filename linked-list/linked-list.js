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
  }


  push(data) {
    let node = new Node(data)

    if (this.head === null) {
      this.head = node
      this.tail = node
      return
    }

    node.setPrev(this.tail)
    this.tail.setNext(node)
    this.tail = node
  }


  pop() {
    let currentTail = this.tail

    if (this.head === currentTail) {
      this.head = null
      this.tail = null
      return currentTail.data
    }

    this.tail = currentTail.prev
    return currentTail.data
  }


  shift() {
    let currentHead = this.head
    this.head = currentHead.next
    return currentHead.data
  }


  unshift(data) {
    let node = new Node(data)

    if (this.head === null) {
      this.head = node
      this.tail = node
    }

    let currentHead = this.head

    currentHead.setPrev(node)
    node.setNext(currentHead)
    this.head = node
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
        return
      }

      currentNode.next.setPrev(null)
      this.head = currentNode.next
      return
    }

    if (currentNode.next === null) {
      currentNode.prev.setNext(null)
      this.tail = currentNode.prev
      return
    }

    currentNode.next.setPrev(currentNode.prev)
    currentNode.prev.setNext(currentNode.next)
  }


  count() {
    let node = this.head
    let count = 0

    while (node != null) {
      count++
      node = node.next
    }

    return count
  }
}


class Node {
  constructor(data) {
    this.data = data
    this.next = null
    this.prev = null
  }

  setNext(node) {
    this.next = node
  }

  setPrev(node) {
    this.prev = node
  }
}

