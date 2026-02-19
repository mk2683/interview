class StackUsingSingleQueue {
  constructor() {
    this.queue = [];
  }

  // Push element x onto stack
  push(x) {
    const size = this.queue.length;
    this.queue.push(x);
    // Rotate the queue to make the last added element to be at the front
    for (let i = 0; i < size; i++) {
      this.queue.push(this.queue.shift());
    }
  }

  // Removes the element on top of the stack and returns that element
  pop() {
    if (this.queue.length === 0) {
      throw new Error("Stack is empty");
    }
    return this.queue.shift();
  }

  // Get the top element
  top() {
    if (this.queue.length === 0) {
      throw new Error("Stack is empty");
    }
    return this.queue[0];
  }

  // Returns whether the stack is empty
  empty() {
    return this.queue.length === 0;
  }
}

// Example usage:
const stack = new StackUsingSingleQueue();
stack.push(1);
stack.push(2);
console.log(stack.top()); // returns 2
console.log(stack.pop()); // returns 2
console.log(stack.empty()); // returns false
console.log(stack.pop()); // returns 1
console.log(stack.empty()); // returns true
