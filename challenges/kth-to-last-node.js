//  * Write a function that takes two parameters, an integer and the head of a
//  * singly linked list, and returns the VALUE on the kth to last node in the list.

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(2, a));

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  let temp = head;
  let counter = 1;

  while (temp.next !== null) {
    counter += 1;
    temp = temp.next;
  }
  temp = head;
  counter = counter - k;

  while (counter !== 0) {
    counter -= 1;
    temp = temp.next;
  }
  return temp;
}

module.exports = { Node: Node, kthToLastNode: kthToLastNode };
