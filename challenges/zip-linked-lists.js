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
  let firstListHead = l1;
  let SecondListHead = l2;
  let list1Pointer;
  let list2Pointer;
  while (firstListHead !== null && SecondListHead !== null) {
    list1Pointer = firstListHead.next;
    list2Pointer = SecondListHead.next;

    SecondListHead.next = list1Pointer;
    firstListHead.next = SecondListHead;

    firstListHead = list1Pointer;
    SecondListHead = list2Pointer;
  }
  return l1;
}

module.exports = { Node, zip };
