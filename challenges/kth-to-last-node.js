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
  if (k < 1) return undefined
  let curr = head;
  let counter = 0;
  while (curr) {
    counter += 1;
    curr = curr.next
  }
  if (counter < k) return undefined
  let targetLinkNumber = counter - k;
  curr = head;
  while (targetLinkNumber > 0) {
    targetLinkNumber -= 1
    curr = curr.next
  }
  return curr.value 
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
console.log(kthToLastNode(2, a))

module.exports = {Node: Node, kthToLastNode: kthToLastNode};


// function Node(val) {
//   this.value = val;
//   this.next = null;
// }

// function kthToLastNode(k, head) {
//   const nextSuffix = ".next"
//   let searchStr = nextSuffix.repeat(k);
//   console.log(searchStr)
//   // searchStr = eval(searchStr.slice(1))
//   let curr = head;
//   console.log(curr + )


//   if (curr + searchStr) {
//     console.log('does not exist')
//     return 'does not exist'; 
//   }
//   while (true) {
//     if (curr.next.next === null) {
//       console.log('this works')
//       return curr.value
//     }
//     console.log(curr)
//     console.log(`${curr}`)
//     if (`${curr}${searchStr}` === null) {
//       return curr.value;
//     }
//     console.log(curr)
//     if (curr.next === null) {
//       return 'error- no.next'
//     }
//       curr = curr.next
//   }
//   console.log('error')
//   return 'error Return'
// }
