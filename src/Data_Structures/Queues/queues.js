class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  };

  // FIFO order
  // Adding at the end of the queue
  enqueue(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    }
    else {
      this.last.next = newNode;
      this.last = newNode
    }
    return ++this.length;

  }
  // Removing at the start of the queue
  dequeue() {
    if (this.length === 0) return null;
    let dequeueNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = dequeueNode.next;
    dequeueNode.next = null;
    this.length--;
    return dequeueNode.value;
  }
}

let queue = new Queue();