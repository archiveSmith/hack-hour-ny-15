/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = [];
  this.index = 0;
  this.length = 0;
}

Stack.prototype.pushed = function (item) {
  if (!item) return this.length;
  this.storage[this.index] = item;
  this.index += 1;
  this.length += 1;
  return this.length;
};


/**
* Queue Class
*/


function Queue() {

}

const myStack = new Stack();

console.log(myStack);

myStack.pushed(3);

console.log(myStack);


module.exports = { Stack, Queue };
