/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {

    // check if root exists. 
    if (!this.root) return 0;

    function minDepthLeftHelper(node) {
      // is leaf node?
      if (node.left === null && node.right === null) return 1;
      if (node.left !== null) return minDepthLeftHelper(node.left) + 1; 
    }

    function minDepthRightHelper(node) {
      // is leaf node?
      if (node.left === null && node.right === null) return 1;
      if (node.right !== null) return minDepthLeftHelper(node.right) + 1; 
    }

    let leftNodes = minDepthLeftHelper(this.root);
    let rightNodes = minDepthRightHelper(this.root);

    return Math.min(leftNodes, rightNodes);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    // check if root exists. 
    if (!this.root) return 0;

    function minDepthLeftHelper(node) {
      // is leaf node?
      if (node.left === null && node.right === null) return 1;
      if (node.left !== null) return minDepthLeftHelper(node.left) + 1; 
    }

    function minDepthRightHelper(node) {
      // is leaf node?
      if (node.left === null && node.right === null) return 1;
      if (node.right !== null) return minDepthLeftHelper(node.right) + 1; 
    }

    let leftNodes = minDepthLeftHelper(this.root);
    let rightNodes = minDepthRightHelper(this.root);

    return Math.max(leftNodes, rightNodes);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let pathResult = 0; 
  
    function maxSumHelper(node) {
      if (node === null) return 0; 

      // calculate the left sub-tree at the current node.
      let leftSum = maxSumHelper(node.left);
      // calculate the right sub-tree at the current node. 
      let rightSum = maxSumHelper(node.right);
      // update path. 
      pathResult = Math.max(pathResult, node.val + leftSum + rightSum);

      // return the greatest sub-path from left/right.
      return Math.max(0, node.val + leftSum, node.val + rightSum);
    }
    maxSumHelper(this.root);

    return pathResult;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    
    // check for empty tree.
    if (!this.root) return null;
    
    let closestNumber = null; 
    if (this.root.val > lowerBound) closestNumber = this.root.val; 

    function nextLargerHelper(node) {
      
      // is leaf node? 
      if (node === null) return; 

      // check for winning condition.
      if ((node.val < closestNumber) && (node.val > lowerBound)) {
        closestNumber = node.val; 
      }
      if (node.left !== null) {
        nextLargerHelper(node.left);
      }
      if (node.right !== null) {
        nextLargerHelper(node.right);
      }
    }
    nextLargerHelper(this.root);

    return closestNumber;
  }









  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
