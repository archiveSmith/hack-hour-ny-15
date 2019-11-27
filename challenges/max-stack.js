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
  this.length = 0;
  this.maxStorage = [];
  this.push = (val) => {
    if (this.maxStorage[0] === undefined) this.maxStorage[0] = val;

    this.length += 1;
    this.storage[this.length - 1] = val;
    return this.length;
  };
  this.pop = () => {
    const popped = this.storage[this.length - 1];
    this.storage.splice(this.length - 1);
    return popped;
  };
}
const myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log(myStack.push(3));
myStack.push(4);
console.log(myStack);
console.log(myStack.pop());
console.log(myStack);


module.exports = Stack;
