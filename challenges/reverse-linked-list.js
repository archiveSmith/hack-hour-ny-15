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

}


const myList = new Node(5);
myList.next = new Node(4);
myList.next.next = new Node(3);
myList.next.next.next = new Node(2);
myList.next.next.next.next = new Node(1);
console.log(myList);

reverseLinkedList(myList);


module.exports = { Node, reverseLinkedList };
