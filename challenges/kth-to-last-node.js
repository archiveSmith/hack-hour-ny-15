/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A'); 0
 * const b = new Node('B'); 1
 * const c = new Node('C'); 2
 * const d = new Node('D'); 3
 * const e = new Node('E'); 4
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.length = null;
}

LinkedList.prototype.push = function(node) {
  if (this.head === null) {
    this.head = node;
    this.tail = node;
    this.index = 0;
    this.length = 1;
  } else {
    let previousNode = this.tail;
    previousNode.next = node;
    this.tail = node;
    this.index++;
    this.length++;
  }
};

function Node(val) {
  this.value = val;
  this.next = null;
  this.index = 0;
}

function kthToLastNode(k, head) {
  //return array.length - k
  let kthNode = head.length - k; //Node at 5-1 = 4th node
  console.log(kthNode);
  let currNode = head;
  while (currNode) {
    if (currNode.index === kthNode) {
      console.log(currNode.value);
      return currNode.value;
    } else {
      currNode = currNode.next;
    }
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");

const testLL = new LinkedList();
testLL.push(a);
testLL.push(b);
testLL.push(c);
testLL.push(d);
testLL.push(e);
console.log(testLL);
console.log(kthToLastNode(2, a));

module.exports = { Node: Node, kthToLastNode: kthToLastNode };
