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

const l1 = new Node(1);
l1.next = new Node(2);
l1.next.next = new Node(30);
const l2 = new Node('a');
l2.next = new Node('b');
l2.next.next = new Node('c');

function zip(l1, l2) {

}

// const left = new Node(1);
// left.next = new Node(2);
// left.next.next = new Node(30);
// const right = new Node('a');
// right.next = new Node('b');
// right.next.next = new Node('c');

zip(currentL, currentR);
module.exports = { Node, zip };
