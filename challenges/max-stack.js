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
  this.index = 0
}

//GO OVER REST OPERATOR IN THIS SITUATION
Stack.prototype.push = function(...value) {
  for (let element of value) {
    this.storage[this.index++]= element
  }

  return this.index
}

Stack.prototype.pop = function() {
  if (this.index === 0) {
    return undefined
  } else {
    //get top most element from the stack
    const removed = this.storage[this.index-1];
    delete this.storage[--this.index-1];
    return removed
  }
}

Stack.prototype.getMax = function() {

  //get all the key value pairs in the storage
  let max = this.storage[0]

  
  for(let value of Object.values(this.storage)) {

    if (max < value) {
      max = value
    }

    if (typeof max === 'string') {
      max = Number(max)
    }
  }
  console.log(max)
  return max
}

let newStack = new Stack

newStack.push(10);
newStack.push(20);

console.log(newStack.getMax())
// newStack.pop()

module.exports = Stack;