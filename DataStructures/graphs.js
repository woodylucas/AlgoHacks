/*
*Trees are a special unique kind of graph, but they can only have one root, and one unique path between two nodes

*Graph can go beyond that, and have any number of root elements and multple paths between nodes
** non linear data structure that contains nodes, and edges
*** edge connection is a connection between two nodes 

** Example Instagram 
* A user is a node, everytime you follow a user you build an EDGE connnecting two nodes together
* A follow can be a Directed Graph 
* --- > *
** Example 
* Edges are friendships 
Unidirected Graph 
* <--> *

Graphs can also be weighted, meaning the node has additional data about the relationship 

edges have meanings 

* Node might also point to itself* 
** Example, an airplane that takes off and lands at the same airport 


** Ways to represent a graph a 2D Array, or Adjacency Matrix 

*** 2 Rows have and edge or connection add a 1 at a point they intersect

** Adjacency List 

 */

// Vertex List & Edge List

const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");
const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }
  addNode(airport) {
    this.adjacencyList.set(airport, []);
  }
  // Add edge unidirected
  addEdge(origin, destination) {
    this.adjacencyList.get(origin).push(destination);
    this.adjacencyList.get(destination).push(origin);
  }
  /*
BFS:  Template
function BFS
   Initialize an empty queue, empty 'result' array & a 'visited' map
   Add the starting vertex to the queue & visited map --> hash set 
   While Queue is not empty:
     - Dequeue and store current vertex
     - Push current vertex to result array
     - Iterate through current vertex's adjacency list:
       - For each adjacent vertex, if vertex is unvisited:
         - Add vertex to visited map
         - Enqueue vertex
   Return result array
   */

  bfs(start) {
    const queue = [start];
    const visited = new Set(); // array that all values are unique
    while (queue.length > 0) {
      const airport = queue.shift(); // Dequeue
      const destinations = this.adjacencyList.get(airport); // Push current vertex in adjacencyList
      for (const destination of destinations) {
        if (destination === "BKK") {
          console.log("Found it");
        }
        if (!visited.has(destination)) {
          visited.add(destination);
          // Item will only be enqueued, if it has not been vistited already
          queue.push(destination);
          console.log(destination);
        }
      }
    }
  }

  dfs(start, visited = new Set()) {
    console.log(start);
    visited.add(start);

    const destinations = this.adjacencyList.get(start);

    for (const destination of destinations) {
      if (destination === "BKK") {
        console.log("DFS found Bangkok in steps");
        return;
      }
      if (!visited.has(destination)) {
        this.dfs(destination, visited);
      }
    }
  }
}

// const graph = new Graph();
// // Create graph
// airports.forEach((airport) => graph.addNode(airport));
// routes.forEach((route) => graph.addEdge(...route));

// console.log(graph.dfs("PHX"));

// Union Find

function findCircleNum(isConnected) {
  const visited = new Set();
  let provinces = 0;

  for (let row = 0; row < isConnected.length; row++) {
    if (!visited.has(row)) {
      dfs(row, isConnected, visited);
      provinces++;
    }
  }

  return provinces;
}

function dfs(row, isConnected, visited) {
  for (let col = 0; col < isConnected.length; col++) {
    if (isConnected[row][col] === 1 && !visited.has(col)) {
      visited.add(col);
      dfs(col, isConnected, visited);
    }
  }
}

// adjacency matrix as a graph

function riverSizes(matrix) {
  if (!matrix || matrix.length === 0) return [];
  const size = [];
  let m = matrix.length,
    n = matrix[0].length;

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (matrix[row][col] === 1) {
        const riverLength = dfs(matrix, row, col, m, n);
        size.push(riverLength);
      }
    }
  }
  return size;
}

function dfs(matrix, row, col, m, n) {
  if (row < 0 || row >= m || col < 0 || col >= n || matrix[row][col] === 0)
    return 0;
  matrix[row][col] = 0;
  return (
    // Down
    dfs(matrix, row + 1, col, m, n) +
    // Up
    dfs(matrix, row - 1, col, m, n) +
    // Right
    dfs(matrix, row, col + 1, m, n) +
    // Left
    dfs(matrix, row, col - 1, m, n) +
    1
  );
}

function riverSizes2(matrix) {
  const sizes = [];
  if (matrix.length === 0) return size;
  let m = matrix.length,
    n = matrix[0].length;
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (matrix[row][col] === 1) {
        const riverLength = bfs(matrix, row, col, m, n);
        sizes.push(riverLength);
      }
    }
  }
  return sizes;
}

function bfs(matrix, row, col, m, n) {
  const queue = [row * n + col]; // Turn a 2D matrix into a 1D Matrix
  matrix[row][col] = 0;
  let size = 0;
  while (queue.length > 0) {
    const idx = queue.pop();
    let r = Math.floor(idx / n); // convert a 1D back to 2D this is the formula for row
    let c = idx % n; // convert a 1D back to 2D this is a formula for col
    // Down, Up, Right, Left
    const directions = [
      [1, 0],
      [-1, 0],
      [0, -1],
      [0, 1],
    ];
    size++; // Increment our size within the while loop
    for (const direction of directions) {
      let [x, y] = direction;
      x = x + r;
      y = y + c;
      if (x >= 0 && x < m && y >= 0 && y < n && matrix[x][y] === 1) {
        matrix[x][y] = 0;
        queue.push(x * n + y);
      }
    }
  }
  return size;
}

// Number of Islands

function numOfIslands(grid) {
  // We need to first validate our input
  if (grid.length === 0) return 0;
  let islandCount = 0;
  // Dimension
  let m = grid.length,
    n = grid[0].length;

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row][col] === "1") {
        islandCount++;
        bfs(grid, row, col, m, n);
      }
    }
  }

  return islandCount;
}

function bfs(matrix, row, col, m, n) {
  const queue = [row * n + col]; // Formula to convert a 2D to a 1D
  matrix[row][col] = "0";
  while (queue.length > 0) {
    const idx = queue.pop();
    let r = Math.floor(idx / n); // Formula to convert back to a 2D: row
    let c = idx % n; // Formula to convert back to a 2D: col
    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ]; // Directions: Left, Right, Down, Up
    for (const direction of directions) {
      let [x, y] = direction;
      x = x + r; // Convert back to row
      y = y + c; // Convert back to column
      if (x >= 0 && x < m && y < n && y >= 0 && matrix[x][y] === "1") {
        matrix[x][y] = "0";
        queue.push(x * n + y);
      }
    }
  }
}
