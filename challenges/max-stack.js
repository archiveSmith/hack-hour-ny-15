/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  const stackOut = {
    elements: [],
    maxVal: function() {
      const tempSorted = this.elements.sort();
      return tempSorted[tempSorted.length - 1];
    },
    push: function(numIn) {
      this.elements = this.elements.concat(numIn);
      return this.elements.length;
    },
    pop: function() {
      let elemOut = this.elements[this.elements.length - 1];
      this.elements = this.elements.slice(0, this.elements.length - 1);
      return elemOut;
    },
    getMax: function() {
      this.maxVal();
    }
  };

  return stackOut;
}

let myStack = Stack();
console.log(myStack.push(1));
console.log(myStack.push(5));
console.log(myStack.push(-999));
console.log(myStack.pop());
console.log(myStack.getMax());

module.exports = Stack;
