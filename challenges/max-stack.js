/*
 * Create a stack with the push, pop, and getMax methods.


 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.state = {};
  this.length = 0;
  this.max = Math.max();
  this.historyOfMax = [];

  // push should return the new length of the stack.
  this.push = (val) => {
    this.state[this.length] = val;
    this.length += 1;
    if (val >= this.max) {
      this.max = val;
      this.historyOfMax.push(val);
    }
    return this.length;
  };

  // pop should return the element that was just removed.
  this.pop = () => {
    const removedElement = this.state[this.length - 1];
    delete this.state[this.length - 1];
    this.length -= 1;
    if (removedElement === this.historyOfMax[this.historyOfMax.length - 1]) {
      this.historyOfMax.pop();
      this.max = this.historyOfMax[this.historyOfMax.length - 1];
    }
    return removedElement;
  };

  // getMax should return the largest value currently in the stack.
  this.getMax = () => this.max;
}

module.exports = Stack;
