class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    const parentIdx = Math.floor((array.length - 2) / 2);
    for (let idx = parentIdx; idx >= 0; idx--) {
      this.sinkDown(idx, array.length - 1, array);
    }
    return array;
  }

  peek() {
    return this.heap[0];
  }

  sinkDown(idx, endIdx, heap) {
    let leftChildIdx = 2 * idx + 1;
    while (leftChildIdx <= endIdx) {
      const rightChildIdx = 2 * idx + 2 <= endIdx ? 2 * idx + 2 : -1;
      let idxToSwap;
      if (rightChildIdx !== -1 && heap[rightChildIdx] < heap[leftChildIdx]) {
        idxToSwap = rightChildIdx;
      } else {
        idxToSwap = leftChildIdx;
      }
      if (heap[idxToSwap] < heap[idx]) {
        this.swap(idx, idxToSwap, heap);
        idx = idxToSwap;
        leftChildIdx = 2 * idx + 1;
      } else {
        return;
      }
    }
  }

  bubbleUp(idx, heap) {
    const child = heap[idx];
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = heap[parentIdx];
      if (child >= parent) break;
      this.swap(idx, parentIdx, heap);
      idx = parentIdx;
    }
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1, this.heap);
  }

  remove() {
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.sinkDown(0, this.heap.length - 1, this.heap);
    }
    return min;
  }

  swap(idx1, idx2, heap) {
    [heap[idx1], heap[idx2]] = [heap[idx2], heap[idx1]];
  }
}
const array = [48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41];
const heap = new MinHeap(array);
// console.log(heap);

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
