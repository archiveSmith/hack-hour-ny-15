/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.stack = [];
  this.length = 0;
  this.push = (val) => {
    this.stack[this.length] = val;
    this.length += 1;
  };
  this.pop = () => {
    this.stack.splice(this.length - 1, 1);
  };
}


/**
* Queue Class
*/


function Queue(stack1, stack2) {
  this.queue = stack1.stack.concat(stack2.stack);
  this.length = stack1.length + stack2.length;
  this.push = (val) => {
    this.stack[this.length] = val;
    this.length += 1;
  };
  this.shift = () => {
    const shifted = this.queue[0];
    this.queue = this.queue.slice(1);
  };
}


module.exports = { Stack, Queue };
