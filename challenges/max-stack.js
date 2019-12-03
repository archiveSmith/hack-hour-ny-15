/* eslint-disable no-multi-assign */
/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.storage = {};
  this.length = 0;
}
Stack.prototype.push = function (value) {
  if (this.storage[value] === undefined) {
    this.storage[this.length] = value;
    this.length += 1;
  }
  return this.length;
};
Stack.prototype.pop = function () {
  const value = this.storage[this.length - 1];
  delete this.storage[this.length - 1];
  this.length -= 1;
  return value;
};
Stack.prototype.getMax = function () {
  let maxVal = 0;
  const objArr = Object.values(this.storage);

  for (let i = 0; i < objArr.length; i += 1) {
    if (objArr[i] > maxVal) {
      maxVal = objArr[i];
    }
  }
  return maxVal;
};

const newStuff = new Stack();
console.log(newStuff.push(20));
console.log(newStuff.push(3));
console.log(newStuff.push(5));
console.log(newStuff.push(7));
console.log(newStuff.push(10));
console.log(newStuff);
console.log(newStuff.getMax());

module.exports = Stack;
