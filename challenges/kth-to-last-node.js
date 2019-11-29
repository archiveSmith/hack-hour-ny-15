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

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(a);


function kthToLastNode(k, head) {
  const cache = {};
  let current = head;
  let counter = 1;
  while (current) {
    if (!current.next) cache.length = counter;
    cache[counter] = current.value;
    current = current.next;
    counter += 1;
  }
  return cache[cache.length - k + 1];
}

console.log(kthToLastNode(3, a));

module.exports = { Node, kthToLastNode };
