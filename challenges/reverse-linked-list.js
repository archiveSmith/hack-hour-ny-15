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

function reverseInPlaceIterative(head) {
  let prev = null;
  let temp;
  while (head) {
    temp = head.next;
    head.next = prev;
    prev = head;
    head = temp;
  }
  return prev;
}

// // RECURSIVE APPROACH: O(n) time & O(n) space
// function reverseInPlaceRecursive(head) {
//   if (!head || !head.next) {
//     return head;
//   }
//   let temp = reverse(head.next);
//   head.next.next = head;
//   head.next = undefined;
//   return temp;
// }


console.log(reverseInPlaceIterative());

module.exports = { Node, reverseLinkedList };
