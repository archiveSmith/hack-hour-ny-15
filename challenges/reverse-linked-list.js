/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList( head ) {
    // INITIALIZE NEWHEAD AS NEW NODE W/ HEAD VALUE TO START FROM 
    let newHead = new Node( head.value );
    // INTIALIZE KEY VALUES FOR WHILE LOOP
    let pointer = head;

    // ITERATE THROUGH OG LINKED LIST TILL YOU HIT NULL
    // USE POINTER.NEXT TO MAKE NEW NODE AND SET ITS
    // NEXT TO NEWHEAD, FINALLY CHANGE POINTER TO POINTER.NEXT
    while ( pointer.next !== null ) {
      let nextNode = new Node( pointer.next.value );
      nextNode.next = newHead;
      newHead = nextNode;
      pointer = pointer.next;
    }
    // RETURN NEWHEAD
    return newHead;
}

// let one = new Node( 1 );
// let two = new Node( 2 );
// let three = new Node( 3 );
// let four = new Node( 4 );
// let five = new Node( 5 );
// one.next = two;
// two.next = three;
// three.next = four;
// four.next = five;

// console.log(reverseLinkedList(one)); 

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
