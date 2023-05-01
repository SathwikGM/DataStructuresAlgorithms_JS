class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // insert a new node
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    else {
      let currentNode = this.root;
      if (currentNode.value === value) return undefined;
      while (true) {
        if (value > currentNode.value) {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            return this;
          }
          else {
            currentNode = currentNode.right;
          }
        }
        else if (value < currentNode.value) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            return this;
          }
          else {
            currentNode = currentNode.left;
          }
        }
      }
    }

  }
  //  searching node
  search(value) {
    if (this.root === null) return false;
    let currentNode = this.root;
    let found = false;
    while (!found && currentNode) {
      if (value > currentNode.value) {
        currentNode = currentNode.right;
      }
      else if (value < currentNode.value) {
        currentNode = currentNode.left;
      }
      else {

        return currentNode;
      }
    }
    return false;
  }
}

let bst = new BinarySearchTree();
bst.insert(20);
bst.insert(30);
bst.insert(10);
bst.insert(15);
bst.insert(40);
bst.insert(5);
bst.insert(80);
bst.insert(20);