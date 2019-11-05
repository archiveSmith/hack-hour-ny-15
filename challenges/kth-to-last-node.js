/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  // CHECK IF INPUT IS BELOW RANGE
  if (k < 1) 
    return 'ERROR: OUT OF RANGE - INPUT (k) TOO SMALL';

  // DECLARE VARIABLES TO COUNT LENGTH OF ARRAY 
  // AND POINT AT CURRENT NODE
  let count = 0;
  let pointer = head;

  // RUN THROUGH LIST AND INCREMENT COUNT TO FIND LENGTH
  while (pointer !== null) {
    count++;
    pointer = pointer.next;
  }

  // CHECK IF INPUT IS ABOVE, OR PAST, RANGE
  if (k > count)
    return 'ERROR: OUT OF RANGE - INPUT (k) TOO LARGE';

  // REASSIGN POINTER BACK TO STARTING HEAD NODE
  pointer = head;

  // DECLARE VARIABLE TO TRACK CURRENT POSITION IN LIST
  // THEN ITERATE THROUGH LIST TO CORRECT POSITION
  let position = 1;
  while (position <= count - k) {
    pointer = pointer.next;
    position++;
  }
  
  // RETURN VALUE OF POINTER WHICH SHOULD POINT AT PROPER NODE
  return pointer.value;
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(8, a)); //-> returns 'D'

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
