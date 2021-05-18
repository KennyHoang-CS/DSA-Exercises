/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    
    // create a new node.
    let newNode = new Node(val);

    if(this.isEmpty()) {    // if queue is empty. 
      this.first = newNode; 
      this.last = newNode; 
      ++this.size;  // increment queue size, since we added item. 
      return; 
    } 

    if (this.size === 1) {  // one item in queue.  
      this.last = newNode;
      newNode.next = this.first; 
      ++this.size;  // increment queue size, since we added item. 
      return; 
    }

    // more than one item in queue. [front -> item] [item <-- back] newItem
    newNode.next = this.last; 
    this.last = newNode; 
    ++this.size;  // increment queue size, since we added item. 

    return; 
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {

    // no items in queue.
    if (this.isEmpty) {
      throw new Error('Queue is empty.');
    }

    let val = this.first.val;

    // one item in queue: 👱
    if (this.size === 1) {
      this.first = null;
      this.last = null; 
      return val; 
    }

    // two items in queue: F👱 👱L
    if (this.size === 2) {
      this.first = this.last;
      return val; 
    }

    // more than 2 items in queue: F👱 👱 👱L
    this.first = this.first.next; 
    return val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;
