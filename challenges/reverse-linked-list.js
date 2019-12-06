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

function reverseLinkedList(head) {
  // const newHead = new Node();
  if (head.next === null) return head;

  let pointer = head.next;
  let previous = head

  while (pointer !== null) {
    head = pointer;
    pointer = pointer.next;
    }
   
  }
  console.log(head);
}

const a = new Node(1); console.log(a);
a.next = new Node(2);
a.next.next = new Node(3);

console.log(a);

console.log(reverseLinkedList(a));

module.exports = { Node, reverseLinkedList };
