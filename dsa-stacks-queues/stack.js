/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    
    // create the new node.
    let newNode = new Node(val);

    // stack is empty 
    if (this.isEmpty()) {
      this.top = newNode; 
    } else { // 'new 📗' Top📗  
      newNode.prev = this.top;
      this.top.next = newNode;
      this.top = newNode;
    }
    ++this.size;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    
    // stack empty?
    if (this.isEmpty()) {
      throw new Error("Stack is empty.");
    } else if (this.size === 1) {  // one item in stack: 📗 
      this.top.next = null;
      this.top.prev = null;
      --this.size;
      return this.top.val; 
    }

    // more than one items in stack: T📗 📗 ... 📗 
    let val = this.top.val; 
    let trailingTop = this.top.prev; 
    this.top.prev = null; 
    this.top = trailingTop;
    this.top.next = null; 
    --this.size;
    
    return val; 
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.top.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0; 
  }
}

module.exports = Stack;
