/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}
//ghwgo hwgog
function stringRotation(s1, s2) {
  if(s1 === s2)  return true;
  if(s1.length !== s2.length) return false;
  const startingChar = s1[0];
  let startingIndex = s2.indexOf(startingChar);
  if(startingIndex === -1) return false;
  
  const obj ={};
  //for loop into object
  for(let i=0; i<s1.length; i++){
   if(!obj[s1[i]]){
    obj[s1[i]]= [i];
    } 
    else{
    obj[s1[i]].push(i);
    }
  }

  const obj2 ={};
  //for loop into object
  for(let i=0; i<s2.length; i++){
   if(!obj2[s2[i]]){
    obj2[s2[i]]= [i];
    } 
    else{
    obj2[s2[i]].push(i);
    }
  }

  if(obj[startingChar].length === 1){
    let index = 0;
    const newString = s2.slice(startingIndex) + s2.slice(0,startingIndex)
    while(index < newString.length){
      if(s1[index] !== newString[index]){
        return false;
      }
      index ++;
    }
    return true;
  }

   else{
     let stillChecking = false;
     for(let i=0; i< obj[startingChar].length; i++){
        startingIndex= obj2[startingChar][i];
        let index = 0;
        const newString = s2.slice(startingIndex) + s2.slice(0,startingIndex)
        while(index < newString.length){
          if(s1[index] !== newString[index] && i<obj[startingChar].length){
            stillChecking=true;  
            break;
          }
         else if(s1[index] !== newString[index] ) return false
        
         stillChecking =false;
         index++;
      } 
      if(!stillChecking) return true;
    }
  }
}

 
  console.log('  stringRotation("pplea", "pleap"):',   stringRotation("pplea", "pleap"));

 module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
