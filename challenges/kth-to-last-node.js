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
  //function returns a value on the kth to the last node;
  //how do you find the last node;
  //start iterating from there to find the kth to the last node from there
  let currentNode = head;
  const target = k;
  let length = 0;

  // iterate through node until reaching kth to last
  while(currentNode) {
    //console.log(currentNode);
    currentNode = currentNode.next;
   length += 1;
    //console.log('length',length)
    //console.log('k', k)
  }  
    let newTargetLocation = length - k - 1;

    //console.log(newTargetLocation)
    //loop through the linked list a second timee
    currentNode = head;
    let newCount = 0;
    while (currentNode) {
      newCount += 1;
      currentNode = currentNode.next;
      if (newCount === newTargetLocation) return currentNode.value;
      
    }
}


const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
//console.log(a.contains(''))
a.next = b;
b.next = c;
c.next = d;
d.next = e;
//console.log(kthToLastNode(2, a));
//console.log(kthToLastNode())


  //)
  // while (current.value !== k) {
  //   if (current.next === null) {
  //     console.log(current.value)
  //     return false;
  //   } else {
  //     current = current.next;
  //   }
  // }
  // //if (current.value === value) return true;
  // return true;
//   let length = 1;
//   while (current) {
//     current = current.next;
//     length += 1;
//   }
//   length = length - 1;


//   let newCount = 0;

//   current = head;
//   while (newCount < length - k) {
//     current = current.next;
//     newCount += 1;
//   }
//   return current.value;
// }
  // while (current.value) {
  //   let current = head;
  //   if (current.next === undefined) {
  //     console.log(current.value)
  //   }
  // }



// Node.prototype.contains = function (value) {
//   //start at the head node and find the next node
//   let newHead = this.next;
//   if (head.next !== null) {
//     //if the next value on the head node isn't null
//     //check the current value to see if it is the same as the passed in value
//     // else check next node to see if it contains a null value for the next value
//     while (newHead.value !== value) {
//       if (newHead.next === null) {
//         return false;
//       } else {
//         newHead = newHead.next;
//       }

//     }
//   }
//   return 'Not found!';
//}




module.exports = {Node: Node, kthToLastNode: kthToLastNode};
