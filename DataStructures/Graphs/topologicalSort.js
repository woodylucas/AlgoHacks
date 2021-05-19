// Solved with Kahn's Algorithm
function topologicalSort(vertices, edges) {
  const indegree = new Array(vertices).fill(0);
  const adjList = new Map();
  for (const edge of edges) {
    const [u, v] = edge;
    if (adjList.has(u)) {
      adjList.get(u).push(v);
    } else {
      adjList.set(u, [v]);
    }
    indegree[v]++;
  }

  const queue = [];
  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  const order = [];
  while (queue.length > 0) {
    const vertex = queue.shift();
    if (adjList.has(vertex)) {
      for (const neighbor of adjList.get(vertex)) {
        indegree[neighbor]--;
        if (indegree[neighbor] === 0) queue.push(neighbor);
      }
    }
    order.push(vertex);
  }

  return order;
}

function courseSchedule(numCourses, prerequisites) {
  const adjList = new Map();
  const indegree = new Array(numCourses).fill(0);

  for (const [edge, vertex] of prerequisites) {
    if (adjList.has(vertex)) {
      adjList.get(vertex).push(edge);
    } else {
      adjList.set(vertex, [edge]);
    }
    // Build indegree
    indegree[edge]++;
  }
  const queue = [];
  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) queue.push(i);
  }
  let count = 0;
  while (queue.length > 0) {
    const vertex = queue.shift();
    if (adjList.has(vertex)) {
      for (const neighbor of adjList.get(vertex)) {
        indegree[neighbor]--;
        if (indegree[neighbor] === 0) queue.push(neighbor);
      }
    }
    count++;
  }
  return numCourses === count;
}

function courseScheduleII(numCourses, prerequisites) {
  const adjList = new Map();
  const indegree = new Array(numCourses).fill(0);
  for (const prereq of prerequisites) {
    // Build representation of graph adjacencyList
    const [edge, vertex] = prereq;
    if (adjList.has(vertex)) {
      adjList.get(vertex).push(edge);
    } else {
      adjList.set(vertex, [edge]);
    }
    // Build indegree
    indegree[edge]++;
  }

  const queue = [];
  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  // Kahn's algorithm:
  const order = [];
  while (queue.length > 0) {
    const vertex = queue.shift();
    if (adjList.has(vertex)) {
      for (const neighbor of adjList.get(vertex)) {
        indegree[neighbor]--;
        if (indegree[neighbor] === 0) queue.push(neighbor);
      }
    }
    order.push(vertex);
  }

  return numCourses === order.length ? order : [];
}
