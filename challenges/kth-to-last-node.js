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


//create a function to add new node to end of list 
//if the node exists, go to next 
//if it doesnt exist create a new node 

//find the length and set current to head 
//


function pushNode(val,head) { 
  let current = head; 
  let added = false; 
 
  while (current) { 
    next = new Node;
    if (added === false && current.next === null) { 
      current.next = new Node(val); 
      added = true; 
    } 
    current = current.next; 
  }

}
function kthToLastNode(k, head) { 
  let current = head; 
  let length = 1; 
  
 while (current) { 
   current = current.next; 
   length++; 
  } 
  // find length - k and return current value 
  length = length - 1;
  let newCount = 0; 
 current = head; 
 while (newCount < length - k) { 
   current = current.next;
    newCount++; 
  } 
  return current.value;

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
console.log(kthToLastNode(2, a));


module.exports = {Node: Node, kthToLastNode: kthToLastNode};
