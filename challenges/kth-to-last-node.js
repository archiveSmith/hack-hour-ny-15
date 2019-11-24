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
  let curr = head;
  let listLength = 0;

  while (curr) {
    listLength += 1;
    curr = curr.next;
  }

  const position = listLength - (k - 1);
  let newCount = 0;
  let newCurr = head;

  while (newCurr) {
    newCount += 1;
    if (position === newCount) {
      return newCurr.value;
    }
    newCurr = newCurr.next;
  }
}

/****************************************************************************************************** */
// Solution 2

// function kthToLastNode(k, head) {
//   const valueAccumulator = [];
//   let currNode = head;
//   while (currNode){
//     const currNodeVal = currNode.value;
//     valueAccumulator.push(currNodeVal);
//     currNode = currNode.next;
//   }
//   if (k > valueAccumulator.length) return 'What are you doing???';
//   return valueAccumulator[valueAccumulator.length - k];
// }
/****************************************************************************************************** */
// Solution 3, recursively 

// function kthToLastNodeRecursive (k, head) {
//   // create an array to house values living in each node
//   const linkedListValues = [];
//   // create recursive helper function to iterate over the LL
//   function recursiveIterator (currNode) {
//     // upon recursive helper hitting 'null', it should return and end recursion
//     if (currNode === null) return;
//   // inside of helper function, access the value of current node and push it into the array storing the values
//     const currNodeVal = currNode.value;
//     linkedListValues.push(currNodeVal);
//     recursiveIterator(currNode.next);
//   }
//   // invoke recusive helper with inputted 'head'
//   recursiveIterator(head);
//   if (k > linkedListValues.length) return 'What are you doing???';
//   // return the value in the storage arrage at storage.length - k
//   return linkedListValues[linkedListValues.length - k];
// }

/****************************************************************************************************** */
// Solution 3, tail-call recursion

// function kthToLastNodeTailCall(k, head) {
//   // create an array to house values living in each node
//   const linkedListValues = [];
//   // create recursive helper function to iterate over the LL
//   function recursiveIterator (currNode, linkedListValues) {
//     // upon recursive helper hitting 'null', it should return and end recursion
//     if (currNode === null) {
//       return linkedListValues[linkedListValues.length - k];
//     }
//     // inside of helper function, access the value of current node and push it into the array storing the values
//     const currNodeVal = currNode.value;
//     linkedListValues.push(currNodeVal);
//     return recursiveIterator(currNode.next, linkedListValues);
//   }
//   // invoke recusive helper with inputted 'head'
//   return recursiveIterator(head, linkedListValues);
// }



// const a = new Node('A');
// const b = new Node('B');
// const c = new Node('C');
// const d = new Node('D');
// const e = new Node('E');

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;

console.log(kthToLastNode(2, a));

module.exports = { Node: Node, kthToLastNode: kthToLastNode };
