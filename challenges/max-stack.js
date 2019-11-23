/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.storage = {}
  this.index = 0
  this.previous = 0
  this.max = [0]
}

Stack.prototype.push = function(value) {
  this.storage[this.index] = value
  this.index += 1
  if (this.max[this.max.length - 1] <= value) this.max.push(value) 
  return this.index
}

Stack.prototype.pop = function(){
  let temp = this.storage[this.index - 1]
  if (this.max[this.max.length - 1] === temp) this.max.pop()
  delete this.storage[this.index - 1]
  this.index -= 1
  return temp
}

Stack.prototype.getMax = function(){
  return this.max[this.max.length - 1]
}


module.exports = Stack;