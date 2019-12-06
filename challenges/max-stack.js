/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.storage = [];
  this.index = 0;
}

Stack.prototype.push = function (value) {
  if (!value) return this.index;
  this.storage[this.index] = value;
  this.index += 1;
  return this.index;
};

Stack.prototype.pop = function () {
  const poppedElement = this.storage[this.index - 1];
  console.log(poppedElement);
  this.storage.splice(this.index - 1, 1);
  this.index -= 1;
  return poppedElement;
};

Stack.prototype.getMax = function () {
  if (this.index === 0) return undefined;
  let max = 0;
  let currentEl;
  for (const el of this.storage) {
    currentEl = el;
    if (currentEl > max) {
      max = currentEl;
    }
  }
  return max;
};


// const myStack = new Stack();
// myStack.push(25);
// myStack.push(2);
// myStack.push(15);
// myStack.push(32);
// myStack.push(9);

// console.log(myStack);
// console.log(myStack.push());

// myStack.pop();

// console.log(myStack);

// console.log(myStack.getMax());


module.exports = Stack;
