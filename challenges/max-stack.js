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
  this.length = 0;
  this.maxNum;
  this.sortObj ={}
  this.push = function(value){
    if(this.length === 0) {
      this.maxNum = value;
      this.sortObj[0] = this.maxNum;
    }
    if(this.maxNum < value) {
      this.maxNum = value;
      this.sortObj[this.length] = this.maxNum;
    }
    this.storage[this.length] = value;
    return ++this.length;
  }
  this.pop = function(){
    const deletedValue = this.storage[this.length-1]
    delete this.storage[this.length-1];
    if(this.sortObj.hasOwnProperty[this.length-1]){
      delete this.sortObj[this.length-1];
    }
    this.length--;
    return deletedValue;
  }
  this.getMax = function(){
    let maxValue = this.storage[0];
    for(let i=0; i<this.length; i++){
      if(maxValue< this.storage[i]) maxValue = this.storage[i];
    } 
    return maxValue;
  }
  this.getMax2 = function(){
    return this.maxNum;
  }

}

let stack1 = new Stack();
console.log('stack1:', stack1)
for(let i=0; i<5; i++){
  stack1.push(Math.floor(Math.random()*10))
}
console.log('stack1:', stack1)

for(let i=0; i<3; i++){
  stack1.pop()
}
console.log('stack1:', stack1)

stack1.getMax()
console.log('  stack1.getMax():',   stack1.getMax())
stack1.getMax2()
console.log('stack1.getMax2():', stack1.getMax2())

module.exports = Stack;