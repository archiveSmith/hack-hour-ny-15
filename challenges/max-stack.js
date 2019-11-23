/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.contents = {};
  this.length = 0;
  this.push = function(val) {
    this.contents[this.length] = val;
    this.length += 1;
    return this.length;
  }
  this.pop = function() {
    const toBePopped = this.contents[this.length - 1];
    delete this.contents[this.length - 1];
    this.length -= 1;
    return toBePopped;
  }
  this.getMax = function() {
    const stackFrames = Object.values(this.contents);
    if(this.length < 1) {
      return undefined;
    }
    return Math.max(...stackFrames);
  }
}

// const standings = new Stack();
// console.log(standings);
// console.log(standings.push(25));
// console.log(standings);
// standings.push(45);
// console.log(standings.getMax());
// standings.push(7);
// console.log('AFTER 7: ', standings.getMax());
// standings.push(97);
// console.log(standings.push(-4));
// console.log('AFTER -4: ', standings.getMax());
// console.log(standings);

// console.log(standings.pop());
// console.log(standings);
// console.log(standings.getMax());
// standings.pop();
// console.log(standings.getMax());
// standings.pop();
// standings.pop();
// console.log(standings.pop());
// console.log(standings);



module.exports = Stack;