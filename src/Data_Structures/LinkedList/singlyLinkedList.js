// Creating a node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  //Pushig the value at the end of the list
  push(value) {
    let newNode = new Node(value);
    // When head is null and tail is null
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    //Adding tail
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // Removing an item from the end of the list
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = this.head;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    // If no item left
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // Removing item at the start
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = this.head.next;
    this.length--;
    // If no item left
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  // Adding item at the start of the list
  unshift(value) {
    let newNode = new Node(value);
    // If the list is empty
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    //  If the list already has items
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // Get the value at the provided index
  get(index) {
    if ((index < 0) || (index > this.length)) return null;
    let count = 0;
    let current = this.head;
    while (index != count) {
      current = current.next
      count++;
    }
    return current;
  }

  // Update the value at the provided index
  set(index, value) {
    let getNode = this.get(index);
    if (getNode) {
      getNode.value = value;
      return true;
    }
    return false;
  }
  // Inserting at the given index
  insert(index, value) {
    let newNode = new Node(value);
    // If length is negative or greater than the length return false
    if ((index < 0) || (index > this.length)) return false;
    if (index === this.length) return !!this.push(value); //index == length use push
    if (index === 0) return !!this.unshift(value); // index == start use unshift
    // To insert at the given index
    let previousNode = this.get(index - 1);
    let temp = previous.next;
    previousNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  // Removing at the given index
  remove(index) {
    // If length is negative or greater than the length return false
    if ((index < 0) || (index > this.length)) return false;
    if (index === this.length - 1) return this.pop(); // //index == length use pop
    if (index === 0) return this.shift(); // index == start use shift
    let previousNode = this.get(index - 1);
    let removedNode = previousNode.next;
    previous.next = removedNode.next;
    return removedNode;
  }
  // Printing the linked list as array
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }

  // Reversing the linked list
  reverse() {
    // Swapping head and tail
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    let previousNode = null; // setting previous node to null
    let nextNode;
    // 100, 200, 500, 400
    while (currentNode) {
      nextNode = currentNode.next; // for keeping what is next in the list 200
      currentNode.next = previousNode; //null
      previousNode = currentNode; // 100
      currentNode = nextNode; // 200
    }
    return this;
  }
}

let list = new SinglyLinkedList();
