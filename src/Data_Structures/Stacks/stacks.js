class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // LIFO order
  // adding at beginning of stack
  push(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    }
    else {
      let currentNode = this.first;
      this.first = newNode;
      this.first.next = currentNode;
    }
    return this.length++;
  }
  //  removing at begining of stack
  pop() {
    if (this.length === 0) return null;
    let removenode = this.first
    if (this.length === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return removenode.value;
  }
}

let stack = new Stack();