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
  if (input == '') {
    return true
  }
  console.log(input)
  for (let i = 0; i < input.length; i += 1) {
    let start;
    let end;
    let contents;

    if (input[i] == '(') {
      start = i;
      console.log(input)
      for (let j = i + 1; j < input.length; j += 1) {
        console.log(j)
        if (input[j] && (input[j] == ')')) {
          end = input[j]
          console.log(j)
          contents = input.slice(i+1, j)
          console.log(contents)
          if (balancedParens(contents) != true) {
            return false
          }
        } 
      }
      if (end === undefined) {
        console.log(end)
        return false
      }            
    }

    if (input[i] == '[') {
      start = i;
      console.log(input)
      for (let j = i + 1; j < input.length; j += 1) {
        if (input[j] && input[j] == ']') {
          end = j

          contents = input.slice(i+1, j)
          console.log(contents)
          if (balancedParens(contents) != true) {
            return false
          }
        }
        console.log('this')
      }
      if (end === undefined) {
        return false
      }
    }

    if (input[i] == '{') {
      start = i;
      for (let j = i + 1; j < input.length; j += 1) {
        if (input[j] && input[j] == '}') {
          end = input[j]
          contents = input.slice(i+1, j)
          if (balancedParens(contents) != true) {
            return false
          }
        }
      }
      if (end === undefined) {
        return false
      }
    }
    if (!start && input[i] == ')') {
      return false 
    }
    if (!start && input[i] == ']') {
      return false 
    }
    if (!start && input[i] == '}') {
      return false 
    }
    console.log(input)
  }
  console.log(input)
  return true
}

console.log(balancedParens('[](){}'))
console.log(balancedParens('[({})]'))
console.log(balancedParens('[(]{)}'))
console.log(balancedParens('[a(b)c]'))


// * Example:
// *  balancedParens('[](){}'); // true
// *  balancedParens('[({})]');   // true
// *  balancedParens('[(]{)}'); // false


module.exports = balancedParens;
