/**
 * Create a stack.Then create a queue using two stacks.
 */

// function Stack() {

// }

function Stack() {
  this.count = 0;
  this.storage = {};
}

// Adds a value onto the end of the stack
Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

// Removes and returns the value at the end of the stack
Stack.prototype.pop = function() {
  // Check to see if the stack is empty
  if (this.count === 0) {
    return undefined;
  }

  this.count--;
  var result = this.storage[this.count];
  delete this.storage[this.count];
  return result;
};

// Returns the length of the stack
Stack.prototype.size = function() {
  return this.count;
};

/**
 * Queue Class
 */

function Queue() {
  this.storage = {};
  this.count = 0;
  this.lowestCount = 0;
}

// Adds a value to the end of the chain
Queue.prototype.enqueue = function(value) {
  // Check to see if value is defined
  if (value) {
    this.storage[this.count] = value;
    this.count++;
  }
};

// Removes a value from the beginning of the chain
Queue.prototype.dequeue = function() {
  // Check to see if queue is empty
  if (this.count - this.lowestCount === 0) {
    return undefined;
  }

  var result = this.storage[this.lowestCount];
  delete this.storage[this.lowestCount];
  this.lowestCount++;
  return result;
};

// Returns the length of the queue
Queue.prototype.size = function() {
  return this.count - this.lowestCount;
};

const myStack = new Stack();
myStack.push(-999);
console.log(myStack);
const myQueue = new Queue();
myQueue.enqueue(myStack);
myQueue.enqueue(myStack);
console.log(myQueue);

module.exports = { Stack: Stack, Queue: Queue };
