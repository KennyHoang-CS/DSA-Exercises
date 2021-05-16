/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    
    // create a new node.
    let newNode = new Node(val);

    // check if list is empty, head and tail will point at first node. 
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head; 
    } else { // there exists more than one node. 
      this.tail.next = newNode;
      this.tail = newNode;
    }

    // increment the list length, since we added a node.
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {

    // create a new node.
    let newNode = new Node(val);

    // if list is empty. 
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode; 
    } else {
      newNode.next = this.head;
      this.head = newNode; 
    }

    ++this.length;
  }

  /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length - 1);
  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0);
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    return this._get(idx).val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    this._set(idx, val);
  }

  /** _set(idx, val): set node val at specified idx. */
  
  _set(idx, val) {
    let count = 0;  
    let currNode = this.head;
    while (count != idx && currNode !== null) {
      ++count;
      currNode = currNode.next;
    }
    currNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    
    // check if index is valid.
    if (idx < 0 || idx > this.length) {
      throw new Error("Invalid Index.");
    }
    
    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);
    
    // create new node.
    let newNode = new Node(val);
    let prevNode = this._get(idx - 1);
    newNode.next = prevNode.next; 
    prevNode.next = newNode;

    ++this.length;    // increment the list by 1.
    
  }

  /** _get(idx): get node at specified idx. */
  
  _get(idx) {
    let count = 0;  
    let currNode = this.head;
    while (count != idx && currNode !== null) {
      ++count;
      currNode = currNode.next;
    }
    return currNode;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    // check if index is valid.
    if (idx < 0 || idx >= this.length) {
      throw new Error("Invalid Index");
    }

    // special case: remove at beginning. 
    if (idx === 0) {
      let val = this.head.val; 
      this.head = this.head.next; 
      if (this.length < 2) {  // if only one item left; 
        this.tail = this.head;
      }
      --this.length;
      return val;
    }

    let prevNode = this._get(idx - 1);

    // special case: remove at end. 
    if (idx === this.length - 1) {
      let val = prevNode.next.val;
      prevNode.next = null; 
      this.tail = prevNode;
      --this.length;  // decrement the list by 1. 
      return val; 
    }

    // special case: remove at middle. 
    let val = prevNode.next.val;
    prevNode.next = prevNode.next.next; 
    --this.length;
    return val; 
  }

  /** average(): return an average of all values in the list */

  average() {
    
    // check if list is empty 
    if (this.length === 0) return 0;
    
    let currNode = this.head;
    let total = 0;
    while (currNode !== null) {
      total += currNode.val;
      currNode = currNode.next;
    }

    return total / this.length;
  }
}

module.exports = LinkedList;
