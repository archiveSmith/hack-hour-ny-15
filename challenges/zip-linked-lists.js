/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  if (!l2) return l1;


  let currPointer = l1.head;
  let nextPointer = currPointer.next;
  let pointer2 = l2.head.next;

  while (pointer2 !== null) {
    currPointer.next = l2.head;
    l2.head.next = nextPointer;

    currPointer = nextPointer;
    nextPointer = nextPointer.next;

    l2.head = pointer2;
    pointer2 = pointer2.next;


    if (pointer2 === null) {
      currPointer.next = l2.head;
    }
  }
  return l1;
}


// const l1 = new Node(1);
// l1.next = new Node(2);
// l1.next.next = new Node(3);

// const l2 = new Node(4);
// l2.next = new Node(5);
// l2.next.next = new Node(6);


// console.log(l1);
// console.log(l2);

// console.log(zip(l1, l2));


module.exports = { Node, zip };
