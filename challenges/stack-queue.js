/**
 * Create a stack.Then create a queue using two stacks.
 */

//first one added to stack, last one out
// [a,b,c,d]
// push to the front of the stack 


function Stack() {
    this.index = 0
    this.storage = {}
}

Stack.prototype.push = function (value){
    this.storage[this.index]=value
    this.index++
}

Stack.prototype.pop = function (){
    let length = Object.keys(this.storage)
    if (length === 0) {console.log("no items in array to pop")}
    else {
        let removed = this.storage[this.index-1]
        delete this.storage[this.index-1]
        this.index--
        return removed
    }
}


/**
* Queue Class
*/


function Queue() {
    //enqueue
    //dequeue --> remove eleement from front
    this.storage = {}
    this.index = 0
}


module.exports = {Stack: Stack, Queue: Queue};
