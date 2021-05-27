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
    this.heap = [];
  }

  peek() {
    return this.heap[0];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  insert() {}

  enqueue(destination, distance) {
    const vertex = new Node(destination, distance);
    this.heap.push(vertex);
    this.siftUp(this.heap.length - 1, this.heap);
  }

  siftUp(idx, heap) {
    const child = heap[idx];
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = heap[parentIdx];
      if (child.distance >= parent.distance) break;
      this.swap(idx, parentIdx, heap);
      idx = parentIdx;
    }
  }

  dequeue() {
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.siftDown(0, this.heap.length - 1, this.heap);
    }
    return min;
  }

  siftDown(idx, endIdx, heap) {
    let leftChildIdx = 2 * idx + 1;
    while (leftChildIdx <= endIdx) {
      const rightChildIdx = 2 * idx + 2 <= endIdx ? 2 * idx + 2 : -1;
      let idxToSwap;
      if (
        rightChildIdx !== -1 &&
        heap[rightChildIdx].distance < heap[leftChildIdx].distance
      ) {
        idxToSwap = rightChildIdx;
      } else {
        idxToSwap = leftChildIdx;
      }
      if (heap[idxToSwap].distance < heap[idx].distance) {
        this.swap(idx, idxToSwap, heap);
        idx = idxToSwap;
        leftChildIdx = 2 * idx + 2;
      } else {
        return;
      }
    }
  }
  swap(idx1, idx2, heap) {
    [heap[idx1], heap[idx2]] = [heap[idx2], heap[idx1]];
  }
}

class Node {
  constructor(destination, distance) {
    this.destination = destination;
    this.distance = distance;
  }
}
