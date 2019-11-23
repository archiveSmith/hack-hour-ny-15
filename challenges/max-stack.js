/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new contents.length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {

  this.contents = {};
  this.contents.maxStack = { 0 : -Infinity };
  this.contents.stackLength = 0;
  this.contents.length = 0;
  this.__proto__.push = (val) => {
    this[this.contents.length] = val
    console.log(this.contents.stackLength)
    if (val >= this.contents.maxStack[this.contents.stackLength - 1] || this.contents.maxStack[0] === -Infinity) {
      this.contents.maxStack[this.contents.stackLength] = val
      this.contents.stackLength += 1
    }
    this.contents.length += 1
    return this.contents.length;
  }
  this.__proto__.pop = () => {
    if (this.contents.length === 0) {
      return 'There is no more to pop off'
    }
    const cache = this[this.contents.length - 1];
    delete this[this.contents.length - 1];
    if (cache === this.contents.maxStack[this.contents.stackLength - 1]) {
      delete this.contents.maxStack[this.contents.stackLength - 1]
      this.contents.stackLength -= 1;
    }
    this.contents.length -= 1;
    return cache;
  }
  this.__proto__.getMax = () => {
    return this.contents.maxStack[this.contents.stackLength - 1]
  }
}
// const myStack = new Stack();
// myStack.push(1)
// myStack.push(2)
// myStack.push(17)
// myStack.push(4)
// myStack.push(5)
// console.log(myStack)
// myStack.pop()
// console.log(myStack)
// myStack.pop()
// myStack.pop()
// console.log(myStack.getMax())
module.exports = Stack;