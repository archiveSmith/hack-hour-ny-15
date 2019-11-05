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
    if (k <= 0) k = 1;
    let length = 0;

    let node = head;
    while (node) {
        length++;
        node = node.next;
    }
    node = head;
    let position = 0;
    while (position < length - k) {
        position++;
        node = node.next;
    }
    return node.value;
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

//kthToLastNode(2, a); // -> returns 'D' (the value on the second to last node)
console.log(' kthToLastNode(0, a):', kthToLastNode(7, a))



module.exports = { Node: Node, kthToLastNode: kthToLastNode };