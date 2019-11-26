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

// function reverseLinkedList(head) {
//   if (!head.next) return head;
//   let curNode = head.next;
//   const headCopy = head;
//   while (head.next) {
//     // let penultimateNode =
//     if (!curNode.next) {
//       head = curNode;
//       headCopy.next = null;
//       return head;
//     }
//     curNode = curNode.next;
//   }
// }

function reverseLinkedList(head) {
  // return head if there are no other node in the linkList
  let node = head;
  // initialize tracking variable to be reasigned as I move from left to right;
  let previous;
  let temp;
  // Loop through from left to right,
  while (node) {
    temp = node.next;
    node.next = previous;

    // when temp becomes null, then the while loop is exited;
    previous = node;
    node = temp;
  }

  return previous;
}

module.exports = { Node, reverseLinkedList };
