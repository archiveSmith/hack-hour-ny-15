/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // O(1) MAXVALUE
  let maxValue = Math.max();
  // OBJECT OF STACK VALUES
  const storage = {};
  // COUNT OF HOW MANY VALUES ON STACK
  let count = 0;

  // OBJECT THAT CONTAINS FUNCTIONALITY OF STACK
  return {
    // ADD VALUE TO TOP PF STACK
    push: function(val) {
      if (typeof val === 'number') {
        storage[count++] = val;
        if (val > maxValue) 
          maxValue = val;
        return count;
      }
      return 'please push a number value, one at a time';
    },
    // REMOVE VALUE FROM TOP OF STACK
    pop: function() {
      if (count > 0) {
        let temp = storage[--count];
        delete storage[count];
        // CHANGE MAXVALUE IF IT IS POPPED OFF OF STACK
        if (temp === maxValue) {
          maxValue = Math.max();
          for (let i = 0; i < count; ++i) {
            if (storage[i] > maxValue)
              maxValue = storage[i];
          }
        }
        return temp;
      }
      return 'stack is currently empty';
    },
    // GET MAXVALUE OF STACK
    getMax: function() {
      return maxValue;
    },
    // GET COUNT OF STACK
    getCount: function() {
      return count;
    }
  }
}

let stack = new Stack();
console.log(stack);
console.log(stack.push(7));
console.log(stack.push(3));
console.log(stack.push(91));
console.log(stack.push(6));
console.log(stack.push(1));
console.log(stack.pop());
console.log(stack.getMax());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.getMax());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.getMax());
console.log(stack.getCount());
console.log(stack.pop());



module.exports = Stack;