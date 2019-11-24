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

/*********************************Solution 2************************************************************* */

// function Stack() {
//   this.length = 0
//   this.store = {}
//   this.max = {
//     idx: 0,
//     val: Number.NEGATIVE_INFINITY
//   }
// }

// Stack.prototype.setNewMax = function () {
//   for (let i in this.store) {
//     if (this.store[i] > this.max.val) {
//       this.max.val = this.store[i]
//       this.max.idx = i
//     }
//   }
// }

// Stack.prototype.resetMax = function () {
//   this.max.val = Number.NEGATIVE_INFINITY
//   this.max.idx = -1
//   return
// }

// Stack.prototype.push = function (v) {
//   if (v > this.max.val) {
//     this.max.idx = this.length
//     this.max.val = v
//   }
//   this.store[this.length] = v
//   this.length++
//   return this.length
// }

// Stack.prototype.pop = function () {
//   if (this.length === 0) return undefined;
//   else {
//     var popped = this.store[this.length - 1]
//     if (popped === this.max.val) {
//       this.resetMax()
//     }
//     delete this.store[this.length - 1]
//     this.setNewMax()
//   }
//   this.length -= 1
//   return popped
// }

// Stack.prototype.getMax = function () {
//   return this.length === 0
//     ? undefined
//     : this.max.val
// }

module.exports = Stack;