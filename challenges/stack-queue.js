/**
 * Create a stack.Then create a queue using two stacks.
 */


// function Stack0() {
//   // closure properties
//   const storage = {};
//   const length = 0;
//   // functionality returned with object
//   return {
//     push: function(val) {
//       if (val !== undefined)
//         storage[length++] = val;
//       return length;
//     },
//     pop: function() {
//       if (length > 0) {
//         let temp = storage[--length];
//         delete storage[length];
//         return temp;
//       }
//     }
//   }
// }

function Stack() {
  this.storage = {};
  this.length = 0;
}

Stack.prototype.push = function(val) {
  if (val !== undefined)
    this.storage[this.length++] = val;
  return this.length;
}

Stack.prototype.pop = function() {
  if (this.length > 0) {
    let temp = this.storage[--this.length];
    delete this.storage[this.length];
    return temp;
  }
}


/**
* Queue Class
*/


function Queue() {
  this.mainStorage = new Stack();
  this.transitStorage = new Stack();
}

Queue.prototype.enqueue = function(val) {
  if (val !== undefined)
    this.mainStorage.push(val);
  return this.mainStorage.length;
}

Queue.prototype.dequeue = function() {
  while (this.mainStorage.length > 0) {
    this.transitStorage.push(this.mainStorage.pop());
  }
  if (this.transitStorage.length > 0) {
    let temp = this.transitStorage.pop();
    while (this.transitStorage.length > 0) {
      this.mainStorage.push(this.transitStorage.pop());
    }
    return temp;
  }
  return -1;
}

// const myQueue = new Queue();
// console.log(myQueue);
// console.log(myQueue.enqueue(1));
// console.log(myQueue.enqueue(2));
// console.log(myQueue.enqueue(3));
// console.log(myQueue.enqueue(4));
// console.log(myQueue);
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
// console.log(myQueue);

module.exports = {Stack: Stack, Queue: Queue};
