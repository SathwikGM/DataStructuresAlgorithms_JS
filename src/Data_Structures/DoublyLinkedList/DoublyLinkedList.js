// Node class
class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // pushing value onto the list
  push(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      newNode.previous = this.tail
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // remving item at the end of the list
  pop() {
    if (this.length === 0) return undefined;
    let popNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    else {
      this.tail = popNode.previous;
      this.tail.next = null;
      popNode.previous = null;
    }
    this.length--;
    return popNode;
  }

  // removing item from starting position
  shift() {
    if (this.length === 0) return undefined;
    let shiftNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    else {
      this.head = shiftNode.next;
      this.head.previous = null;
      shiftNode.next = null;
    }
    this.length--;
    return shiftNode;
  }

  // adding item at starting position
  unshift(value) {
    let newNode = new Node(value)
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      let currentHead = this.head;
      currentHead.previous = newNode;
      newNode.next = currentHead;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // to return the node at an index
  get(index) {
    if ((index < 0) || (index >= this.length)) return null;
    // If index is less than half of the length
    if (index <= this.length / 2) {
      let currentNode = this.head;
      let position = 0;
      while (position != index) {
        currentNode = currentNode.next;
        position++;
      }
      return currentNode;
    }
    // If index is greater than half of length
    else {
      let currentNode = this.tail;
      let position = this.length - 1;
      while (position != index) {
        currentNode = currentNode.previous;
        position--;
      }
      return currentNode;
    }
  }
  // to update the value at an index
  set(index, value) {
    const setNode = this.get(index)
    setNode.value = value;
    return true;
  }
  //  insert a new node
  insert(index, value) {
    let newNode = new Node(value);
    if ((index < 0) || (index > this.length)) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    let previousNode = this.get(index - 1);
    let nextNode = previousNode.next;

    previousNode.next = newNode;
    newNode.previous = previousNode;
    newNode.next = nextNode;
    nextNode.previous = newNode;
    this.length++;
    return true;
  }

  // remove a node  0 1 2 3 4
  remove(index) {
    if ((index < 0) || (index >= this.length)) return undefined;
    if (index === 0) return !!this.shift(value);
    if (index === this.length - 1) return !!this.pop(value);
    let removeNode = this.get(index)
    let previousNode = removeNode.previous;
    let nextNode = removeNode.next;
    previousNode.next = nextNode;
    nextNode.previous = previousNode;
    removeNode.next = null;
    removeNode.previous = null;
    this.length--;
    return true;
  }

  // printing the list
  print() {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
      let currentNode = this.get(i);
      arr.push(currentNode.value)
    }
    console.log(arr)
  }

}
const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);