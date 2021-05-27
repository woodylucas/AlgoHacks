// Dikstra Alogirthm for non negative cycles, Bellman Ford for negative cylces, and Floyd Warshall
/*

inputs: start, ending vertices

Create an object called distances vertices, and value will be infinity, starting vertex will be zero

After setting a value in the distances object, add each vertex with priority of Infinity to priority queue 
Except Starting vertex, which should have priority of 0 because that's where we begin 

Create another object called previous and set each key to be every vertex in adjacency list 

Start looping as long as there is anything in the priority queue

dequeue a vertex from the priority queue 
if the vertex is same as the ending vertex we are done
otherwise each value in the adjacency list

 
 */

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(vertex, distance) {
    this.values.push({ vertex, distance });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.distance - b.distance);
  }
}

function dijkstra(start, edges) {
  // new priority queue
  const adjacencyList = new Map(); 
  for (const [])
  const nodes = new PriorityQueue();
  const distances = {};
  const previous = {};
  
  // build up initial state

}
