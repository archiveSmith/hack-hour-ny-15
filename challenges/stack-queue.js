/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
// first in last out
 this.storage = {};
 this.length = 0,
};

Stack.prototype.push = function(value){
  this.storage[this.index] = value;
  return this.index += 1;
};

Stack.prototype.pop = function(){
  const popped = this.storage[this.index - 1];
  delete this.storage[this.index - 1];
  this.index -= 1;
  return popped;
};


/**
* Queue Class
*/


function Queue(value) {
  // needs enqueue (one stack) and dequeue (another stack) methods
  this.enqueueItems = new Stack();
  this.dequeueItems = new Stack();
}
​
Queue.prototype.enqueue = function(item) { 
  this.insert.push(item);
}
​
Queue.prototype.dequeue = function(item) {
  let poppedItem;
  if (this.dequeueItems.length === 0) {
    if (this.enqueueItems === 0) return 'Need to have an item inside of the enqueue stack to dequeue'
    
    while (this.enqueueItems.length > 0) {
      poppedItem = this.enqueueItems.pop();
      this.dequeueItems.push(poppedItem);
    }
  }
  return this.dequeueItems.pop();
}

module.exports = {Stack: Stack, Queue: Queue};
