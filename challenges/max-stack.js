/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = [];
  this.index = 0;
}

// push should return the new length of the stack.
Stack.prototype.push = function (value) {
  this.storage[this.index] = value;
  this.index++;
  return this.index;
};


// pop should return the element that was just removed
Stack.prototype.pop = function () {
  this.index--;
  const temp = this.storage[this.index];
  this.storage.splice(this.index, 1);
  return temp;
};

// getMax should return the largest value currently in the stack
Stack.prototype.getMax = function () {
  return this.storage.reduce((a, b) => Math.max(a, b));
};

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.push(8);
stack.push(7);
stack.getMax(10);


module.exports = Stack;
