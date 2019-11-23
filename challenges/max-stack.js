/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  //push -  inserts el at len of arr and returns new len
  //if len 0, add el at index 0 []
  //if len 1, add el at index 1 [a]
  //pop - find el at len and remove and return el
  //[a,b] --> len = 2 --> remove el at index 1
  let arr = [];
  let len = arr.length;
  const push = val => {
    arr[len] = val;
    return len;
  };
  const pop = () => {
    let elToRemove = arr[len - 1];
    if (len === 0) {
      console.log("Array is empty, nothing to remove");
    } else {
      arr.splice(elToRemove, 1);
      return elToRemove;
    }
  };

  const getMax = () => {
    //O(n) linear complexity: sort ascending then retrieve last el
    if (len === 0) {
      console.log("Array is empty");
    } else {
      arr.sort((a, b) => a - b);
      return arr[len - 1];
    }

    //O(1) complexity:
  };
}

Stack.push(1);
Stack.push(2);
Stack.push(3);
Stack.push(4);

console.log(Stack());
module.exports = Stack;
