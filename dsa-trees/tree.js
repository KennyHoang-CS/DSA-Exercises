/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    
    // if there is no root. 
    if (!this.root) return 0; 

    let total = this.root.val; 

    function sumHelper(node) {

      for (let child of node.children) {
        
        // if child exists, add its value to total accumulator. 
        if (child) {
          total += child.val;
        }
        // if child has children.  
        if (child.children.length > 0) {
          sumHelper(child);
        }
      }
    }
    sumHelper(this.root); 

    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    
    // check if root is empty.
    if (!this.root) return 0;
    let count = 0; 
    if (this.root.val % 2 === 0) count += 1;

    // traverse the tree. 
    function evenHelper(node) {
      for (let child of node.children) {
        if (child.val % 2 === 0) count += 1;
        // if child has any children 
        if (child.children.length > 0) {
          evenHelper(child);
        }
      }
    }
    evenHelper(this.root);

    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {

    // check if root node exists.
    if (!this.root) return 0;  
    let count = 0;
    if (this.root.val > lowerBound) ++count; 

    // traverse the tree. 
    function numGreaterHelper(node) {
      for (let child of node.children) {
        if (child.val > lowerBound) ++count; 
        // if child has any children (child nodes of 'child').
        if (child.children.length > 0) {
          numGreaterHelper(child);
        }
      }
    }
    numGreaterHelper(this.root);

    return count;
  }
}

module.exports = { Tree, TreeNode };


/*
let htmlEl = new Node("html", [
  new Node("head", [new Node("title")]),
  new Node("body", [new Node("ul"), [new Node('li'), new Node('li2')]])
])
*/