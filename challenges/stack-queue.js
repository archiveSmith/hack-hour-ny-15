/* eslint-disable max-classes-per-file */
/**
 * Create a stack.Then create a queue using two stacks.
 */
class Stack {
  constructor(value) {
    // needs a push and pop method
    this.items = [];
  }

  length() {
    return this.items.length;
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.items) { return this.items.pop(); }
    return 'Need to insert at least one item to remove it';
  }
}

/**
* Queue Class
*/
class Queue {
  constructor(value) {
    // needs enqueue (one stack) and dequeue (another stack) methods
    this.enqueueItems = new Stack();
    this.dequeueItems = new Stack();
  }

  enqueue(item) {
    this.insert.push(item);
  }

  dequeue(item) {
    let poppedItem;
    if (this.dequeueItems.length === 0) {
      if (this.enqueueItems === 0) { return 'Need to have an item inside of the enqueue stack to dequeue'; }
      while (this.enqueueItems.length > 0) {
        poppedItem = this.enqueueItems.pop();
        this.dequeueItems.push(poppedItem);
      }
    }
    return this.dequeueItems.pop();
  }
}

const some = new Stack();
some.push(2);
console.log(some);
console.log();
module.exports = { Stack, Queue };
