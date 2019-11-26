/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

var list1 = {
  data: 1,
  next: {
    data: 2,
    next: {
      data: 3,
      next: null
    }
  }
};

function Node(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  // head will be the top of the list
  // we'll define it as null for now
  this.head = null;
  this.length = 0;

  this.add = function(data) {
    var nodeToAdd = new Node(data),
      nodeToCheck = this.head;
    // if the head is null
    if (!nodeToCheck) {
      this.head = nodeToAdd;
      this.length++;
      return nodeToAdd;
    }
    // loop until we find the end
    while (nodeToCheck.next) {
      nodeToCheck = nodeToCheck.next;
    }
    // once were at the end of the list
    nodeToCheck.next = nodeToAdd;
    this.length++;
    return nodeToAdd;
  };
}

function reverseLinkedList(head) {
  const dataArr = [];
  dataArr.push(head.data);
  while (head.next !== null) {
    head = head.next;
    dataArr.push(head.data);
  }
  revDataArr = dataArr.reverse();
  let newList = null;
  for (var i = revDataArr.length - 1; i >= 0; i--)
    newList = { value: revDataArr[i], next: newList };
  return newList;
}

console.log(reverseLinkedList(list1));

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
