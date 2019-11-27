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

function Node(val) {
  this.value = val;
  this.next = null;
}
​
function zip(left, right) {
  const head = left;
  while (left !== null || right !== null) {
    if (left === null) {
      right.next = left;
      return head;
    }
    if (right === null) {
      left.next = right;
      return head;
    }
    const leftsOGNext = left.next;
    const rightsOGNext = right.next;
    left.next = right;
    right.next = leftsOGNext;
    left = leftsOGNext;
    right = rightsOGNext;
  }
  return head;
};


module.exports = { Node, zip };
