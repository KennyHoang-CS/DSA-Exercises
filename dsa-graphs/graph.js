class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (let node of vertexArray) {
      this.nodes.add(node);
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    for (let node of this.nodes) {
      if (node.adjacent.has(vertex)) {
        node.adjacent.delete(vertex); 
      }
    }
    this.nodes.delete(vertex);
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(node) {
    /* RECURSIVE APPROACH
    let result = []; 
    let visitedNodes = new Set()

    function dfsHelper(node) {
      if (!node) return null; // base case 

      // visit node. 
      result.push(node.value);
      visitedNodes.add(node); 

      // visit node's neighbors.
      node.adjacent.forEach(neighbor => {
        if (!visitedNodes.has(neighbor)) {
          return dfsHelper(neighbor);
        }
      });
    }
    dfsHelper(node); 

    return result; 
    */

    // ITERATIVE APPROACH
    let result = [];
    let visitedNodes = new Set(); 
    let stack = [node];
    let currentNode; 

    visitedNodes.add(node);

    while (stack.length) {
      // visit node.
      currentNode = stack.pop(); 
      result.push(currentNode.value);
      visitedNodes.add(currentNode); 

      // visit node's neighbors.
      currentNode.adjacent.forEach(neighbor => {
        if (!visitedNodes.has(neighbor)) {
          visitedNodes.add(neighbor);
          stack.push(neighbor);
        }
      })
    }

    return result; 
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let result = [];  // to hold our results
    let queue = [start];  // to hold future nodes to visit. 
    let seen = new Set();   // to keep track of nodes visited. 
    seen.add(start); 
    let currentNode;  

    while (queue.length) {
      // visit node.
      currentNode = queue.shift(); // get first node from the queue. 
      result.push(currentNode.value); 

      // visit node's neighbors. 
      currentNode.adjacent.forEach(neighbor => {
        if (!seen.has(neighbor)) {
          seen.add(neighbor);
          queue.push(neighbor);
        }
      });
    }

    return result; 
  }
}

module.exports = {Graph, Node}