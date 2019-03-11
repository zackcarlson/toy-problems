class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export default class BST {
  constructor() {
    this.root = null;
    this.serialized = '';
  }
  
  insert(value) {
    let newNode = new Node(value);
    
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    
    let current = this.root;

    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  contains(value) {
    if (!this.root) return undefined;
    let current = this.root;
    let found = false;
    if (current.value === value) return true;


    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
        break;
      }
    }

    return found;
  }

  BFS() {
    let queue = [this.root];
    let visited = [];

    while (queue.length) {
      let node = queue.shift();
      visited.push(node.value);
      if (!node.left) visited.push("e");
      if (!node.right) visited.push("e");
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return visited;
  }

  serialize() {
    if (!this.root) return '';
    this.serialized = this.BFS().join(' ');
    return this.serialized;
  }

  deserialize() {
    if (!this.root || this.serialized === '') return this;
    let nodes = this.serialized.split(' ');
// random thing

    const buildTree = function() {
      let val = nodes.shift();
      if (val === 'e') {
        return null;
      } else {
        let node = new Node(Number(val));
        node.left = buildTree();
        node.right = buildTree();
        return node;
      } 
    };
    let nodeList = buildTree();
    let bst = new BST();
    bst.root = nodeList;
    this.serialized = '';
    return bst;
  }
}