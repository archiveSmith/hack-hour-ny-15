/* eslint-disable no-console */
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
  const current1 = l1;
  console.log(current1);
  const current2 = l2;
  while (l1 && l2) {
    const snip1 = current1.next;
    current1.next = current2;
  }
}

const left = new Node(1);
left.next = new Node(2);
left.next.next = new Node(3);
const right = new Node('a');
right.next = new Node('b');
right.next.next = new Node('c');

console.log(zip(left, right));
module.exports = { Node, zip };
