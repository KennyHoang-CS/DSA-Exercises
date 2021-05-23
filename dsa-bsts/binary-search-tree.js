class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    // create a new node.
    let newNode = new Node(val);

    // tree empty? 
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root; 
    // find the new node placement!
    while(true) {
      // look left
      if (val < current.val) {
        // open space? 
        if (current.left === null) {
          current.left = newNode;
          return this; 
        }
        else {  
          current = current.left; 
        }
      } 
      else if (val > current.val) {
      // open space? 
        if (current.right === null) {
          current.right = newNode;
          return this; 
        }
        else {
          current = current.right; 
        }
      } 
      
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    // create a new node.
    let newNode = new Node(val);

    // tree empty? 
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    // find the new node placement!
    function irHelper(current) {

      if (val < current.val) {  // look left
        // open space? 
        if (current.left === null) {
          current.left = newNode;
          return this; 
        } 
        return irHelper(current.left); 
      } 
      else if (val > current.val) { // look right
        // open space? 
        if (current.right === null) {
          current.right = newNode;
          return this; 
        }
        return irHelper(current.right);
      } 
    }
    irHelper(this.root);
    
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    // tree empty?
    if (!this.root) return; 

    let current = this.root; 
    while (true) {
      // didn't find it?
      if (current === null) return; 
      // did we find it?
      if (current.val === val) {
        return current;
      } 
      if (current.val < val) {
        current = current.right;
      } else if (current.val > val) {
        current = current.left; 
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    // tree empty? 
    if (!this.root) return;

    // look for the val!
    function findRecursHelper(node) {
      if (node === null) return; 
      if (node.val === val) return node; 
      if (node.val > val) return findRecursHelper(node.left);
      if (node.val < val) return findRecursHelper(node.right);    
    }
    return findRecursHelper(this.root);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let currentNode = this.root; 
    let visitedNodes = [] 

    function helper(node) {
      if (!node) return; 
      visitedNodes.push(node.val);
      helper(node.left);
      helper(node.right);
    } 
    helper(currentNode);

    return visitedNodes; 
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let currentNode = this.root; 
    let visitedNodes = [] 

    function helper(node) {
      if (!node) return; 
      helper(node.left);
      visitedNodes.push(node.val);
      helper(node.right);
    } 
    helper(currentNode);

    return visitedNodes; 
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let currentNode = this.root; 
    let visitedNodes = [] 

    function helper(node) {
      if (!node) return; 
      helper(node.left);
      helper(node.right);
      visitedNodes.push(node.val);
    } 
    helper(currentNode);

    return visitedNodes; 
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let queue = [];
    let visitedNodes = []; 
    let currentNode = this.root;
    queue.push(this.root);

    while (queue.length) {
      currentNode = queue.shift(); 
      visitedNodes.push(currentNode.val);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    return visitedNodes;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
