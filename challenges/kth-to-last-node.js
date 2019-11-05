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


function kthToLastNode(k, head) {
  let counter = 1;
  function llCounter (head) {
    if (!head.next) {
      return counter
    }
    else {
    counter += 1
    }
    head = head.next
    return llCounter(head)
  }
  llCounter(head)
  function retrieve (head) {
    let innerCounter = 6
    while (innerCounter != counter + 1 - k){
      function anotherFunc (head) {
        innerCounter += 1
        head = head.next
        return head.next
      }
      anotherFunc(head)
    }
    return head.next.value
  }
  let result = retrieve(head)
  return result
}
console.log(kthToLastNode(5, a))

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
