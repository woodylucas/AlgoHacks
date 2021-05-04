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

  bfs(start) {
    const queue = [start];
    const visited = new Set(); // array that all values are unique
    while (queue.length > 0) {
      const airport = queue.shift();
      const destinations = this.adjacencyList.get(airport);
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

const graph = new Graph();
// Create graph
airports.forEach((airport) => graph.addNode(airport));
routes.forEach((route) => graph.addEdge(...route));

console.log(graph.dfs("PHX"));
