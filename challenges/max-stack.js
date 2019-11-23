/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  const arr = [];
  let length = 0;

  this.push = function (ele) {
    arr[length] = ele;
    length += 1;
    return length;
  }

  this.pop = function () {
    let popped = arr[length - 1];
    length -= 1;
    arr.slice(0, length);

    return popped;
  } 

  this.getMax = function () {
    if(arr[0] === undefined) return undefined;
    let max = arr[0];

     arr.forEach(ele => {
       if(ele > max) max = ele;
     });

    return max;
  }
}



module.exports = Stack;