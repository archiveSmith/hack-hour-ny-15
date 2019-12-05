/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.storage={};
    this.push= function(value){
        this.storage[this.length]=value;
        this.length++;
    }
    this.pop = function(){
        const value = this.storage[this.length-1];
        delete this.storage[this.length-1];
        this.length--;
        return value;
    }
    this.length= 0;
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.pop();
console.log('stack:', stack)

/**
* Queue Class
*/


function Queue() {
    const stack1 = new Stack();
    const stack2 = new Stack();
    this.storage = stack1.storage;
    this.push = stack1.push;
    this.length= stack1.length;
    this.unshift = function(){
    console.log('stack1.length:', stack1.length)
       let i = 0;
        while(i < stack1.length){
           stack2.push(stack1.pop())
           i++;
       }
       let value= stack2.pop();
    //    while(stack2.length){
    //     console.log('stack2.length:', stack2.length)
    //     stack1.push(stack2.pop())
    //    }
       return value;
    }
}
const queue = new Queue();
queue.push(1);
console.log('queue:', queue)
queue.push(2);
console.log('queue:', queue)
queue.unshift();
console.log('queue:', queue)

module.exports = {Stack: Stack, Queue: Queue};
