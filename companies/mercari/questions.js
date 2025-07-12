function getMaximumMex(arr, x) {
  const set = new Set(arr);

  let mex = 0;

  while (set.has(mex)) {
    mex++;
  }

  const count = new Map();
  for (const num of arr) {
    const mod = num % x;
    if (!count.has(mod)) {
      count.set(mod, 0);
    }
    count.set(mod, count.get(mod) + 1);
  }

  while (count.has(mex % x) && count.get(mex % x) > 0) {
    count.set(mex % x, count.get(mex % x) - 1);
    mex++;
  }

  return mex;
}

function countSentences(wordSet, sentences) {
  // Create a map to store the canonical form of each word and its count
  let wordMap = new Map();

  wordSet.forEach((word) => {
    let sortedWord = word.split("").sort().join("");
    if (!wordMap.has(sortedWord)) {
      wordMap.set(sortedWord, 0);
    }
    wordMap.set(sortedWord, wordMap.get(sortedWord) + 1);
  });

  // Function to get the count of anagrams of a word
  function getAnagramCount(word) {
    let sortedWord = word.split("").sort().join("");
    return wordMap.has(sortedWord) ? wordMap.get(sortedWord) : 0;
  }

  let result = [];

  sentences.forEach((sentence) => {
    let words = sentence.split(" ");
    let count = 1;

    words.forEach((word) => {
      count *= getAnagramCount(word);
    });

    result.push(count);
  });

  return result;
}

// Example usage
const wordSet = ["listen", "silent", "it", "is"];
const sentences = ["listen it is silent"];

console.log(countSentences(wordSet, sentences)); // Output: [4]

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  extractMin() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let element = this.heap[index];
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];
      if (parent <= element) break;
      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;
    const length = this.heap.length;
    const element = this.heap[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild < element) swap = leftChildIndex;
      }
      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightChildIndex;
        }
      }
      if (swap === null) break;
      this.heap[index] = this.heap[swap];
      this.heap[swap] = element;
      index = swap;
    }
  }
}

function minimizeCost(arr) {
  const minHeap = new MinHeap();
  let totalCost = 0;

  // Insert all elements into the min-heap
  for (let num of arr) {
    minHeap.insert(num);
  }

  // Combine elements until one remains
  while (minHeap.heap.length > 1) {
    let firstMin = minHeap.extractMin();
    let secondMin = minHeap.extractMin();
    let cost = firstMin + secondMin;
    totalCost += cost;
    minHeap.insert(cost);
  }

  return totalCost;
}

// Example usage:
console.log(minimizeCost([25, 10, 20])); // Output: 85
console.log(minimizeCost([30, 10, 20])); // Output: 90
console.log(minimizeCost([100, 1])); // Output: 101
