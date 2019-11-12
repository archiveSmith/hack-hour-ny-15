/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){
  // FIRST ATTEMPT - FAILED
  // const parens = {
  //   '{': 0,
  //   '}': 0,
  //   '(': 0,
  //   ')': 0,
  //   '[': 0,
  //   ']': 0,
  // };
  // for (let i = 0; i < input.length; i++) {
  //   parens[input[i]]++;
  // }
  // console.log(parens)
  // return (
  //   parens['{'] !== parens['}'] ||
  //   parens['('] !== parens[')'] ||
  //   parens['['] !== parens[']']) ?
  //   false :
  //   true;

  // SECOND ATTEMPT
  /* HAVE TO CHECK THAT ALL TYPES OF PARENS 
  ARE BALANCED AND IN PROPER ORDER
  ...PERHAPS WE CAN USE A STACK
  */
  //SET UP STACK
  const parensStack = [];
  /* ITERATE THROUGH INPUT ADDING TYPES OF PARENS
  TO STACK, WHEN YOU HIT A CLOSING PARENS MAKE SURE
  IT MATCHES THE OPENING PARENS ON THE STACK, IF NOT, 
  RETURN FALSE
  */
  const parensOpen = "{[(";
  const parensClose = "}])"
  for (let i = 0; i < input.length; i++) {
    // if (parensOpen.includes(input[i])) {
    //   parensStack.push(input[i]);
    // } 
    switch(input[i]) {
      // ADD OPENING PARENS TO STACK
      case '{':
      case '(':
      case '[':
        parensStack.push(input[i]);
        break;
      // CHECK FOR EACH CASE OF CLOSING PARENS
      // IF IT DOESNT MATCH OPENING PARENS ON STACK
      // RETURN FALSE
      case '}':
        if (parensStack.slice(-1)[0] !== '{')
          return false;
        else
          parensStack.pop();
          break;
      case ')':
        if (parensStack.slice(-1)[0] !== '(')
          return false;
        else
          parensStack.pop();
          break;
      case ']':
        if (parensStack.slice(-1)[0] !== '[')
          return false;
        else
          parensStack.pop();
          break;
    }
  }
  // IF PARENS SUCCESSFULLY CLEARED FROM STACK
  // RETURN TRUE
  if (parensStack.length === 0)
    return true;
  // OTHERWISE RETURN FALSE
  return false;
}

// console.log(balancedParens('('));  // false
// console.log(balancedParens('()')); // true
// console.log(balancedParens(')('));  // false
// console.log(balancedParens('(())'));  // true

// console.log(balancedParens('[](){}')); // true
// console.log(balancedParens('[({})]'));   // true
// console.log(balancedParens('[(]{)}')); // false

// console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }'));
// console.log(balancedParens(' var hubble = function() { telescopes.awesome();'));

module.exports = balancedParens;
