/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */


/*
Input: Head of following linked list
1->2->3->4->NULL
Output: Linked list should be changed to,
4->3->2->1->NULL

Input: Head of following linked list
1->2->3->4->5->NULL
Output: Linked list should be changed to,
5->4->3->2->1->NULL

*/


function Node(value) {
  this.value = value;
  this.next = null;
}

function reverseLinkedList(head) {
  let prev = null;
  let temp;
  while (head) {
    temp = head.next;
    head.next = prev;
    prev = head;
    head = temp;
  }
  return prev;
  // let secondNode = head.next;
  // if (head.next === null) {
  //     return head;
  // };
  // while (secondNode.next !== null) {
  //     head.next = head;
  //     secondNode = head;

  // }
}

module.exports = { Node, reverseLinkedList };
