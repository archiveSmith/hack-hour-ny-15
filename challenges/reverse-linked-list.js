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

function reverseLinkedList(head) {
    // for each node:
    // remember the previous node 
    // record what the 'next's next' is
    // set the current next to the previous node (or null for head node);
//   const newLast = {};
//   newLast.value = head.value;
//   newLast.next = head.next;

  let previous = head;
  let current = head.next;
  head.next = null;
  while (current != null) {
    const followingNode = current.next;
    current.next = previous;
    previous = current;
    current = followingNode;
  }
  return current;
}

// TESTS:
// let a = new Node(1)
// let b = new Node(2)
// a.next = b
// let c = new Node(3)
// b.next = c
// let d = new Node(4)
// c.next = d
// let e = new Node(5)
// d.next = e
// console.log(a)

// console.log(reverseLinkedList(a))
// console.log(e)

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
