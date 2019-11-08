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
  
  if(head && head.next === null) return head.value;

  if (head && k !== undefined){
    let i = 1
    let tempValue = head;
    while (tempValue.next !== null){
        tempValue = tempValue.next
        i++
    };
    
    if(k > i) return undefined;

    let a = (i-k)
    while(head !== null && a > 0){
      head = head.next;
      a--
    }
  
    return head.value

  }
  else {
    
    return undefined;
    
  }

}


// const a = new Node('A');
// const b = new Node('B');
// const c = new Node('C');
// const d = new Node('D');
//  const e = new Node('E');

//  a.next = b;
//  b.next = c;
//  c.next = d;
//  d.next = e;
 
//  console.log(kthToLastNode(2, a));

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
