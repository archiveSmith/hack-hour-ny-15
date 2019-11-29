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
  if (k <= 0) return 'K must be a positive integer';
  const cache = {};
  let current = head;
  let counter = 1;
  while (current) {
    if (!current.next) cache.length = counter;
    cache[counter] = current.value;
    current = current.next;
    counter += 1;
  }
  if (k > cache.length) return 'List does not have that many nodes';
  return cache[cache.length - 4 + 1];
}

module.exports = { Node, kthToLastNode };
