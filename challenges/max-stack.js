/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

// function Stack() {
//   // body...
// }

class Stack {
  constructor() {
    this.items = [];
  }

  push(val) {
    if (this.items.length === 0) {
      this.items[0] = val;
    } else {
      this.items[this.items.length] = val;
    }
    return this.items.length;
  }

  pop() {
    const poppedElement = this.items[this.items.length - 1];
    this.items.length = this.items.length - 1;
    return poppedElement;
  }

  getMax() {
    let max = null;
    let curMax;

    for (let i = 0; i < this.items.length; i += 1) {
      const frontElement = this.items[i];
      const backElement = this.items[this.items.length - 1 - i];
      curMax = frontElement;
      if (frontElement >= backElement) {
        curMax = frontElement;
        if (curMax > max) {
          max = curMax;
          curMax = null;
        }
      } else if (backElement > frontElement) {
        curMax = backElement;
        if (curMax > max) {
          max = curMax;
          curMax = null;
        }
      } else {
        curMax = backElement;
        if (curMax > max) {
          max = curMax;
          curMax = null;
        }
      }
    }
    return max;
  }
}

module.exports = Stack;
