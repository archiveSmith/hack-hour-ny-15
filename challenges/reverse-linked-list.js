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
  // assign new node to head and check to see if it contains a
  let newStart;
  const newLinkedList = new Node(head);
  if (newLinkedList.next === null) {

  }
}


console.log(reverseLinkedList());

module.exports = { Node, reverseLinkedList };
