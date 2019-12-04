/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
  this.contents = {};
  this.length = 0;
}

Stack.prototype.push = function(element) {
  this.contents[this.length] = element;
  this.length += 1;
  return this.length;
};

Stack.prototype.pop = function() {
  if (this.length === 0) {
    return undefined;
  }
  const popped = this.contents[this.length - 1];
  delete this.contents[this.length - 1];
  this.length -= 1;
  return popped;
}

/**
* Queue Class
*/

function Queue() {
  const stack1 = new Stack;
  const stack2 = new Stack;
  stack2.reverseContents = reverseContents(stack2.contents);
  Object.keys(stack2.reverseContents).forEach((key) => {
    stack1.push(stack2[key]);
  })
  this.contents = stack1.contents;
  this.length = stack1.length;
}

Queue.prototype.enqueue = function(element) {
  this.contents[this.length] = element;
  this.length += 1;
  return this.length;
}

Queue.prototype.dequeue = function() {
  if (this.length === 0) {
    return undefined;
  }
  const dequeued = this.contents[0];
  for (let i = 0; i < this.length - 1; i += 1) {
    this.contents[i] = this.contents[i + 1];
  }
  delete this.contents[this.length - 1];
  this.length -= 1;
  return dequeued;
}

function reverseContents(contentsObj) {
  const keyArr = Object.keys(contentsObj);
  const reverseKeyArr = keyArr.slice();
  reverseKeyArr.reverse();
  const reverseContentsObj = {};
  for (let i = 0; i < reverseKeyArr.length; i += 1) {
    reverseContentsObj[reverseKeyArr[i]] = contentsObj[i];
  }
  return reverseContentsObj;
}

// const west = new Queue;
// console.log(west);
// console.log(west.enqueue('arizona'));
// console.log(west);
// console.log(west.enqueue('los angeles'));
// console.log(west);
// console.log(west.dequeue());
// console.log(west);
// west.dequeue();
// console.log(west);
// console.log(west.dequeue());

module.exports = {Stack: Stack, Queue: Queue};
